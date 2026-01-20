import { Injectable } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    //inject UsersService or other dependencies here
    private readonly usersService: UsersService
  ) {}

  public login(email: string, password: string) {
    const user = this.usersService.findOneByEmail(email);
    return  'SAMPLE_TOKEN';
  }
  
}
