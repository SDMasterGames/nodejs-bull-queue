import Queue from "bull";
import express from "express";

const sendQueue = new Queue("Server B", {
  redis: {
    host: process.env["REDIS_HOST"],
    password: process.env["REDIS_PASSWORD"],
    port: process.env["REDIS_PORT"],
  },
});

const app = express();
app.use(express.json());

app.get("/send", (req, res) => {
  sendQueue.add({ name: "Test", email: "test@example.com" });
  return res.status(200).send({
    msg: "Message sent",
  });
});

const PORT = process.env["PORT"] || 8080;

app.listen(PORT, () => console.log("server sending running" + PORT));
