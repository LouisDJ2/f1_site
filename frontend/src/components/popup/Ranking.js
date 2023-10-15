import { useState, useEffect } from "react";
import classes from "./Ranking.module.css";

function Ranking(props) {
  const [ranking, setRanking] = useState([]);

  useEffect(() => {
    setRanking(props.ranking);
    filter();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.ranking]);

  if (props.ranking === "") {
    return <div className={classes.ranking}>no ranking available</div>;
  }

  //sort the ranking in order
  function filter() {
    const filtered = ranking.sort((a, b) => {
      return a.place - b.place;
    });
    setRanking(filtered);
  }

  return (
    <table className={classes.ranking}>
      <tr>
        <th>Rank</th>
        <th>User</th>
      </tr>

      {props.ranking.map((user) => (
        <tr>
          <td>{user.place}</td>
          <td>{user.NAME}</td>
        </tr>
      ))}
    </table>
  );
}

export default Ranking;
