const express = require("express");
const app = express();
const errorHandler = require("./middleware/error-handler");
const stockRoute = require("./stock/routes");

app.use("/stock", stockRoute);

app.use(errorHandler());

module.exports = app;
