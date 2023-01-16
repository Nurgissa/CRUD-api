"use strict";
exports.__esModule = true;
var http_1 = require("http");
function requestListener(req, res) {
    res.json("hello world");
}
var Application = /** @class */ (function () {
    function Application(PORT) {
        if (PORT === void 0) { PORT = 5000; }
        this.routes = [];
        this.server = http_1["default"].createServer(requestListener);
        this.server.listen(PORT, 'localhost', function () {
            console.log("Server is running on http://".concat(host, ":").concat(port));
        });
    }
    Application.prototype.use = function (route) {
        this.routes.push(route);
    };
    return Application;
}());
exports["default"] = Application;
