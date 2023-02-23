import React from "react";
import classes from "./Layout.module.css";
import MainNavigation from "./MainNavigation";
import Banner from "./Banner";

function Layout(props) {
  return (
    <div>
      <Banner />
      <MainNavigation
        isLoggedIn={props.isAuthenticated}
        onLogout={props.onLogout}
      />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}
export default Layout;
