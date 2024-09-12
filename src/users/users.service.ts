/** @format */

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { catchError, from, map, mergeAll, Observable, of, take } from 'rxjs';
import axios, { AxiosResponse } from 'axios';
import { usersT } from './entities/interfaces/user.interface';

@Injectable()
export class UsersService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';

  create(createUserDto: CreateUserDto) {
    return 'Register was success';
  }

  allUsers(): Observable<usersT[] | unknown> {
    if (Math.random() > 0.75) {
      throw new Error('error');
    }
    return from(axios.get(this.baseUrl)).pipe(
      map((res: AxiosResponse) => res.data),
      catchError(err => {
        return of(err);
      })
    );
  }

  oneUser(id: number) {
    const data$ = this.allUsers().pipe(mergeAll(), take(id));
    data$.subscribe(console.log);
    return data$;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
