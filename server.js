const express = require("express");
const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);
const PORT = 3000;

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html");
});

io.on("connection", (socket) => {
    console.log("接続しました");

    socket.on("chat message", (data) => {
        // 受け取ったデータをそのまま送信
        io.emit("chat message", data);
    });
});

server.listen(PORT, () => {
    console.log("listening on 3000");
});
