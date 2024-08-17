import { NextFunction, Request, Response } from "express";

export const asyncHandler = (fn: Function) => {
  return async (req: Request, res: Response, next: NextFunction) => {
    try {
      // code
      await fn(req, res, next)
      
    } catch (error) {
      next(error)
    }
  }
}
