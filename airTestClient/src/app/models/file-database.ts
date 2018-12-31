import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { Config } from '../models/config';

export class FileNode {
    parent: FileNode;
    children: FileNode[];
    filename: string;
    type: any;

    private iterateParent(resultString: String, n: FileNode){
        resultString = n.filename + '/' + resultString;
        if(n.parent)
            resultString = this.iterateParent(resultString, n.parent);
        return resultString;
    }

    toString(){
        let str = this.iterateParent("", this);
        return str.substring(0, str.length - 1);
    }
  }

@Injectable()
export class FileDatabase {
  dataChange = new BehaviorSubject<FileNode[]>([]);

  get data(): FileNode[] { return this.dataChange.value; }

  constructor(private config: Config) {
    this.initialize();
  }

  initialize() {
    this.config.getFileSystemAsJson().then(fsData => {
        let dataObject = fsData;
        let data = this.buildFileTree(dataObject, null);
        this.dataChange.next(data);
    });
  }

  /**
   * Build the file structure tree. The `value` is the Json object, or a sub-tree of a Json object.
   * The return value is the list of `FileNode`.
   */
  buildFileTree(obj: {[key: string]: any}, parent: FileNode): FileNode[] {
    return Object.keys(obj).reduce<FileNode[]>((accumulator, key) => {
      const value = obj[key];
      const node = new FileNode();
      node.parent = parent;

      if (value != null) {
        if (typeof value === 'object') {
            node.filename = key;
            node.children = this.buildFileTree(value, node);
        } else {
            node.filename = value;  
            node.type = value;
        }
      }

      return accumulator.concat(node);
    }, []);
  }
}
