import { NextFunction, Request, Response } from "express";
import { getUserData, IUserToken } from "../utils/jwt";

export interface IReqUser extends Request {
  user?: IUserToken;
}

export default (req: Request, res: Response, next: NextFunction) => {
  const authorization = req.headers?.authorization;

  if (!authorization) {
    return res.status(402).json({
      message: "Unauthorized",
      data: null,
    });
  }

  const [prefix, token] = authorization.split(" ");

  if (!(prefix === "Bearer" && token)) {
    return res.status(402).json({
      message: "Unauthorized",
      data: null,
    });
  }

  const user = getUserData(token) as IUserToken;

  if (!user) {
    return res.status(402).json({
      message: "Unauthorized",
      data: null,
    });
  }

  // Attach user data to the request object
  (req as IReqUser).user = user;
  next();
};
