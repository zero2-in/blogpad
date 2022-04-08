import express from 'express';
import home from './src/routes/home/index.js';

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static("./src/public"));
app.use("/", home);

app.get("/", (req, res) => {
    res.sendFile("index.html");
});

export default app;