import React from "react";
import Layout from "../components/Layout";
import "/styles/globals.css";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import { StateContext } from "../context/StateContext";
import { Toaster } from "react-hot-toast";

function App({ Component, pageProps }) {
  return (
    <StateContext>
      <Layout>
        <Toaster />
        <Component {...pageProps} />
      </Layout>
    </StateContext>
  );
}

export default App;
