import jwt from "jsonwebtoken";
import { env } from "../utils/env";
import { AuthTokens } from "./../models/auth.models";
import { TokenExpiredError, InvalidTokenError } from "../utils/errors";

export class AuthServices {

  public static getDataFromToken(
    token: string,
    tokenType: keyof typeof env.JWT
  ) {
    try {
      const decoded = jwt.verify(token, env.JWT[tokenType]) as string;

      return decoded;
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        throw new TokenExpiredError()
      };

      throw new InvalidTokenError();
    };
  };

  public static generateToken(userID: string): AuthTokens {

    const accessToken = jwt.sign(userID, env.JWT.JWT_SECRET, { expiresIn: "1h" });
    const refreshToken = jwt.sign(userID, env.JWT.JWT_SECRET_REFRESH, { expiresIn: "7d" });

    return {
      accessToken,
      refreshToken
    };
  };
};