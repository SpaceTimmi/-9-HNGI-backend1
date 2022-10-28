const http = require("http");

const myObj = {
    slackUsername:"Timi Ombe",
    backend: true,
    age: 22,
    bio:"My name is Timi and I love problem-solving.",

}

const server = http.createServer((req, res) => {

    // Route handler
    // GET /
    if (req.method === "GET" && req.url === "/") {
        const resBody = JSON.stringify(myObj);
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.write(resBody);
        return res.end();
    }

})

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server is listening on port ${PORT}`));




