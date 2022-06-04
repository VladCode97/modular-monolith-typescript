import { Controller, Inject } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UserService } from '../services/user.service';
import { IUserModel } from '../../../../../domain/models/user.model';
import { ECommands } from '../../../../../domain/enums/commands/commands.enum';

@Controller('user')
export class UserEvent {
  @Inject()
  private readonly userService: UserService;

  @MessagePattern({ cmd: ECommands.CREATE_USER })
  createUser(@Payload() user: IUserModel) {
    return this.userService.create(user);
  }

  @MessagePattern({ cmd: ECommands.VIEW_USER })
  findUser() {
    return this.userService.find();
  }
}
