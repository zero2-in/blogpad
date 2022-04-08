import express from 'express';
const router = express.Router();

router.get("/", (req, res) => {
    res.redirect("/index");
});

router.get("/index", (req, res) => {
    res.render("home/index");
});

export default router;