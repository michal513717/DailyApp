import type { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { env } from "../utils/env";
import { AuthServices } from "./../services/auth.services";
import { ErrorWithCode } from "../utils/errors/error";
import { internalServerErrorResponse } from "../utils/errors/errorServer";

export const authenticateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new Error("Token not found");
    };

    const decodedToken = AuthServices.getDataFromToken(token, "JWT_SECRET");

    req.body.userID = decodedToken;

    next();
  } catch (err) {
    if (err instanceof ErrorWithCode) {
      return res.status(err.status).json(err);
    };
    return internalServerErrorResponse(res);
  };
};