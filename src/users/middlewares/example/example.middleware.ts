import {
  HttpException,
  HttpStatus,
  Injectable,
  NestMiddleware,
} from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class ExampleMiddleware implements NestMiddleware {
  use(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    console.log('Example middleware');
    console.log(req.headers.authorization);
    if (!authorization) {
      throw new HttpException('No authorization token', HttpStatus.FORBIDDEN);
    }
    if (authorization === 'admin') next();
    else
      throw new HttpException(
        'Invalid authorization token',
        HttpStatus.FORBIDDEN,
      );
  }
}
