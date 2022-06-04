import { IUserModel } from '../../../../../domain/models/user.model';
import { Injectable } from '@nestjs/common';
import { LogsService } from '../connection-microservices/connections-microservices/logs/logs.service';
import { EErrorsCatch } from '../../../../../domain/enums/errors.enum';

@Injectable()
export class UserService {
  private readonly users: Array<IUserModel>;

  constructor(private readonly logsService: LogsService) {
    this.users = new Array<IUserModel>();
  }

  async create(user: IUserModel): Promise<IUserModel | string> {
    try {
      this.users.push(user);
      return user;
    } catch (exception) {
      await this.logsService
        .createLog({
          name: 'UserService',
          typeError: EErrorsCatch.WARNING,
          message: exception.message,
        })
        .toPromise();
      return 'Error creating user';
    }
  }

  async find(): Promise<Array<IUserModel> | string> {
    try {
      if (this.users) {
        return this.users;
      }
      return 'Error loading user';
    } catch (exception) {
      await this.logsService
        .createLog({
          name: 'UserService',
          typeError: EErrorsCatch.WARNING,
          message: exception.message,
        })
        .toPromise();
    }
  }
}
