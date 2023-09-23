import { ErrorWithCode } from "./error";
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