import http from 'http';


function requestListener(req, res) {
    res.json("hello world");
}

class Application {
    routes: Route[] = [];
    server: any

    constructor(PORT: number | string = 5000) {
        this.server = http.createServer(requestListener);
        this.server.listen(PORT, 'localhost', () => {
            console.log(`Server is running on http://${host}:${port}`);
        });
    }



    use(route: Route) {
        this.routes.push(route);
    }
}

export default Application;