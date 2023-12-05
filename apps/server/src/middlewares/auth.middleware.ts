import type { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { ErrorWithCode } from '../utils/errors/errorWithCode';
import ServiceLocator from '../lib/locators/serviceLocator';
import { TokenServices } from '../lib/services/token.services';

const tokenServices = ServiceLocator.getService("TOKEN_SERVICES");

export const authenticateMiddleware = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization?.split(" ")[1];

    if (!token) {
      throw new ErrorWithCode(
        "Token not found",
        400,
        "TOKEN_NOT_FOUND"
      )
    }

    req.body.parsedToken = tokenServices?.verifyToken(token);

    next();

  } catch (err: any) {
    console.log(err.message);

  }
}