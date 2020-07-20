//SocketIO.Socket
import { WebSocket } from './SocketHandler';

export class SocketValidator {
  constructor(private webSocket: WebSocket) {}

  validateString(client: SocketIO.Socket, string: string) {
    if (typeof string !== 'string') {
      client.disconnect();
      console.error(
        '[Websocket security]',
        `Unable to validate string client: ${client.id}`.trim(),
      );
      return false;
    }
    return true;
  }

  validateNumber(client: SocketIO.Socket, number: number) {
    if (typeof number !== 'number') {
      client.disconnect();
      console.error(
        '[Websocket security]',
        `Unable to validate number client: ${client.id}`.trim(),
      );
      return false;
    }
    return true;
  }

  validateBoolean(client: SocketIO.Socket, boolean: boolean) {
    if (typeof boolean !== 'boolean') {
      client.disconnect();
      console.error(
        '[Websocket security]',
        `Unable to validate boolean client: ${client.id}`.trim(),
      );
      return false;
    }
    return true;
  }

  validateBigInt(client: SocketIO.Socket, bigInt: bigint) {
    if (typeof bigInt !== 'bigint') {
      client.disconnect();
      console.error(
        '[Websocket security]',
        `Unable to validate bigInt client: ${client.id}`.trim(),
      );
      return false;
    }
    return true;
  }

  validateObject(client: SocketIO.Socket, object: object) {
    if (typeof object !== 'object') {
      client.disconnect();
      console.error(
        '[Websocket security]',
        `Unable to validate object client: ${client.id}`.trim(),
      );
      return false;
    }
    return true;
  }

  validateArray(client: SocketIO.Socket, array: object[]) {
    if (!Array.isArray(array)) {
      client.disconnect();
      console.error(
        '[Websocket security]',
        `Unable to validate array client: ${client.id}`.trim(),
      );
      return false;
    }
    return true;
  }

  validateUndefined(client: SocketIO.Socket, und: undefined) {
    if (und !== undefined) {
      client.disconnect();
      console.error(
        '[Websocket security]',
        `Unable to validate undefined client: ${client.id}`.trim(),
      );
      return false;
    }
    return true;
  }

  validateNull(client: SocketIO.Socket, nu: null) {
    if (nu !== null) {
      client.disconnect();
      console.error(
        '[Websocket security]',
        `Unable to validate null client: ${client.id}`.trim(),
      );
      return false;
    }
    return true;
  }
}
