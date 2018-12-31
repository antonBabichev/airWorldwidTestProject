import {NestedTreeControl} from '@angular/cdk/tree';
import {Component, Injectable} from '@angular/core';
import {MatTreeNestedDataSource} from '@angular/material/tree';
import { FileNode } from '../models/file-database';
import { FileDatabase } from '../models/file-database';

/**
 * @title Tree with nested nodes
 */
@Component({
  selector: 'file-tree',
  templateUrl: '../views/tree.component.html',
  styleUrls: ['../views/tree.component.css'],
  providers: [FileDatabase]
})
export class FileTreeComponent {
  nestedTreeControl: NestedTreeControl<FileNode>;
  nestedDataSource: MatTreeNestedDataSource<FileNode>;
  activeNode: any;

  constructor(database: FileDatabase) {
    this.nestedTreeControl = new NestedTreeControl<FileNode>(this._getChildren);
    this.nestedDataSource = new MatTreeNestedDataSource();

    database.dataChange.subscribe(data => this.nestedDataSource.data = data);
  }

  hasNestedChild = (_: number, nodeData: FileNode) => !nodeData.type;
  
  private _getChildren = (node: FileNode) => node.children;

  highlightItem(node){
     // window.alert(node.filename);
  }
}

