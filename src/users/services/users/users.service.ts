import { Injectable } from '@nestjs/common';
import { CreateUserType } from 'src/utils/types';

@Injectable()
export class UsersService {
  private fakeUserData = [{ username: 'Anson', email: 'anson@gmail.com' }];
  fetchUsers() {
    return this.fakeUserData;
  }

  createUser(createUserType: CreateUserType) {
    this.fakeUserData.push(createUserType);
    return;
  }
}
