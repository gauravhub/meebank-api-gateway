/// <reference path="../typings/tsd.d.ts" />
var HomeRoutes = (function () {
    function HomeRoutes() {
    }
    HomeRoutes.prototype.registerRoutes = function (app) {
        app.post('/', function (req, res) {
            res.send("Hello World").end();
        });
    };
    return HomeRoutes;
})();
module.exports = HomeRoutes;
//# sourceMappingURL=routes-express.js.map