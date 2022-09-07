import React from "react";
import classes from "./walletPage.module.css";
import { data } from "../../constants/cardImagePath";
import Logo from "../../assets/logo.svg";
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import discord from "../../assets/discord.svg";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";
import {Link} from "react-router-dom";

const WalletPage = () => {
  const navigate = useNavigate();

  const handleSubmit = (walletName) => {
    localStorage.setItem("walletname", JSON.stringify(walletName));
    navigate("/auth/phrase");
    // console.log(walletName);
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className={classes.main}>
      <div className={classes.header}>
        <div className={classes.logo}>
          <img src={Logo} alt="logo" />
        </div>
      </div>
      <div className={classes.heroText}>
        <h1>Connect Wallet</h1>
        <p>Open protocol for connecting wallet to Dapps</p>
      </div>

      <div className={classes.gridWallet}>
        {data.map((item) => (
          <div
            className={classes.innerGrid}
            key={item.id}
            onClick={() => handleSubmit(item.name)}
          >
            <div className={classes.logos}>
              <img src={item.logo} alt="wallet" />
            </div>
            <h6>{item.name}</h6>
          </div>
        ))}
      </div>
      <div className={classes.here}>
        <p>
          Open an app submission issue on GitHub to add your app{" "}
          <Link to="/auth/phrase"><span>here.</span></Link>
        </p>
      </div>
      <div className={classes.logoFlex}>
        <div className={classes.logoo}>
          <img src={github} alt="github" />
        </div>
        <div className={classes.logoo}>
          <img src={twitter} alt="twitter" />
        </div>
        <div className={classes.logoo}>
          <img src={discord} alt="discord" />
        </div>
      </div>
    </div>
  );
};

export default WalletPage;
