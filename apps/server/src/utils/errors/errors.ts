import { ErrorWithCode } from "./errorWithCode";
import { ErrorCodes } from "./errorCodes";


export class TokenExpiredError extends ErrorWithCode {
  constructor() {
    super(
      "Token Expired Error",
      403,
      ErrorCodes.TOKEN_EXPIRED
    );
  };
};

export class InvalidTokenError extends ErrorWithCode {
  constructor() {
    super(
      "Invalid Token Error",
      403,
      ErrorCodes.INVALID_TOKEN
    );
  };
};

export class AuthFailed extends ErrorWithCode {
  constructor() {
    super(
      "Wrong Auth Data Error",
      401,
      ErrorCodes.WRONG_AUTH_DATA_ERROR
    )
  }
}