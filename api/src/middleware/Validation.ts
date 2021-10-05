import { sanitize } from "class-sanitizer";
import { plainToClass } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { RequestHandler } from "express";

export default function Validation(type: any, skipMissingProperties = false): RequestHandler {

  return (req, res, next) => {
    const dtoObj = plainToClass(type, req.body);
    validate(dtoObj, { skipMissingProperties }).then(
      (errors: ValidationError[]) => {
        if (errors.length > 0) {
          const Errors = errors.map((error: ValidationError) => {
            return {
              field: error.property,
              errors: (Object as any).values(error.constraints)
            }
          });
          res.status(400).json(Errors)
        } else {
          //sanitize the object and call the next middleware
          sanitize(dtoObj);
          req.body = dtoObj;
          next();
        }
      }
    );
  };
}