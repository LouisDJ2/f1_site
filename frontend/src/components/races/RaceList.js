import RaceItem from "./RaceItem";
import classes from "./RaceList.module.css";

function RaceList(props) {
  if (props.races === "" && props.admin) {
    return <h2>You have no races, sign up to some races.</h2>;
  } else if (props.races === "") {
    return <h2>No races found.</h2>;
  }

  //if you are on the page search races the race should not be visible when date has passed.

  return (
    <ul className={classes.list}>
      {props.races.map((race) => (
        <>
          <RaceItem
            key={race.unique_ID_race}
            id={race.unique_ID_race}
            name={race.name}
            conditions={race.conditions}
            date={race.time}
            tracks={props.tracks}
            maxPlayers={race.max_players}
            budget={race.budget}
            admin={race.race_admin}
            myRace={props.myRace}
            drivers={props.drivers}
            cars={props.cars}
            tires={props.tires}
            aero={props.aero}
          />
        </>
      ))}
    </ul>
  );
}
export default RaceList;
