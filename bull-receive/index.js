import Queue from "bull";
import express from "express";

const receiveQueue = new Queue("Server B", {
  redis: {
    host: process.env["REDIS_HOST"],
    password: process.env["REDIS_PASSWORD"],
    port: process.env["REDIS_PORT"],
  },
});

const data = [];


receiveQueue.process(function (job, done) {
  console.log("Received message", job.data);
  data.push(job.data)
  done();
});


const app = express();
app.use(express.json());

app.get("/", (req, res) => {
    return res.status(200).json(data);
});

const PORT = process.env["PORT"] || 9090;

app.listen(PORT, () => console.log("server receive running" + PORT));
