import { useState, useEffect } from "react";
import Card from "../ui/Card";
import classes from "./PromoteUser.module.css";

function EditRace(props) {
  const [users, setUsers] = useState([]);
  const [promotedUser, setPromotedUser] = useState(0);

  function getUsersInRace() {
    fetch("http://localhost:3001/race/usersinrace", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        raceid: props.id,
      }),
    })
      .then((response) => response.json())
      .then((dataAPI) => {
        console.log(dataAPI);
        setUsers(dataAPI);
      })
      .catch((err) => {
        console.log(err);
      });
  }

  useEffect(() => {
    getUsersInRace();
  }, []);

  function promoteUser() {
    fetch("http://localhost:3001/race/raceadmin", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        raceid: promotedUser,
      }),
    })
      .then((response) => response.json())
      .then((dataAPI) => {
        console.log(dataAPI);
        setUsers(dataAPI);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        props.onConfirm();
      });
  }

  return (
    <div className={classes.editRace}>
      <h4>select the user to be promoted</h4>
      <select
        className={classes.select}
        onChange={(e) => {
          setPromotedUser(e.target.value);
        }}
      >
        <option defaultValue="selected">select user</option>
        {users.map((user) => (
          <option value={user.user_id}>{user.user_id}</option>
        ))}
      </select>
      <button className={classes.button} onClick={promoteUser}>
        Confirm
      </button>
    </div>
  );
}

export default EditRace;
