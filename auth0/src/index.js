import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import App2 from "./App-2";
import { Auth0Provider } from "@auth0/auth0-react";


ReactDOM.render(
  <Auth0Provider
    domain="dev-r7tbxvkt.us.auth0.com"
    clientId="fJKbrYAT7rQFPZi3Pwgxs0q2wRfP7cbJ"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById("root")
);
