import { RequestHandler } from "express";

export const isAuth: RequestHandler = (req, res, next) => {
  if (req.user) next();
  else {
    res.json({ loggedIn: false });
  }
};
