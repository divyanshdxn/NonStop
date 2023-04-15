import express, { Response } from "express";
import { isAuth } from "../middleware/isAuth";
import {
  makeErrorResponse,
  makeSuccessResponse,
} from "@nonstop/common/dto/ApplicationResponse";
import { Prisma } from "@prisma/client";
import { TypedRequest } from "@/types/Index";
import { queryToNum as convertToNum } from "@/utils";

const router = express.Router();

/*******************************
 * Account Routes
 * *****************************/
router.get("/account", isAuth, (_req, res) => {
  const user = {
    ...res.locals.user,
    loggedIn: true,
  };
  res.json(user);
});

router.post("/logout", isAuth, function (req, res, next) {
  req.logout(function (err) {
    if (err) {
      console.log(err.toString())
      return next(err);
    }
    res.clearCookie("connect.sid")
    console.log("Logged out`")
      res.redirect(`${process.env.CLIENT_URL}`);
  });
});

/*******************************
 * Profile Routes
 * *****************************/
router.get("/profile", isAuth, async (_req, res) => {
  if (res.locals.user !== null) {
    const profile = await res.locals.prisma.profile.findUniqueOrThrow({
      where: {
        userId: res.locals.user?.id,
      },
    });
    res.json(makeSuccessResponse(profile));
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
      const user = res.locals.user;
      const createdProfile = await res.locals.prisma.profile.create({
        data: {
          ...profile,
          user: {
            connect: {
              ...user,
              email: user?.email ?? undefined,
            },
          },
        },
      });
      res.json(
        makeSuccessResponse(createdProfile, "Profile created successfully")
      );
    } catch (err) {}
  }
);

router.patch(
  "/profile",
  isAuth,
  async (
    req: TypedRequest<Prisma.ProfileUpdateInput & { id: number }>,
    res: Response
  ) => {
    const { id, ...profile } = req.body;
    const user = res.locals.user;
    if (user === null || user === undefined) {
      res.json(makeErrorResponse("User Not found", 404));
      return;
    }
    try {
      const updatedProfile = await res.locals.prisma.profile.update({
        data: profile,
        where: {
          id,
        },
      });
      res.json(
        makeSuccessResponse(updatedProfile, "Profile updated successfully")
      );
    } catch (err: any) {
      res.json(makeErrorResponse(err.toString()));
    }
  }
);

/*******************************
 * Events Routes
 * *****************************/
router.get("/event", async (req, res: Response) => {
  const { page, len } = req.query;
  const pageLen = convertToNum(len) || 50;
  const pageNum = convertToNum(page) || 1;
  const isFetchAll = pageLen === -1;
  try {
    const events = res.locals.prisma.event.findMany({
      skip: (pageNum - 1) * pageLen,
      take: !isFetchAll ? pageLen : undefined,
    });
    res.json(makeSuccessResponse(events, "Events fetched successfully"));
  } catch (err: any) {
    res.json(makeErrorResponse(err.toString()));
  }
});

router.get("/event/:id", async (req, res: Response) => {
  const { id } = req.params;
  try {
    const parsedId = convertToNum(id);
    if (parsedId === null) throw "Event Id is invalid";
    const events = res.locals.prisma.event.findUnique({
      where: { id: parsedId },
    });
    res.json(makeSuccessResponse(events, `Event with id ${id} fetched`));
  } catch (err: any) {
    res.json(makeErrorResponse(err.toString()));
  }
});

router.post(
  "/event",
  isAuth,
  async (
    req: TypedRequest<Omit<Prisma.EventCreateInput, "createdBy">>,
    res: Response
  ) => {
    try {
      const user = res.locals.user;
      if (user == null) throw "User not logged in";
      const eventReqData = req.body;
      const event: Prisma.EventCreateInput = {
        ...eventReqData,
        createdBy: {
          connect: {
            ...user,
            email: user.email ?? undefined,
          },
        },
      };
      const newEvent = await res.locals.prisma.event.create({ data: event });
      res.json(makeSuccessResponse(newEvent, "Event created successfully"));
    } catch (err: any) {
      res.json(makeErrorResponse(err.toString()));
    }
  }
);
router.patch(
  "/event/:id",
  isAuth,
  async (
    req: TypedRequest<Prisma.EventUpdateInput, { id: string }>,
    res: Response
  ) => {
    try {
      const { id } = req.params;
      const parsedId = convertToNum(id);
      if (parsedId == null) {
        throw "Invalid event Id";
      }
      const user = res.locals.user;
      if (user == null) throw "User not logged in";
      const eventReqData = req.body;
      const updatedEvent = await res.locals.prisma.event.update({
        data: eventReqData,
        where: { id: parsedId },
      });
      res.json(makeSuccessResponse(updatedEvent, "Event created successfully"));
    } catch (err: any) {
      res.json(makeErrorResponse(err.toString()));
    }
  }
);
router.delete("/event/:id", isAuth, async (req, res) => {
  try {
    const { id } = req.params;
    const parsedId = convertToNum(id);
    if (parsedId == null) {
      throw "Invalid event Id";
    }
    await res.locals.prisma.event.delete({ where: { id: parsedId } });
    res.json(makeSuccessResponse(null, "Event deleted successfully"));
  } catch (err: any) {
    res.json(makeErrorResponse(err.toString()));
  }
});

export default router;
