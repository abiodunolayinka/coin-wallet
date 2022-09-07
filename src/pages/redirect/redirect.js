import React from "react";
import classes from "./redirect.module.css";
import Barcode from "../../assets/barcode.png";
import { Link } from "react-router-dom";

const redirect = () => {
  return (
    <div className={classes.mainContainer}>
      <div className={classes.innerContainer}>
        <div>
          <div className={classes.img}>
            <img className={classes.barcode} src={Barcode} alt="barcode" />
          </div>
          <h2>PLEASE CONTACT</h2>
          <h2>
            <Link to="/">
              <span>ADMIN SUPPORT</span>
            </Link>
          </h2>
          <h2>FOR AUTHENTICATION</h2>
        </div>
      </div>
    </div>
  );
};

export default redirect;
