require("file-loader?name=[name].[ext]!./index.html");

import regeneratorRuntime from "regenerator-runtime";

if (process.env.NODE_ENV !== "production") {
	console.log("Looks like we are in development mode!");
}

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));
