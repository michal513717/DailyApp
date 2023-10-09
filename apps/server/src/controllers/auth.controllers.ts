import { Request, Response } from "express";
import { ZodError } from "zod";
import { AuthFailed } from "../utils/errors/errors";
import { zodErrorResponse } from "../utils/errors/zodErrorResponse.validation";

export const loginHandler = (
  req: Request,
  res: Response
) => {
  try {

    const { } = 


  } catch (error) {
    if (error instanceof ZodError) {
      return zodErrorResponse(res, error);
    };

    if (error instanceof AuthFailed) {
      return;
    };
  };
};