import { NextFunction, Request, Response } from "express";

/**
 * asyncHandler is a function that takes another function (fn) as a param and wraps it in a promise
 * It will resolve with whatever value the route handler returns.
 * If one of the await statements in the route handler gives a rejected promise, it will go into the .catch  4 and be passed to next
 * @param fn an express route handler function
 */
const asyncHandler =
  (fn) => (req?: Request, res?: Response, next?: NextFunction) =>
    Promise.resolve(fn(req, res, next)).catch(next);

export { asyncHandler };