import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  Res,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { log } from 'console';
import { Request, Response } from 'express';
import { title } from 'process';
import { CreateUserDto } from 'src/users/dtos/CreateUser.dto';
import { AuthGuard } from 'src/users/guards/auth/auth.guard';
import { ValidateCreateUserPipe } from 'src/users/pipes/validate-create-user/validate-create-user.pipe';
import { UsersService } from 'src/users/services/users/users.service';

@Controller('users')
// @UseGuards(AuthGuard)
export class UsersController {
  public constructor(private readonly userService: UsersService) {}
  @Get()
  @UseGuards(AuthGuard)
  getUsers() {
    return this.userService.fetchUsers();
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

  @Post('create')
  @UsePipes(new ValidationPipe())
  createUser(@Body(ValidateCreateUserPipe) body: CreateUserDto) {
    return this.userService.createUser(body);
  }

  //localhost:3000/users/56

  @Get(':id')
  getUserById(@Param('id', ParseIntPipe) id: number) {
    console.log(id);
    return {
      xinchao: 'chao ban',
    };
  }

  //localhost:3000/users?name=dat&email=tuan
  @Get('details')
  getUserDetail(@Query('name') name: string, @Query('email') email: string) {
    console.log(`name la ${name}, email la ${email}`);
    return {};
  }
}
