/// <reference path="./typings/tsd.d.ts" />
var express = require("express");
var userManagementModule = require('./UserManagement/express-bindings');
var mainApp = express();
mainApp.use('/api/user-management', userManagementModule.app);
mainApp.listen(3000, function () {
    console.log("Listening on port 3000");
});
//# sourceMappingURL=app.js.map