import express from 'express';
const app = express();
const PORT = 3000;

app.set("views", "./views");
app.set("view engine", "ejs");
app.use(express.static("public"));

app.listen(PORT, () => {
    console.log(`Server on ${PORT}`);
});

app.get("/", (req, res) => {
    res.sendFile("./public/index.html");
});