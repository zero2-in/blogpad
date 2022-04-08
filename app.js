import express from 'express';
import member from './src/routes/member/index.js';
import home from './src/routes/home/index.js';

const app = express();

app.set("views", "./src/views");
app.set("view engine", "ejs");

app.use(express.static("./src/public"));

app.use("/", home);
app.use("/member", member);

export default app;