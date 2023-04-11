import { Context } from "koa";

export async function getUser(ctx:Context) {
    // TODO: Return a user with id == ctx.params.id
}

export async function getUserPosts(ctx: Context) {
    // TODO: Return all posts where post.authorId = ctx.header.idToken.userId
}

