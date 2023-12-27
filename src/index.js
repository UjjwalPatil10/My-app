import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js";

// bootstrap install
// npm i bootstrap
// Bootstrap js link
// import "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js";

// import "../node_modules/bootstrap/dist/css/bootstap.min.css";
// import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';
//version 17
// import ReactDOM from "react";
// ReactDOM.render(<h2>Topper Skills</h2>, document.getElementById("root")); //document is work on real dom
// import JSXDemo from "./components/jsx-demo/JSX-demo";
// version 18
//HERE IF we cannot import then it gives 'ReactDOM' is not defined
import ReactDOM from "react-dom/client"; //
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  // <React.StrictMode>
  <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
