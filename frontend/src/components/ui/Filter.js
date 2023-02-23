import classes from "./Filter.module.css";
import { useCookies } from "react-cookie";
import { useState } from "react";

function Filter(props) {
  const [checkAdmin, setCheckAdmin] = useState(false);

  return (
    <div className={classes.filter}>
      <select
        className={classes.select}
        onChange={(e) => props.setCountry(e.target.value)}
      >
        <option defaultValue="selected">country</option>
        {props.tracks.map((track) => (
          <option value={track.country}>{track.country}</option>
        ))}
      </select>
      <select
        className={classes.select}
        onChange={(e) => props.setDateSort(e.target.value)}
      >
        <option defaultValue="selected">date</option>
        <option value="later">sort by latest</option>
        <option value="early">sort by earliest</option>
      </select>
      <input
        className={classes.input}
        type="text"
        id="fname"
        placeholder="enter race name"
        defaultValue=""
        onChange={(e) => props.setName(e.target.value)}
      ></input>
      <input
        type="checkbox"
        id="admin"
        name="admin"
        value="admin"
        onChange={(e) => {
          props.setAdmin(!checkAdmin);
          setCheckAdmin(!checkAdmin);
          console.log(!checkAdmin);
        }}
      ></input>
      <label>admin</label>
      <button
        onClick={() => {
          props.filter();
          console.log("filter tracks:", props.tracks);
        }}
        className={classes.button}
      >
        Filter
      </button>
    </div>
  );
}
export default Filter;
