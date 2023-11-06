import { ErrorWithCode } from "./errorWithCode";
import { ErrorCodes } from "./errorCodes";

export class UserNotFoundError extends ErrorWithCode {
  constructor() {
    super("User not found", 404, ErrorCodes.USER_NOT_FOUND_ERROR);
  };
};