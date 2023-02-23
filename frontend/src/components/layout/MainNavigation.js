import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
function MainNavigation(props) {
  return (
    <header className={classes.header}>
      <div className={classes.title}>F1 Ultimate Team</div>
      <nav className={classes.nav}>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/new-race">New Race</Link>
          </li>
          <li>
            <Link to="/race-search">Search Races</Link>
          </li>
          <li>
            <Link to="/my-races">
              My Races
              {/* <span className={classes.badge}>3</span> */}
            </Link>
          </li>
          <li>
            <button onClick={props.onLogout}>
              <Link to="/">Logout</Link>
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
}
export default MainNavigation;
