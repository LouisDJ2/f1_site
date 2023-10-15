import classes from "./Signup.module.css";
import "/node_modules/flag-icons/css/flag-icons.min.css";
import car from "./pictures/f1-car.jpg";
import RaceInfo from "./RaceInfo";
import CarComponents from "./CarComponents";
import { RaceContext } from "./RaceContext";
import { useState } from "react";

function Signup(props) {
  const [selectedDriver1, setSelectedDriver1] = useState(1);
  const [selectedDriver2, setSelectedDriver2] = useState(1);
  const [selectedTires, setSelectedTires] = useState(1);
  const [selectedAero, setSelectedAero] = useState(1);
  const [selectedCar, setSelectedCar] = useState(1);
  const [usedBudget, setUsedBuget] = useState(1);

  function closeSignup() {
    props.onCancel();
  }

  function confirmSignup() {
    props.onConfirm(
      selectedCar,
      selectedAero,
      selectedTires,
      selectedDriver1,
      selectedDriver2,
      usedBudget
    );
  }

  //-------Component-------
  return (
    <div className={classes.signup}>
      <div className={classes.container}>
        <img src={car} alt="f1-car" />
        <RaceContext.Provider
          value={[
            selectedDriver1,
            setSelectedDriver1,
            selectedDriver2,
            setSelectedDriver2,
            selectedTires,
            setSelectedTires,
            selectedAero,
            setSelectedAero,
            selectedCar,
            setSelectedCar,
            usedBudget,
            setUsedBuget,
          ]}
        >
          <CarComponents
            Cars={props.cars}
            Aero={props.aero}
            Tires={props.tires}
            Drivers={props.drivers}
            track={props.track}
          ></CarComponents>
        </RaceContext.Provider>
        <div className={classes.raceInfo}>
          <RaceInfo
            name_gp={props.nameGP}
            name_track={props.track}
            country={props.country}
            type={props.Type}
          ></RaceInfo>
        </div>
        <div className={classes.circuit}>
          <img src={props.circuit} alt="circuit" />
        </div>
      </div>
      <div className={classes.budget}>
        <span className={classes.budget}>
          {usedBudget} / {props.budget} points used
        </span>
      </div>
      <div className={classes.buttons}>
        <button className={classes.button} onClick={closeSignup}>
          Cancel
        </button>
        <button className={classes.button} onClick={confirmSignup}>
          Confirm
        </button>
      </div>
    </div>
  );
}
export default Signup;
