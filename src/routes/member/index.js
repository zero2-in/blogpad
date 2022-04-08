import express from 'express';
const router = express.Router();

router.get("/login", (req, res) => {
    res.render("member/login");
});

export default router;