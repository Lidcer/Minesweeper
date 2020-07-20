import { attachDebugMethod } from '../devDebugger';
import { SocketValidator } from './WebsocketSecurity';

type WebsocketCallback = (client: SocketIO.Socket, ...args: any[]) => void;
export class WebSocket {
  private clients: SocketIO.Socket[] = [];
  private callbacks = new Map<string, WebsocketCallback[]>();
  socketValidator: SocketValidator;

  constructor(socketServer: SocketIO.Server) {
    attachDebugMethod('webSocket', this);
    this.socketValidator = new SocketValidator(this);
    socketServer.on('connection', client => {
      console.debug('[WebSocket]', 'connected', client.id);
      this.clients.push(client);

      for (const [value, callbacks] of this.callbacks) {
        this.updateEventListenersOnAllClients(value, callbacks);
      }

      client.on('disconnect', () => {
        const indexOf = this.clients.indexOf(client);
        client.removeAllListeners();
        if (indexOf === -1) {
          throw new Error('Unable to disconnect client from websocket');
        }
        console.debug('[WebSocket]', 'disconnected', client.id);
        this.clients.splice(indexOf, 1);
      });

      client.on('ping-request', arg => {
        if (!this.socketValidator.validateUndefined(client, arg)) return;
        client.emit('ping-response');
      });
    });
  }

  broadcast(message: string, arg1?: any, arg2?: any, arg3?: any) {
    if (!message.length) {
      throw new Error('Cannot broadcast empty message');
    }
    for (const client of this.clients) {
      client.emit(message, arg1, arg2, arg3);
    }
  }

  on<A = undefined, B = undefined, C = undefined>(
    value: string,
    callback: (client: SocketIO.Socket, arg: A, arg2: B, arg3: C) => void,
  ) {
    const callbacks = this.callbacks.get(value) || [];
    const indexOf = callbacks.indexOf(callback);
    if (indexOf === -1) callbacks.push(callback);
    this.updateEventListenersOnAllClients(value, callbacks);
    this.callbacks.set(value, callbacks);
  }

  removeListiner(value: string, callback: (client: SocketIO.Socket, ...args: any[]) => void) {
    const callbacks = this.callbacks.get(value) || [];
    const indexOf = callbacks.indexOf(callback);
    if (indexOf !== -1) callbacks.splice(indexOf, 1);
    this.updateEventListenersOnAllClients(value, callbacks);
    this.callbacks.delete(value);
  }

  private updateEventListenersOnAllClients(
    value: string,
    callbacks: ((client: SocketIO.Socket, arg0?: any, arg1?: any, arg2?: any) => void)[],
  ) {
    for (const client of this.clients) {
      client.removeAllListeners(value);
      client.on(value, (arg0, arg1, arg2) => {
        for (const cb of callbacks) {
          cb(client, arg0, arg1, arg2);
        }
      });
    }
  }

  getClients() {
    return this.clients;
  }

  // guessSameClients() {
  //   const clientWithData = this.IClients.filter(c => c.fingerPrintData);
  //   const guessedClients: { iClient: IClient; data: string }[] = [];
  //   for (const iClient of clientWithData) {
  //     const data = JSON.stringify(iClient.fingerPrintData) + iClient.client.conn.remoteAddress;
  //     guessedClients.push({ iClient, data });
  //   }
  //   const filteredArray: { iClient: IClient[]; data: string }[] = [];
  //   for (const gc of guessedClients) {
  //     const found = filteredArray.find(c => c.data === gc.data);
  //     if (!found) {
  //       filteredArray.push({ iClient: [gc.iClient], data: gc.data });
  //     } else {
  //       found.iClient.push(gc.iClient);
  //     }
  //   }
  //   for (const index in filteredArray) {
  //     filteredArray[index].data = undefined;
  //     delete filteredArray[index].data;
  //   }

  //   return filteredArray;
  // }
}
