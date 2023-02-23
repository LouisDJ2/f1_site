import React, { useState, useEffect } from "react";
import Card from "../components/ui/Card/Card";
import classes from "./Login/Login.module.css";
import Button from "../components/ui/Button/Button";
import { useHistory } from "react-router-dom";
import { useCookies } from "react-cookie";

function NewRace(props) {
    let history = useHistory();
    //Initializing variables used in register form
    const [enteredName, setEnteredName] = useState("");
    const [nameIsValid, setNameIsValid] = useState();
    const [enteredTrack, setEnteredTrack] = useState(1);
    const [enteredMaxplayers, setEnteredMaxplayers] = useState("");
    const [maxplayersIsValid, setMaxplayersIsValid] = useState();
    const [enteredTime, setEnteredTime] = useState("");
    const [timeIsValid, setTimeIsValid] = useState();
    const [enteredBudget, setEnteredBudget] = useState("");
    const [budgetIsValid, setBudgetIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    const [datatrack, setDatatrack] = useState([]);
    //When fetch hasn't been executed loading is true
    const [loading, setLoading] = useState(true);
    //Use cookies
    const [cookies] = useCookies(["user"]);
    //Load in all tracks
    function loadTracks() {
        setLoading(true);
        fetch("http://localhost:3001/tracks/all")
            .then((response) => response.json())
            .then((dataAPI) => {
                setDatatrack(dataAPI.tracks);
            });
    }
    useEffect(() => loadTracks(), []);
    //Enable button when valid input is given
    useEffect(() => {
        const identifier = setTimeout(() => {
            const current = new Date();
            const enteredTime2 = new Date(enteredTime);
            setFormIsValid(
                enteredName.trim().length < 30 &&
                    enteredName.trim().length > 1 &&
                    enteredMaxplayers < 19 &&
                    enteredMaxplayers > 1 &&
                    enteredTime2 > current &&
                    enteredBudget > 1999 &&
                    enteredBudget < 5001
            );
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [
        enteredName,
        enteredMaxplayers,
        enteredTime,
        enteredBudget,
        enteredTrack,
    ]);
    //Variable handlers
    const nameChangeHandler = (event) => {
        setEnteredName(event.target.value);
    };

    const validateNameHandler = () => {
        setNameIsValid(enteredName.trim().length < 30);
    };

    const trackChangeHandler = (event) => {
        setEnteredTrack(event.target.value);
        setLoading(false);
    };

    const maxplayersChangeHandler = (event) => {
        setEnteredMaxplayers(event.target.value);
    };

    const validateMaxplayersHandler = () => {
        setMaxplayersIsValid(enteredMaxplayers < 19 && enteredMaxplayers > 1);
    };

    const timeChangeHandler = (event) => {
        setEnteredTime(event.target.value);
    };

    const validateTimeHandler = () => {
        const current = new Date();
        const test2 = new Date(enteredTime);
        setTimeIsValid(current < test2);
    };

    const budgetChangeHandler = (event) => {
        setEnteredBudget(event.target.value);
    };

    const validateBudgetHandler = () => {
        setBudgetIsValid(enteredBudget > 1999 && enteredBudget < 5001);
    };
    //What should be done when button is pushed
    const submitHandler = (event) => {
        event.preventDefault();
        addRaceHandler();
    };
    //Post input to server
    async function addRaceHandler(raceData) {
        const response = await fetch("http://localhost:3001/race/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                name: enteredName,
                trackname: datatrack[enteredTrack - 1].name_gp,
                maxplayers: enteredMaxplayers,
                time: enteredTime,
                raceadmin: cookies.UserId,
                budget: enteredBudget,
            }),
        });
        const data = await response.json();
        if (data.status === "ok") {
            window.alert(data.message);
            history.push("/home");
        } else {
            window.alert(data.message);
        }
    }

    return (
        <Card className={classes.newrace}>
            <div className={classes.container}>
                <div className={classes.Left}>
                    <h1 className={classes.title}>New Race</h1>
                    <form onSubmit={submitHandler}>
                        <div
                            className={`${classes.control} ${
                                nameIsValid === false ? classes.invalid : ""
                            }`}
                        >
                            <label htmlFor="name">
                                Name race: <p>(1-30 chars)</p>
                            </label>
                            <input
                                type="name"
                                id="name"
                                value={enteredName}
                                onChange={nameChangeHandler}
                                onBlur={validateNameHandler}
                            />
                        </div>
                        <div className={classes.control}>
                            <label htmlFor="name">Track:</label>
                            <select
                                value={enteredTrack}
                                onChange={trackChangeHandler}
                            >
                                {datatrack.map((item) => (
                                    <option value={item.unique_ID_track}>
                                        {item.name_gp}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div
                            className={`${classes.control} ${
                                maxplayersIsValid === false
                                    ? classes.invalid
                                    : ""
                            }`}
                        >
                            <label htmlFor="maxplayers">
                                Max players: <p>(2-18)</p>
                            </label>
                            <input
                                type="number"
                                id="maxplayers"
                                min="2"
                                max="18"
                                value={enteredMaxplayers}
                                onChange={maxplayersChangeHandler}
                                onBlur={validateMaxplayersHandler}
                            />
                        </div>
                        <div
                            className={`${classes.control} ${
                                timeIsValid === false ? classes.invalid : ""
                            }`}
                        >
                            <label htmlFor="time">Time of race:</label>
                            <input
                                type="datetime-local"
                                id="time"
                                value={enteredTime}
                                onChange={timeChangeHandler}
                                onBlur={validateTimeHandler}
                            />
                        </div>
                        <div
                            className={`${classes.control} ${
                                budgetIsValid === false ? classes.invalid : ""
                            }`}
                        >
                            <label htmlFor="budget">
                                Budget: <p>(2000-5000)</p>
                            </label>
                            <input
                                type="number"
                                id="budget"
                                min="2000"
                                max="5000"
                                //placeholder="3000"
                                value={enteredBudget}
                                onChange={budgetChangeHandler}
                                onBlur={validateBudgetHandler}
                            />
                        </div>
                        <div className={classes.actions}>
                            <Button
                                type="submit"
                                className={classes.btn}
                                disabled={!formIsValid}
                            >
                                Create race
                            </Button>
                        </div>
                    </form>
                </div>
                <div>
                    {loading ? (
                        <img
                            className={classes.img}
                            src="/tracklayout/bahrain-grand-prix.png"
                            alt="Bahrain Grand Prix"
                        ></img>
                    ) : (
                        <img
                            className={classes.img}
                            src={datatrack[enteredTrack - 1].layout}
                            alt={datatrack[enteredTrack - 1].namegp}
                        ></img>
                    )}
                </div>
            </div>
        </Card>
    );
}

export default NewRace;
