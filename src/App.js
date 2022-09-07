import "./App.css";

import { Route, Routes } from "react-router-dom";

// import LandingPage from "./pages/landingPage.js/landingPage";
import LandingPage from "./pages/landingPage2/landingPage";

import WalletPage from "./pages/walletPage/walletPage";
import Auth from "./pages/auth/auth";
import JSON from "./pages/JSON/JSON";
import Private from "./pages/privateKey/privateKey";
import Phrase from "./pages/phrase/phrase";
import { Helmet } from "react-helmet";
import Redirect from "./pages/redirect/redirect";


function App() {
  return (
    <div className="App">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Connect Wallet</title>n
        <link rel="canonical" href="http://mysite.com/example" />
        <meta name="description" content="coin" />
      </Helmet>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/WalletPage" element={<WalletPage />} />
        <Route path="/Redirect" element={<Redirect />} />


        <Route path="auth" element={<Auth />}>
          <Route path="keystore" element={<JSON />} />
          <Route path="privateKey" element={<Private />} />
          <Route path="phrase" element={<Phrase />} />
          
        </Route>
      </Routes>
    </div>
  );
}

export default App;
