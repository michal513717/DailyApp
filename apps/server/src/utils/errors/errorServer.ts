import type { Response } from "express";
import { CommonRoutesConfig } from "../../common/common.routes.config";
import { ErrorCodes } from "./errorCodes";

export const internalServerErrorResponse =
  (
    res: Response
  ) => (
    res.status(500).json({
      status: CommonRoutesConfig.RESPONSE_STATUS.FAILED,
      code: ErrorCodes.INTERNAL_SERVER_ERROR,
      message: "Internal server error"
    })
  );