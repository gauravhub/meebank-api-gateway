/// <reference path="../typings/tsd.d.ts" />
var express = require("express");
var UserManagement = require("./index");
var UserManagementExpressBindings = (function () {
    function UserManagementExpressBindings() {
        this.app = express();
    }
    UserManagementExpressBindings.prototype.registerRoutes = function () {
        this.app.post('/sign-up', function (req, res) {
            new UserManagement.SignUp().execute({});
            res.sendStatus(200);
        });
    };
    return UserManagementExpressBindings;
})();
var bindings = new UserManagementExpressBindings();
bindings.registerRoutes();
exports.app = bindings.app;
//# sourceMappingURL=express-bindings.js.map