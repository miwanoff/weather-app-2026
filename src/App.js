import React, { useState } from "react";
import moment from "moment";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import logo from "./assets/images/logo.png";

const api = {
  key: "45320eb98dd32e71513cf76378fc81e7",
  base: "http://api.openweathermap.org/data/2.5/",
  icon: "https://openweathermap.org/img/w",
};

function Header(props) {
  return (
    <div className={props.className}>
      <Image src={logo} />
      <h1>Weather</h1>
    </div>
  );
}

function Image(props) {
  return <img src={props.src} alt="logo" style={{ width: "100px" }} />;
}

function App() {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  return (
    <div className="container">
      <Header className="jumbotron alert alert-warning" />
      <div className="row">
        <div className="row">
          <div className="col-md-4 col-sm-12 my-3">
            Today: {moment().format("dddd")} {moment().format("LL")}
          </div>
        </div>
        <div className="search-panel col-sm-12 col-md-4 my-3">
          <input
            type="text"
            className="form-control search-input"
            placeholder="Search"
          />
        </div>
      </div>
    </div>
  );
}

export default App;
