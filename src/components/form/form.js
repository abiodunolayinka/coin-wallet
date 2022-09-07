import React from "react";
import classes from "./form.module.css";

const Form = () => {
  return (
    <div>
      <form className={classes.form}>
        <select className={classes.input}>
          {" "}
          <option value="pickdefi">peakdefi</option>
        </select>
        <label>Keystore</label>
        <div>
          <input
            className={classes.input1}
            type="text"
            placeholder="placeholder"
          />
        </div>
        <p>Several lines of text beginning with “…” plus the password you used for encryption.vhkbjj</p>
        <div>
          <input
            className={classes.input}
            type="password"
            placeholder="password"
          />
        </div>
      </form>
      <button className={classes.button}>Import Wallet</button>
    </div>
  );
};

export default Form;
