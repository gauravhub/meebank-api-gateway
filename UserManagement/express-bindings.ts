/// <reference path="../typings/tsd.d.ts" />

import express = require("express");
import UserManagement = require("./index");

class UserManagementExpressBindings {
    public app: express.Express;

    constructor(){
        this.app = express();
    }

    registerRoutes(){
        this.app.post('/sign-up', function(req: express.Request, res: express.Response){
            new UserManagement.SignUp().execute({});
            res.sendStatus(200);
        })
    }
}

var bindings = new UserManagementExpressBindings();
bindings.registerRoutes();

exports.app = bindings.app;