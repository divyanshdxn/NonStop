import { RequestHandler } from "express";

export const isAuth: RequestHandler = async (req, res, next) => {
  if (req.user) {
    const prisma = res.locals.prisma;
    const profile = await prisma.user.findUnique({
      where: {
        id: req.user.id,
      },
    });
    res.locals.user = profile;
    next();
  } else {
    res.json({ loggedIn: false });
  }
};
