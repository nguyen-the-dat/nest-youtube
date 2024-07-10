import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Query,
  Req,
  Res,
} from '@nestjs/common';
import { log } from 'console';
import { Request, Response } from 'express';
import { title } from 'process';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';

@Controller('users')
export class UsersController {
  @Get('fetch')
  getUsers() {
    return { username: 'dat', email: 'dat@gmail.com' };
  }

  @Get('posts')
  getUsersPosts() {
    return [
      {
        username: 'dat',
        email: 'dat@gmail.com',
        posts: [
          {
            id: 1,
            title: 'Post 1',
          },
          {
            id: 2,
            title: 'Post 2',
          },
        ],
      },
    ];
  }

  @Post()
  createUser(@Body() body: CreateUserDto) {
    console.log(body);
    return {};
  }

  //localhost:3000/users/56
  @Get(':id')
  getUserById(@Param('id') id: string) {
    console.log(id);
    return {
      xinchao: 'chao ban',
    };
  }

  //localhost:3000/users?name=dat&email=tuan
  @Get()
  getUserDetail(@Query('name') name: string, @Query('email') email: string) {
    console.log(`name la ${name}, email la ${email}`);
    return {};
  }
}
