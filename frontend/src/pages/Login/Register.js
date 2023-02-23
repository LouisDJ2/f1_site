import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Card from "../../components/ui/Card/Card";
import classes from "./Login.module.css";
import Button from "../../components/ui/Button/Button";

const Register = (props) => {
    //Initializing variables used in register form
    const [enteredUsername, setEnteredUsername] = useState("");
    const [usernameIsValid, setUsernameIsValid] = useState();
    const [enteredEmail, setEnteredEmail] = useState("");
    const [emailIsValid, setEmailIsValid] = useState();
    const [enteredPassword, setEnteredPassword] = useState("");
    const [passwordIsValid, setPasswordIsValid] = useState();
    const [enteredConfirmPassword, setEnteredConfirmPassword] = useState("");
    const [confirmpasswordIsValid, setConfirmPasswordIsValid] = useState();
    const [formIsValid, setFormIsValid] = useState(false);
    //Check entered variables to enable register button
    useEffect(() => {
        const identifier = setTimeout(() => {
            setFormIsValid(
                enteredEmail.includes("@") &&
                    enteredPassword.trim().length > 6 &&
                    enteredConfirmPassword === enteredPassword &&
                    enteredUsername.trim().length < 30
            );
        }, 500);

        return () => {
            clearTimeout(identifier);
        };
    }, [
        enteredEmail,
        enteredPassword,
        enteredConfirmPassword,
        enteredUsername,
    ]);
    //Variable handlers
    const usernameChangeHandler = (event) => {
        setEnteredUsername(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEnteredEmail(event.target.value);
    };

    const passwordChangeHandler = (event) => {
        setEnteredPassword(event.target.value);
    };

    const confirmpasswordChangeHandler = (event) => {
        setEnteredConfirmPassword(event.target.value);
    };

    const validateUsernameHandler = () => {
        setUsernameIsValid(enteredUsername.trim().length < 30);
    };

    const validateEmailHandler = () => {
        setEmailIsValid(enteredEmail.includes("@"));
    };

    const validatePasswordHandler = () => {
        setPasswordIsValid(enteredPassword.trim().length > 6);
    };

    const validateConfirmPasswordHandler = () => {
        setConfirmPasswordIsValid(
            enteredConfirmPassword.trim().length > 6 &&
                enteredConfirmPassword === enteredPassword
        );
    };
    //What should be done when button is pushed
    const submitHandler = (event) => {
        event.preventDefault();
        props.onRegister(enteredUsername, enteredEmail, enteredPassword);
    };

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
                            type="name"
                            id="username"
                            value={enteredUsername}
                            onChange={usernameChangeHandler}
                            onBlur={validateUsernameHandler}
                        />
                    </div>
                    <div
                        className={`${classes.control} ${
                            emailIsValid === false ? classes.invalid : ""
                        }`}
                    >
                        <label htmlFor="email">E-Mail:</label>
                        <input
                            type="email"
                            id="email"
                            value={enteredEmail}
                            onChange={emailChangeHandler}
                            onBlur={validateEmailHandler}
                        />
                    </div>
                    <div
                        className={`${classes.control} ${
                            passwordIsValid === false ? classes.invalid : ""
                        }`}
                    >
                        <label htmlFor="password">
                            Password: (min. 7 char.)
                        </label>
                        <input
                            type="password"
                            id="password"
                            value={enteredPassword}
                            onChange={passwordChangeHandler}
                            onBlur={validatePasswordHandler}
                        />
                    </div>
                    <div
                        className={`${classes.control} ${
                            confirmpasswordIsValid === false
                                ? classes.invalid
                                : ""
                        }`}
                    >
                        <label htmlFor="password">Confirm password:</label>
                        <input
                            type="password"
                            id="confirmpassword"
                            value={enteredConfirmPassword}
                            onChange={confirmpasswordChangeHandler}
                            onBlur={validateConfirmPasswordHandler}
                        />
                    </div>
                    <div className={classes.actions}>
                        <Button
                            type="submit"
                            className={classes.btn}
                            disabled={!formIsValid}
                        >
                            Register
                        </Button>
                    </div>
                </form>
                <Link className={classes.link} to="/">
                    Already have an account? Sign in here!
                </Link>
            </Card>
        </div>
    );
};

export default Register;
