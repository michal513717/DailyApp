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
  };
};

export class UserNotFoundError extends ErrorWithCode {
  constructor() {
    super(
      "User not found",
      404,
      ErrorCodes.USER_NOT_FOUND_ERROR
    );
  };
};

export class UserAlreadyExistError extends ErrorWithCode {
  constructor() {
    super(
      "User already exist",
      409,
      ErrorCodes.USER_ALREADY_EXIST
    );
  };
};