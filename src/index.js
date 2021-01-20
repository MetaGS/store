import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/analytics";
import "firebase/storage";
import { StorageInitialize } from "./storage";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom";

import App from "./App";
// import reportWebVitals from './reportWebVitals';

const firebaseConfig = {
  apiKey: "AIzaSyBI5yZe0CNDsRrr2ad2cT-byAYaRUF3BTo",
  authDomain: "store-56459.firebaseapp.com",
  projectId: "store-56459",
  storageBucket: "store-56459.appspot.com",
  messagingSenderId: "716764755578",
  appId: "1:716764755578:web:45423d764081d6e940adc3",
  measurementId: "G-3HFJBL7QGH",
};

let app = firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <StorageInitialize>
        <App />
      </StorageInitialize>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
