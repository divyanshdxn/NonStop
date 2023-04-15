import { Request } from "express";

export type UserToken = {
  id: string;
  name: string | null;
  img: string | null;
};

export type TypedRequest<T> = Request<{}, {}, T>;
