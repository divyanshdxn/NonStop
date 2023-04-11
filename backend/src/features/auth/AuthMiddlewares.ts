import { Context, Next } from "koa";

export async function checkIdToken(ctx:Context, next: Next) {
    // TODO: Check for ID Token
    next()
}