import RaceList from "../components/races/RaceList";
import { useEffect, useState } from "react";
import { useCookies } from "react-cookie";

function MyRaces(props) {
  const [loading, setLoading] = useState(true);

  const [data, setData] = useState([]);
  const [races, setRaces] = useState([]);
  const [tracks, setTracks] = useState([]);
  const [userRaces, setUserRaces] = useState([]);
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  //-------fetch races from the user-------
  useEffect(() => {
    fetch("http://localhost:3001/race/getraceofusers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        id: cookies.UserId,
      }),
    })
      .then((resUserRace) => resUserRace.json())
      .then((dataRace) => {
        console.log("user races: ", dataRace);
        console.log("all races: ", props.races);
        setUserRaces(dataRace.races);
        setRaces(props.races);
        setTracks(props.tracks);
      })
      .finally(() => {
        console.log(userRaces);
        setLoading(false);
      });
  }, []);

  function toJSON(userRace) {
    races.forEach((race) => {
      console.log("id1: ", race.unique_ID_race, "-  id2: ", userRace.race_id);
      if (race.unique_ID_race === userRace.race_id) {
        console.log(race);
        setData((data) => [...data, race]);
      }
    });
  }

  //------search wich races belong to the user and store them in an array-------
  useEffect(() => {
    userRaces.forEach(toJSON);
  }, [loading]);

  if (data === null || tracks === null) {
    return (
      <div>
        <h1>loading....</h1>
      </div>
    );
  } else {
    console.log("data of races:", data);
    return (
      <div>
        <h1>My Races</h1>
        <RaceList
          races={data}
          tracks={tracks}
          myRace={true}
          drivers={props.drivers}
          cars={props.cars}
          tires={props.tires}
          aero={props.aero}
        />
      </div>
    );
  }
}

export default MyRaces;
