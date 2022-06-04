import { Inject, Injectable } from '@nestjs/common';
import { USER_SERVICE_SYMBOL } from '../../../../../../domain/Symbols/services.symbols';
import { ClientProxy } from '@nestjs/microservices';
import { ECommands } from '../../../../../../domain/enums/commands/commands.enum';
import { map } from 'rxjs';
import { IUserModel } from '../../../../../../domain/models/user.model';

@Injectable()
export class UserService {
  constructor(
    @Inject(USER_SERVICE_SYMBOL)
    private readonly userProxyService: ClientProxy,
  ) {}

  createUser(user: IUserModel) {
    const pattern = { cmd: ECommands.CREATE_USER };
    const payload = { ...user };
    return this.userProxyService.send(pattern, payload).pipe(
      map((data) => {
        return data;
      }),
    );
  }

  findUsers() {
    const pattern = { cmd: ECommands.VIEW_USER };
    return this.userProxyService.send(pattern, {}).pipe(
      map((data) => {
        return data;
      }),
    );
  }
}
