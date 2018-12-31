import {Component} from '@angular/core';
import {FilePickerComponent} from './filePicker.component'
import {MatDialog} from '@angular/material'
import { ApiClient } from '../models/api-client'

@Component({
  selector: 'tab',
  templateUrl: '../views/tabUpload.component.html',
  styleUrls: ['../views/tabUpload.component.css'],
})
export class TabUploadComponent {
    title = 'Upload page';
  file;

  constructor(private apiClient: ApiClient, private dialog: MatDialog){}

  openFileBrowser(){
    const dialogRef = this.dialog.open(FilePickerComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.file = result;
    });
  }

  uploadFile(){
    
    //if(!this.file)
    //  console.log("No file selected for upload!");
    //else{
      this.apiClient.uploadFile(this.file)
        .then(
        function(val) {
            window.alert("File was successfully uploaded!")
        }).catch(
        // Log the rejection reason
       (reason) => {
            console.log('Handle rejected promise ('+reason.message+') here.');
        });
    //}
    
  }
}