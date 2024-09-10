/** @format */

import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { catchError, from, map, mergeAll, Observable, of, take } from 'rxjs';
import axios, { AxiosResponse } from 'axios';

@Injectable()
export class UsersService {
  private readonly baseUrl = 'https://jsonplaceholder.typicode.com/users';
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  allUsers(): Observable<usersT[] | unknown> {
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
