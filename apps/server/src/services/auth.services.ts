import jwt from "jsonwebtoken";
import z from "zod";
import { env } from "../utils/env";
import { AuthTokens } from "./../models/auth.models";
import { TokenExpiredError, InvalidTokenError, AuthFailed } from "../utils/errors/errors";
import { loginSchema } from "./../utils/schema/auth.schema";

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

  public static login(data: LoginType): void {
    try {
      const { userName, password } = loginSchema.parse(data);



    } catch (error) {
      if (error instanceof z.ZodError) {
        throw new AuthFailed();
      };
    };
  };
};

type LoginType = {
  userName: string;
  passwrod: string;
};