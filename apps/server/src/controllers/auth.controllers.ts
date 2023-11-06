
import { Request, Response } from "express";
import { LoginRequest } from "../models/requests.models";
import { z } from "zod";
import { loginSchema } from "../utils/zodParse";
import { zodErrorResponse } from "../utils/zodErrorResponse.validation";
import { internalServerErrorResponse } from "../utils/errorServer";
import { ErrorWithCode } from "../utils/error";

export const loginHandler = (req: LoginRequest, res: Response) => {
  try {
    
    const data = loginSchema.parseAsync(req.body);
    

    return res.status(200).send({
      data: 'ga'
    });
  } catch (err) {
    console.log(err);
    if(err instanceof z.ZodError){
      return zodErrorResponse(res, err);
    };

    if(err instanceof ErrorWithCode){
      return res.status(err.status).json(err);
    }

    return internalServerErrorResponse(res);
  };
};