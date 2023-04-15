import express, { Response } from 'express';
import {isAuth} from "../middleware/isAuth";
import {
  makeErrorResponse,
  makeSuccessResponse,
} from "@nonstop/common/dto/ApplicationResponse";
import { Prisma } from "@prisma/client";
import { TypedRequest } from "@/types/Index";
import lodash from "lodash";


const router = express.Router();
router.get("/account", isAuth, (_req, res) => {
  const user = {
    ...res.locals.user,
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

router.get("/profile", isAuth, (_req, res) => {
  if (res.locals.user !== null) {
    res.json(makeSuccessResponse(res.locals.user));
  } else {
    res.json(makeErrorResponse("User Not found", 404));
  }
});

router.post(
  "/profile",
  isAuth,
  async (req: TypedRequest<Prisma.ProfileCreateInput>, res: Response) => {
    const profile = req.body;
    const user = res.locals.user;
    if (user === null || user === undefined) {
      res.json(makeErrorResponse("User Not found", 404));
      return;
    }
    try {
      const createdProfile = await res.locals.prisma.profile.create({
        data: {
          ...profile,
          user: lodash.omit(user, [
            "profile",
          ]) as Prisma.UserCreateNestedOneWithoutProfileInput,
        },
      });
      res.json(
        makeSuccessResponse(createdProfile, "Profile created successfully")
      );
    } catch (err) {}
  }
);

export default router;
