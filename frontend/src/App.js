import React, { useState, useEffect } from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import Login from "./pages/Login/Login";
import Register from "./pages/Login/Register";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import MyRaces from "./pages/MyRaces";
import NewRace from "./pages/NewRace";
import RaceSearch from "./pages/RaceSearch";
import { useCookies } from "react-cookie";
import "@fontsource/titillium-web"; //https://www.npmjs.com/package/@fontsource/titillium-web

function App() {
  //-------load all races, tracks, drivers and carcomponents here-------
  const [loading, setLoading] = useState(true);
  const [races, setRaces] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [drivers, setDrivers] = useState([]);
  const [cars, setCars] = useState([]);
  const [aero, setAero] = useState([]);
  const [tires, setTires] = useState([]);
  useEffect(() => {
    Promise.all([
      fetch("http://localhost:3001/race/getall"),
      fetch("http://localhost:3001/tracks/all"),
      fetch("http://localhost:3001/drivers/all"),
      fetch("http://localhost:3001/cars/all"),
      fetch("http://localhost:3001/aero/all"),
      fetch("http://localhost:3001/tires/all"),
    ])
      .then(([resRace, resTracks, resDrivers, resCars, resAero, resTires]) =>
        Promise.all([
          resRace.json(),
          resTracks.json(),
          resDrivers.json(),
          resCars.json(),
          resAero.json(),
          resTires.json(),
        ])
      )
      .then(
        ([
          dataRace,
          dataTracks,
          dataDrivers,
          dataCars,
          dataAero,
          dataTires,
        ]) => {
          setRaces(dataRace);
          setTracks(dataTracks.tracks);
          setDrivers(dataDrivers.drivers);
          setCars(dataCars.cars);
          setAero(dataAero.aero);
          setTires(dataTires.result);
        }
      )
      .catch((e) => {
        console.log(e);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  //set true when logged in
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  //update cookies
  const [cookies, setCookie] = useCookies(["user"]);
  //set isloggedin variable true when logged in and vice versa
  useEffect(() => {
    const storedUserLoggedInInformation = cookies.LoggedIn;
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);
  //post login info to server when logging in
  async function loginHandler(username, password) {
    const response = await fetch("http://localhost:3001/users/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        password: password,
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      setCookie("UserId", data.user.id, { path: "/" });
      setCookie("LoggedIn", "1", { path: "/" });
      setCookie("Role", data.user.authentication, { path: "/" });
      setIsLoggedIn(true);
    } else {
      window.alert(data.message);
    }
  }
  //Reset cookies and set isloogedin to false when logging out
  const logoutHandler = () => {
    setCookie("UserId", "", { path: "/" });
    setCookie("LoggedIn", "", { path: "/" });
    setCookie("Role", "", { path: "/" });
    setIsLoggedIn(false);
  };
  //post register info to server when registering
  async function registerHandler(username, email, password) {
    const response = await fetch("http://localhost:3001/users/add", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: username,
        email: email,
        password: password,
        authorisation: "user_level",
      }),
    });
    const data = await response.json();
    if (data.status === "ok") {
      window.alert("Signup completed!");
      setCookie("UserId", data.user.id, { path: "/" });
      setCookie("LoggedIn", "1", { path: "/" });
      setCookie("Role", "user_level", { path: "/" });
      setIsLoggedIn(true);
    } else {
      window.alert(data.message);
    }
  }

  return (
    <Switch>
      <Route path="/" exact={true}>
        {!isLoggedIn ? (
          <Login onLogin={loginHandler} />
        ) : (
          <Redirect to="/home" />
        )}
      </Route>
      <Route path="/register">
        {!isLoggedIn ? (
          <Register onRegister={registerHandler} />
        ) : (
          <Redirect to="/home" />
        )}
      </Route>
      <Route path="/home">
        {isLoggedIn ? <Home onLogout={logoutHandler} /> : <Redirect to="/" />}
      </Route>
      <Layout onLogout={logoutHandler}>
        <Route path="/my-races">
          {isLoggedIn ? (
            <MyRaces
              races={races}
              tracks={tracks}
              drivers={drivers}
              aero={aero}
              tires={tires}
              cars={cars}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
        <Route path="/new-race">
          {isLoggedIn ? <NewRace /> : <Redirect to="/" />}
        </Route>
        <Route path="/race-search">
          {isLoggedIn ? (
            <RaceSearch
              races={races}
              tracks={tracks}
              drivers={drivers}
              aero={aero}
              tires={tires}
              cars={cars}
            />
          ) : (
            <Redirect to="/" />
          )}
        </Route>
      </Layout>
    </Switch>
  );
}

export default App;
