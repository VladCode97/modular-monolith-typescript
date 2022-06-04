import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { IUserModel } from '../../../../../domain/models/user.model';
import { UserService } from '../connections-microservices/user/user.service';

@Controller('user')
export class UserController {
  @Inject()
  private readonly userService: UserService;

  @Post('createUser')
  createUser(@Body() user: IUserModel) {
    return this.userService.createUser(user);
  }

  @Get('viewUser')
  viewUser() {
    return this.userService.findUsers();
  }
}
