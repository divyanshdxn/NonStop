import { loginUser, signupUser } from "@/features/auth/AuthController";
import { checkIdToken } from "@/features/auth/AuthMiddlewares";
import { getUser, getUserPosts } from "@/features/user/UserController";
import Router from "koa-router";
import BodyParser from 'koa-body';
import { createPost, deletePost, getPost, getPosts } from "@/features/post/PostController";

const router = new Router({ prefix: '/api' });
router.use( BodyParser())

// Auth Routes
router.post("SIGNUP", "/signup", signupUser)
router.post("LOGIN", "/login", checkIdToken, loginUser)

// User Routes
router.get("GET_PROFILE","/user/:id", checkIdToken, getUser)
router.get("GET_PROFILE","/user/posts", checkIdToken, getUserPosts)

// Post Routes
router.post("CREATE_POST", "/post/create", checkIdToken, createPost)
router.get("GET_ALL_POST", "/post/get", checkIdToken, getPosts)
router.get("GET_POST", "/post/get/:id", checkIdToken, getPost)
router.put("DELETE_POST", "/post/delete/:id", checkIdToken, deletePost)

