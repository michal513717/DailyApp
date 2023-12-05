import type { Jwt, JwtPayload } from 'jsonwebtoken';
import jwt, { TokenExpiredError } from 'jsonwebtoken';
import { secretKey } from '../../utils/const/token';
import { ErrorWithCode } from '../../utils/errors/errorWithCode';

export class TokenServices {
  public decodeToken(token: string): DecodedToken {
    return jwt.decode(token);
  }

  public verifyToken(token: string): VerifiedToken {
    try {
      return jwt.verify(token, secretKey) as string;
    } catch (err) {
      if (err instanceof TokenExpiredError) {
        throw new ErrorWithCode(
          "Token expired",
          403,
          "TOKEN_EXPIRED"
        )
      }

      throw new ErrorWithCode(
        "Invalid token",
        403,
        "INVALID_TOKEN"
      )
    }
  }

  public getAssignedToken(userName: string, options: jwt.SignOptions): string {
    return jwt.sign(userName, secretKey, options);
  };
}

type VerifiedToken = string | null | Jwt | JwtPayload

type DecodedToken = string | null | JwtPayload;