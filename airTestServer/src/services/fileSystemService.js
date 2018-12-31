const fs = require("fs");

export class FileSystemService{

    async getHistory(){
        return new Promise((resolve, reject) => {
            fs.readFile("./src/history.txt", 'utf8', function(err, data) {
                if (err) throw err;
                console.log(data)
                resolve(data);
              });
        });
    }

    appendToHistory(file){
        new Promise((resolve, reject) => {
            fs.writeFile("./src/history.txt", file, function(err) {
                if(err) {
                    return console.log(err);
                }
                console.log("The file was saved!");
            }); 
        });
    }
}