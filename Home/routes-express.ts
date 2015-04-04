/// <reference path="../typings/tsd.d.ts" />

import express = require("express");

class HomeRoutes {
    registerRoutes(app: express.Application){
        app.post('/', function(req: express.Request, res: express.Response){
            res.send("Hello World").end();
        })
    }
}

export = HomeRoutes;