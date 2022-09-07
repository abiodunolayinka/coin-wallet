import React from "react";
import classes from "./landingPage.module.css";
import { connect } from "../../constants/services";
// import { useEffect } from "react";
import { Link } from "react-router-dom";

const landingPage = () => {
  //   useEffect(() => {
  //     window.scrollTo(0, 0);
  //   }, []);
  return (
    <div className={classes.mainContainer}>
      <div className={classes.innerContainer}>
        <h1>CORRECTION NODE</h1>

        <p className={classes.heroText}>
          Correction Node is a decentralized protocol and platform that combines
          Blockchain with non-custodial management, micropools, instamt liquid
          and decentralized governance. Each process are been required to be
          filled out respectively. validation of wallet will be completed below
          as follows
        </p>
        <div className={classes.link}>
            {connect.map((item) => (
          <Link to="walletPage">
              <button type="button" className={classes.button}>
                {item}
              </button>
          </Link>
            ))}
        </div>
      </div>
    </div>
  );
};

export default landingPage;
