import { Request, Response } from "express"
import { z } from "zod";
import { zodErrorResponse } from "../utils/errors/zodErrorResponse.validation";


export const getTasksHandler = (req: Request, res: Response) => {
  try {

  } catch (err) {

  };
};

export const addTasksHandler = (req: Request, res: Response) => {
  try {

  } catch (err) {
    if (err instanceof z.ZodError) {
      return zodErrorResponse(res, err);
    };
  };
};