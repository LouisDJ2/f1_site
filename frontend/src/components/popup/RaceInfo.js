import classes from "./RaceInfo.module.css";

function RaceInfo(props) {
  return (
    <div className={classes.raceinfo}>
      <table>
        <caption>Race Information</caption>
        <tbody>
          <tr>
            <td>Name GP</td>
            <td>{props.name_gp}</td>
          </tr>
          <tr>
            <td>Name track</td>
            <td>{props.name_track}</td>
          </tr>
          <tr>
            <td>Country</td>
            <td>{props.country}</td>
          </tr>
          <tr>
            <td>Type</td>
            <td>{props.type}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
export default RaceInfo;
