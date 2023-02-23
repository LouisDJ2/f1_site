import classes from "./Home.module.css";
import HomeBar from "../components/layout/HomeBar";
import Banner from "../components/layout/Banner";
import { Link } from "react-router-dom";
import { useEffect } from "react";
import { useFetch } from "react";

function Home(props) {
  return (
    <section>
      <Banner />
      <HomeBar isLoggedIn={props.isAuthenticated} onLogout={props.onLogout} />
      <div className={classes.center}>
        <div>
          <h1 className={classes.h1}>Welcome to F1 Ultimate Team!</h1>
        </div>
        <div>
          <Link to="/new-race" className={classes.link}>
            <button className={classes.button}>New Race</button>
          </Link>
        </div>
        <div>
          <Link to="/race-search" className={classes.link}>
            <button className={classes.button}>Search Races</button>
          </Link>
        </div>
        <div>
          <Link to="/my-races" className={classes.link}>
            <button className={classes.button}>My Races</button>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Home;
