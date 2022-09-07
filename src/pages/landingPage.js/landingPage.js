import React from "react";
import { Link } from "react-router-dom";
import { data } from "../../constants/services";
import classes from "./landingPage.module.css";
import Footer from "../../components/footer/footer";
// import { Link } from 'react-router-dom'
import github from "../../assets/github.svg";
import twitter from "../../assets/twitter.svg";
import discord from "../../assets/discord.svg";
// import discord from "../../assets/discord.svg";
import { useEffect } from "react";

const LandingPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <div className={classes.mainContainer}>
        <div className={classes.header}></div>
        <div className={classes.heroText}>
          <h1>COIN NODE</h1>
          <h4>
            COIN NODE is an open protocol to communicate securely between
            Wallets and Dapps (Web3 Apps).
          </h4>
          <h6>
            The protocol establishes a remote connection using a Bridge server.
          </h6>
          <div className={classes.button}>
            <Link to="walletPage">
              <button className={classes.button1}>Connect Wallet</button>
            </Link>
            <Link to="walletPage">
              <button className={classes.button1}>Collab.Join</button>
            </Link>
          </div>
        </div>

        <div className={classes.card}>
          <h6>Quick start</h6>
          <div className={classes.cardContainer}>
            {data.map((item) => (
              <Link to="/WalletPage">
                <div className={classes.buttonCard} key={item.id}>
                  <div className={classes.cardInner}>
                    <div className={classes.image}>
                      <img src={item[0]} alt="Service" />
                    </div>

                    <h6>{item[1]}</h6>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
        <h6 className={classes.distribution}>Distribution</h6>
        <div className={classes.walletFlex}>
          <div>
            <h1>50K+</h1>
            <p>Active wallet</p>
          </div>
          <div>
            <h1>200K+</h1>
            <p>Resolve issues</p>
          </div>
          <div>
            <h1>100K+</h1>
            <p>Contributors</p>
          </div>
        </div>
        <div className={classes.help}>
          <p>Ready to resolve you blockchain issues?</p>
          <p>we are here to provide help</p>
          <Link to="walletPage">
            <button>Get started</button>
          </Link>
        </div>
        <div className={classes.logoFlex}>
          <div className={classes.logos}>
            <img src={github} alt="github" />
          </div>
          <div className={classes.logos}>
            <img src={twitter} alt="twitter" />
          </div>
          <div className={classes.logos}>
            <img src={discord} alt="discord" />
          </div>
          <div className={classes.logos}>
            <img src={github} alt="github" />
          </div>
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;
