type HttpMethod = "GET" | "POST" | "PATCH" | "DELETE";

class Route {
    private _url: string;
    private _method: HttpMethod;
    private _handler: () => void;

    constructor(url: string, method: HttpMethod, handler: any) {
        this._url = url;
        this._method = method;
        this._handler = handler;
    }

    static get(url: string, callback: any) {
        return new Route("GET", url, callback);
    }

    static post(url: string, callback: any) {

    } 

    static patch(url: string, callback: any) {

    }

    static delete(url: string, callback: any) {

    }
}