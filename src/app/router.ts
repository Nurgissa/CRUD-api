import { IncomingMessage, ServerResponse } from "http";
import { IncomingDataMessage } from "./application";

export type HttpMethod = "GET" | "POST" | "PUT" | "DELETE";

export type Handler = (
  request: IncomingDataMessage,
  response: ServerResponse
) => void;

class Route {
  private readonly _url: string;
  private readonly _method: HttpMethod;
  private readonly _handler: Handler;

  constructor(method: HttpMethod, url: string, handler: Handler) {
    this._url = url;
    this._method = method;
    this._handler = handler;
  }

  static get(url: string, callback: Handler) {
    return new Route("GET", url, callback);
  }

  static post(url: string, callback: Handler) {
    return new Route("POST", url, callback);
  }

  static put(url: string, callback: Handler) {
    return new Route("PUT", url, callback);
  }

  static delete(url: string, callback: Handler) {
    return new Route("DELETE", url, callback);
  }

  process(req: IncomingDataMessage, res: ServerResponse) {
    if (this._canHandle(req)) {
      this._handler(req, res);
    }
  }

  _canHandle(req: IncomingDataMessage) {
    const url = req.url;
    const method = req.method;

    console.log(url, method);

    if (this._url === "*") return true;

    return method === this._method && url === this._url;
  }
}

export default Route;
