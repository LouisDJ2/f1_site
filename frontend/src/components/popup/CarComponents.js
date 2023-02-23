import classes from "./CarComponents.module.css";
import { useContext, useEffect, useState } from "react";
import {
  IoIosArrowDropleftCircle,
  IoIosArrowDroprightCircle,
} from "react-icons/io";
import { RaceContext } from "./RaceContext";

function CarComponents(props) {
  // https://www.npmjs.com/package/country-code-lookup
  const lookup = require("country-code-lookup");
  const [countryIcon1, setCountryIcon1] = useState("");
  const [countryIcon2, setCountryIcon2] = useState("");

  //--------variables for visibility of <select>--------
  const [carSelected, setCarSelected] = useState(false);
  const [aeroSelected, setAeroSelected] = useState(false);
  const [tireSelected, setTireSelected] = useState(false);

  //-------change indexes for drivers-------
  const [indexDriver1, setIndexDriver1] = useState(0);
  const [indexDriver2, setIndexDriver2] = useState(0);

  //-------set all variables from Context Signup-------
  const [
    selectedDriver1,
    setDriver1,
    selectedDriver2,
    setDriver2,
    selectedTires,
    setTires,
    selectedAero,
    setAero,
    selectedCar,
    setCar,
    usedBudget,
    setUsedBudget,
  ] = useContext(RaceContext);

  //First Driver
  function clickLeft1() {
    if (indexDriver1 === 0) {
      setIndexDriver1(props.Drivers.length - 1);
      setDriver1(props.Drivers.length);
    } else {
      setIndexDriver1(indexDriver1 - 1);
      setDriver1(props.Drivers[indexDriver1 - 1].unique_ID_driver);
    }
  }
  function clickRight1() {
    if (indexDriver1 === props.Drivers.length - 1) {
      setIndexDriver1(0);
      setDriver1(1);
    } else {
      setIndexDriver1(indexDriver1 + 1);
      setDriver1(props.Drivers[indexDriver1 + 1].unique_ID_driver);
    }
  }

  //Second Driver
  function clickLeft2() {
    if (indexDriver2 === 0) {
      setIndexDriver2(props.Drivers.length - 1);
      setDriver2(props.Drivers.length);
    } else {
      setIndexDriver2(indexDriver2 - 1);
      setDriver2(props.Drivers[indexDriver2 - 1].unique_ID_driver);
    }
  }
  function clickRight2() {
    if (indexDriver2 === props.Drivers.length - 1) {
      setIndexDriver2(0);
      setDriver2(1);
    } else {
      setIndexDriver2(indexDriver2 + 1);
      setDriver2(props.Drivers[indexDriver2 + 1].unique_ID_driver);
    }
  }

  function selectTires(e) {
    setTireSelected(true);
    setTires(e.target.value);
  }
  function selectAero(e) {
    setAeroSelected(true);
    setAero(e.target.value);
  }
  function selectCar(e) {
    setCarSelected(true);
    setCar(e.target.value);
  }

  useEffect(() => {
    //-------Convert country names from database to iso code-------
    //-------set the right driver flags for driver 2-------
    if (props.Drivers[indexDriver1].nation == "Great Britain") {
      setCountryIcon1(
        "fi fi-" + lookup.byCountry("United Kingdom").iso2.toLowerCase()
      );
    } else if (props.Drivers[indexDriver1].nation == "The Netherlands") {
      setCountryIcon1(
        "fi fi-" + lookup.byCountry("Netherlands").iso2.toLowerCase()
      );
    } else if (props.Drivers[indexDriver1].nation == "USA") {
      setCountryIcon1(
        "fi fi-" + lookup.byCountry("United States").iso2.toLowerCase()
      );
    } else {
      setCountryIcon1(
        "fi fi-" +
          lookup
            .byCountry(props.Drivers[indexDriver1].nation)
            .iso2.toLowerCase()
      );
    }
    //-------set the right driver flags for driver 2-------
    if (props.Drivers[indexDriver2].nation == "Great Britain") {
      setCountryIcon2(
        "fi fi-" + lookup.byCountry("United Kingdom").iso2.toLowerCase()
      );
    } else if (props.Drivers[indexDriver2].nation == "The Netherlands") {
      setCountryIcon2(
        "fi fi-" + lookup.byCountry("Netherlands").iso2.toLowerCase()
      );
    } else if (props.Drivers[indexDriver2].nation == "USA") {
      setCountryIcon2(
        "fi fi-" + lookup.byCountry("United States").iso2.toLowerCase()
      );
    } else {
      setCountryIcon2(
        "fi fi-" +
          lookup
            .byCountry(props.Drivers[indexDriver2].nation)
            .iso2.toLowerCase()
      );
    }
  }, [indexDriver1, indexDriver2]);

  //-------when one of the used components changes update the budget used-------
  useEffect(() => {
    const priceDriver1 = props.Drivers[indexDriver1].price;
    const priceDriver2 = props.Drivers[indexDriver2].price;
    const priceAero = props.Cars[selectedCar - 1].price;
    const priceTires = props.Tires[selectedTires - 1].price;
    const priceCar = props.Aero[selectedAero - 1].price;
    const budgetSpent =
      priceDriver1 + priceDriver2 + priceAero + priceTires + priceCar;
    setUsedBudget(budgetSpent);
  }, [
    indexDriver1,
    indexDriver2,
    selectedDriver1,
    selectedDriver2,
    selectCar,
    selectAero,
    selectTires,
  ]);

  return (
    <>
      <div>
        {/* //-------car components------- */}
        <div className={classes.wheel}>
          <div>select tires</div>
          <div className={tireSelected ? classes.textShow : classes.textHide}>
            <select onChange={selectTires}>
              <option defaultValue="default">select tires</option>
              {props.Tires.map((tire) => (
                <option value={tire.unique_ID_tire}>
                  {tire.rating} - {tire.name} - {tire.brand} - [{tire.price}]
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={classes.frontwing}>
          <div>select aero</div>
          <div className={aeroSelected ? classes.textShow : classes.textHide}>
            <select onChange={selectAero}>
              <option defaultValue="default">select aero</option>
              {props.Aero.map((aero) => (
                <option value={aero.unique_ID_aero}>
                  {aero.rating} - {aero.brand} - {aero.type} - [{aero.price}]
                </option>
              ))}
            </select>
          </div>
        </div>
        <div className={classes.car}>
          <div>select car</div>
          <div className={carSelected ? classes.textShow : classes.textHide}>
            <select onChange={selectCar}>
              <option defaultValue="default">select car</option>
              {props.Cars.map((car) => (
                <option value={car.unique_ID_car}>
                  {car.rating} - {car.name} - {car.brand} - [{car.price}]
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* //-------drivers------- */}
        <div className={classes.column}>
          <div className={classes.drivers}>
            <div className={classes.driver}>
              <img
                src={
                  props.Drivers[indexDriver1].png === "0"
                    ? "/driverpic/no-driver.png"
                    : props.Drivers[indexDriver1].png
                }
                alt="driver1"
              ></img>
              <div>
                <button onClick={clickLeft1}>
                  <IoIosArrowDropleftCircle />
                </button>
                <button onClick={clickRight1}>
                  <IoIosArrowDroprightCircle />
                </button>
              </div>
            </div>
            <div>
              <img
                src={
                  props.Drivers[indexDriver2].png === "0"
                    ? "/driverpic/no-driver.png"
                    : props.Drivers[indexDriver2].png
                }
                alt="driver2"
              ></img>
              <div>
                <button onClick={clickLeft2}>
                  <IoIosArrowDropleftCircle />
                </button>
                <button onClick={clickRight2}>
                  <IoIosArrowDroprightCircle />
                </button>
              </div>
            </div>
            <div>{props.Drivers[indexDriver1].name}</div>
            <div>{props.Drivers[indexDriver2].name}</div>
            <div className={classes.flag}>
              <span className={countryIcon1} />
            </div>
            <div className={classes.flag}>
              <span className={countryIcon2} />
            </div>
            <div className={classes.rating}>
              {props.Drivers[indexDriver1].average}
            </div>
            <div className={classes.rating}>
              {props.Drivers[indexDriver2].average}
            </div>
            <div className={classes.price}>
              [{props.Drivers[indexDriver1].price}]
            </div>
            <div className={classes.price}>
              [{props.Drivers[indexDriver2].price}]
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CarComponents;
