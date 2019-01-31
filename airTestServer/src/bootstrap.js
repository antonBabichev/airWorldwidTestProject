//test22
import { Config } from './configs/config'
import { Server } from './servers/server'
import { FileSystemRouter } from './routers/fileSystemRouter'
import { FileSystemService } from './services/fileSystemService'

var config = new Config()
    .setPort(3340)
    .addTransient("FileSystemService", FileSystemService);

new Server(config)
    .enableCrossSiteOrigin()
    .addRouter("/api", new FileSystemRouter(config))
    .start();