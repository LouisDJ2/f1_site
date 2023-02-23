import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import classes from "./Login.module.css";
import Button from "../../components/ui/Button/Button";

const Login = (props) => {
    //Initializing variables used in login form
    const [enteredUsername, setEnteredUsername] = useState("");
    const [usernameIsValid, setUsernameIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    //Check entered variables to enable login button
    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                enteredUsername.trim().length < 30 &&
                    enteredPassword.trim().length > 6
            );
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [enteredUsername, enteredPassword]);
    //Variable handlers
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const validateUsernameHandler = () => {
        setUsernameIsValid(enteredUsername.trim().length < 30);
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };
    //What should be done when button is pushed
    const submitHandler = (event) => {
        event.preventDefault();
        props.onLogin(enteredUsername, enteredPassword);
    };
    //return
    return (
        <div className={classes.background}>
            <Card className={classes.login}>
                <h1 className={classes.title}>F1 Ultimate Team</h1>
                <form onSubmit={submitHandler}>
                    <div
                        className={`${classes.control} ${
                            usernameIsValid === false ? classes.invalid : ""
                        }`}
                    >
                        <label htmlFor="username">Username:</label>
                        <input
                            type="username"
                            id="username"
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                            onBlur={validateUsernameHandler}
                        />
                    </div>
                    <div
                        className={`${classes.control} ${
                            passwordIsValid === false ? classes.invalid : ""
                        }`}
                    >
                        <label htmlFor="password">Password:</label>
                        <input
                            type="password"
                            id="password"
                            value={enteredPassword}
                            onChange={passwordChangeHandler}
                            onBlur={validatePasswordHandler}
                        />
                    </div>
                    <div className={classes.actions}>
                        <Button
                            type="submit"
                            className={classes.btn}
                            disabled={!formIsValid}
                        >
                            Login
                        </Button>
                    </div>
                </form>
                <Link className={classes.link} to="/register">
                    No account yet? Sign up here!
                </Link>
            </Card>
        </div>
    );
};

export default Login;
