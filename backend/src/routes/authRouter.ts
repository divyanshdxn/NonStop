import express from "express";
import passport from "passport";
require("dotenv").config();

const router = express.Router();
router.get(
  "/google",
  passport.authenticate("google", {
    scope: "profile",
  })
);

router.get(
  "/google/callback",
  passport.authenticate("google", {
    session: true,
  }),
  (_req, res) => {
    res.redirect(`${process.env.CLIENT_URL}`);
  }
);

export default router;
