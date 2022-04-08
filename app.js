import express from 'express';
import home from './routes/home/index.js';

const app = express();

app.set("views", "./views");
app.set("view engine", "ejs");

app.use(express.static("public"));
app.use("/", home);

app.get("/", (req, res) => {
    res.sendFile("./public/index.html");
});

export default app;