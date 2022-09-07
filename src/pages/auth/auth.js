import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import classes from "./auth.module.css";
import { useEffect } from "react";

const Auth = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.body}>
      <div className={classes.text}>
        <h1>Import Wallet</h1>
        <h6>
          NB: All information are end-to end-encrypted. We do not share data and
          activity sessions with any other company.
        </h6>
      </div>
      <div className={classes.form}>
        <div className={classes.nav}>
          <nav className={classes.navlinks}>
            <NavLink to="phrase" className={classes.navText}>
              Phrase
            </NavLink>
            <NavLink to="keystore" className={classes.navText}>
              Keystore JSON
            </NavLink>
            <NavLink to="PrivateKey" className={classes.navText}>
              Private Key
            </NavLink>
          </nav>
        </div>
        <div className={classes.layout}>
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Auth;
