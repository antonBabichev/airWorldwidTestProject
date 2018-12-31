export class Config{
    
    addTransient(key, clss){
        this[key] = clss;
        return this;
    }

    getService(key){
        return new this[key]();
    }

    setPort(port){
        this.port = port;
        return this;
    }

    getPort(){
        return this.port;
    }

}