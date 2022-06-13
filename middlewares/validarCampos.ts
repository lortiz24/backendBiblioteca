import { NextFunction, Request, Response } from "express"
import { validationResult } from "express-validator"

export const validarCampos = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  console.log(errors);
  if (!errors.isEmpty()) {
    return res.status(404).json({ errors })
  }

  next()
}