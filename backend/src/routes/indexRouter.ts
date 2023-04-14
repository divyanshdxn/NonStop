import express from 'express';
const router = express.Router();
import {isAuth} from "../middleware/isAuth";


router.get("/account", isAuth, (req, res) => {
  const user = {
    ...req.user,
    loggedIn: true
  }
  res.json(user);
});


router.post('/logout', isAuth, function(req, res, next) {
  req.logout(function(err) {
    if (err) { return next(err); }
    res.redirect(`${process.env.CLIENT_URL}`);
  });
});

export default router;
