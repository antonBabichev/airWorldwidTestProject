const express = require("express");

import { FileSystemService } from '../services/fileSystemService'

export class FileSystemRouter{

    constructor(config){
        this.config = config;
        this.fsService = config.getService("FileSystemService");
        if(!this.fsService) throw Error("FileSystemService was not provided!");
    }

    build(){
        var that = this;
        this.router = express.Router();
        this.router
            .get("/history",  function (req, res){
                that.fsService.getHistory().then(
                    data => {
                        res.send(data);    
                    }
                )
            })
            .post("/file", function (req, res){
                if(!req.body)
                {
                    console.log(`No file was provided!`);
                    res.sendStatus(500);
                }
                else{
                    console.log(`Request acquired: ${req.body.file}`)
                    that.fsService.appendToHistory(req.body.file);
                    res.sendStatus(200);
                }
            });

        return this.router;
    }
}