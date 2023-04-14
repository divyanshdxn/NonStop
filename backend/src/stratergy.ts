import {
  StrategyOptions,
  Profile,
  VerifyCallback,
} from "passport-google-oauth20";

export const googleOAuthStratergy: StrategyOptions = {
  clientID: process.env.CLIENT_ID || "GOOGLE_CLIENT_ID",
  clientSecret: process.env.CLIENT_SECRET || "GOOGLE_CLIENT_SECRET",
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
};
