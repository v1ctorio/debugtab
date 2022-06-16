import { debugtabOptions } from './misc';
import { Server } from 'socket.io'
import express from 'express'
import http from 'http'
import path from 'path'


class debugtab {
    constructor(options?: debugtabOptions) {
      if(!options) options = {};
      this.port = options.port ?? 8080;
      this.path = options.path ?? '/';
      this.app = express();
      this.app.get(this.path, (req, res) => {
        res.sendFile(path.join(__dirname, '../../html/client.html'));
      }
      );
      this.server = http.createServer(this.app);
      this.server.listen(this.port);
      this.socket = new Server(this.server);
      this.socket.on('connection', (socket) => {
        console.log('Connected');
      })
    }

    public log(content:string) {
        content = JSON.stringify(content);
        this.socket.emit('log', content);

    }
    private app: express.Application;
    private port: number;
    private path: string;
    private socket: Server;
    private server: http.Server;

  }

export default debugtab;