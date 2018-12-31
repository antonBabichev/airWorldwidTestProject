import { Component, Inject, ViewChild } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { FileTreeComponent } from '../viewModels/tree.component';

export interface DialogData {
    animal: string;
    name: string;
  }

@Component({
    selector: "file-picker",
    templateUrl: '../views/filePicker.component.html'
})
export class FilePickerComponent{

    @ViewChild(FileTreeComponent) selectedFile : FileTreeComponent;

    constructor(
        public dialogRef: MatDialogRef<FilePickerComponent>,
        @Inject(MAT_DIALOG_DATA) public data: DialogData) {}
    
      onCancelClick(): void {
        this.dialogRef.close();
      }

      onOkClick(): void {
        this.dialogRef.close(this.selectedFile.activeNode.toString());
      }
}