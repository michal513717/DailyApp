import { Response } from "express";
import { CommonRoutesConfig } from "../common/common.routes.config";
import { ErrorCodes } from "./errorCodes";

export function zodErrorResponse(res: Response, err: Zod.ZodError) {
  return res.status(400).json({
    status: CommonRoutesConfig.RESPONSE_STATUS.FAILED,
    code: ErrorCodes.ZOD_VALIDATION_ERROR,
    message: err.format()
  });
};