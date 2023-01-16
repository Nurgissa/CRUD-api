"use strict";
exports.__esModule = true;
var application_1 = require("./app/application");
var app = new application_1["default"](3000);
app.use(Route.get("/hello", function () { }));
