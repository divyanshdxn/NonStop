import { Prisma, PrismaClient } from "@prisma/client";
import { UserToken } from "@/types/Index";

declare global {
  namespace Express {
    export interface User {
      id: UserToken["id"];
      name: UserToken["name"];
      img: UserToken["img"];
    }
    export interface Locals {
      prisma: PrismaClient;
      user?: Prisma.UserGetPayload<{ include: { profile: true } }> | null;
    }
  }
}
export {};
