import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Config } from '../models/config';

@Injectable()
export class ApiClient{

    constructor(private httpClient: HttpClient, private config: Config){
    }

    async uploadFile(file){
        return this.httpClient.post(this.config.getFileUploadUrl(), {"file": file}, {responseType: 'text'}).toPromise();
    }

    async getUploadedFiles(){
        return this.httpClient.get(this.config.getUploadedFilesUrl(), {responseType: 'text'}).toPromise();
    }
}