require("file-loader?name=[name].[ext]!./index.html");

import regeneratorRuntime from "regenerator-runtime";

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
