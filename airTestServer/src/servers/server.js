const express = require("express");
const bodyParser = require("body-parser");

export class Server{
    constructor(config){
        this.config = config;
        this.app = express();
        this.app.use(bodyParser.json());
    }

    enableCrossSiteOrigin(){
        this.app.use(function (req, res, next) {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
            res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
            next();
        });
        return this;
    }

    addRouter(path, router){
        this.app.use(path, router.build());
        return this;
    }

    start(){
        this.app.listen(this.config.getPort(), () => console.log(`Listening on port ${this.config.getPort()}`));
    }
}