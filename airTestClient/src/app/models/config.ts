import { Injectable } from '@angular/core';
import { default as data_json } from  '../config.json'
import { HttpClient } from '@angular/common/http';

@Injectable()
export class Config{

    constructor(private httpClient: HttpClient){
    }

    getUploadedFilesUrl(){
        return data_json.uploadedFilesUrl;
    }

    getFileUploadUrl(){
        console.log(`Upload URL = ${data_json.fileUploadUrl}`);
        return data_json.fileUploadUrl;
    }

    getFileSystemAsJson(){
        return this.httpClient.get("assets/fs.json").toPromise();
    }

}