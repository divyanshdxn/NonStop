require("dotenv").config();

import express from "express";
import cors from "cors";
import session from "express-session";
import passport from "passport";
import indexRouter from "@/routes/indexRouter";
import authRouter from "@/routes/authRouter";
import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { PrismaClient } from "@prisma/client";
import { googleOAuthStratergy } from "@/stratergy";
import { UserToken } from "@/types/Index";

const app = express();
const prisma = new PrismaClient();

async function main() {
  passport.use(
    new GoogleStrategy(
      googleOAuthStratergy,
      async (_accessToken, _refreshToken, profile, done) => {
        const account = profile._json;
        let user: UserToken;
        console.log("Checking for users...");
        try {
          let currUser = await prisma.user.findUnique({
            where: {
              id: account.sub,
            },
          });
          console.log("Found user");
          if (currUser === null) {
            currUser = await prisma.user.create({
              data: {
                id: account.sub,
                img: account.picture,
                name: account.name,
                email: account.email,
              },
            });
          }
          user = {
            id: currUser.id,
            name: currUser.name,
            img: currUser.img,
          };
          done(null, user);
          console.log("DONE")
        } catch (error: any) {
          done(error.toString());
          console.log("ERROR", error)
        }
      }
    )
  );

  passport.serializeUser((user, done) => {
    done(null, user);
  });

  passport.deserializeUser<UserToken>((id, done) => {
    done(null, id);
  });

  app.use(express.json());
  app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));

  app.use(
    session({
      secret: process.env.SESSION_SECRET || "NON_STOP_APP",
      cookie: {
        secure: process.env.NODE_ENV === "production" ? true : "auto",
        sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
      },
      resave: false,
      saveUninitialized: false,
    })
  );

  app.use(passport.initialize());
  app.use(passport.session());

  //initialize routes
  app.use("/", indexRouter);
  app.use("/auth", authRouter);

  //app listen
  const PORT = process.env.PORT || 4000;

  app.listen(PORT, () => {
    console.log(`Server listening on port http://localhost:${PORT}`);
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })

  .catch(async (e) => {
    console.error(e);

    await prisma.$disconnect();

    process.exit(1);
  });
