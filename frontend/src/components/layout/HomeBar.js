import classes from "./HomeBar.module.css";
import { Link } from "react-router-dom";

function HomeBar(props) {
    return (
        <header className={classes.header}>
            <div className={classes.title}>F1 Ultimate Team</div>
            <nav className={classes.nav}>
                <ul>
                    <li>{/* <Link to="/home">My Account</Link> */}</li>
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

export default HomeBar;
