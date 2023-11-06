import type { Request } from "express";

export type LoginBody = {
  username: string;
  password: number;
};

export type LoginRequest = Request & {
  body: LoginBody;
};
