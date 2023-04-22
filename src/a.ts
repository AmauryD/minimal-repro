import { jsonApiQueryToFindOptions } from './b';
import type { EntityRepository } from '@mikro-orm/core';

export class UserModel  {
    declare firstName: string;
}

export class UserResourceServiceImpl {
  public async getOne () {
    return (anything as EntityRepository<UserModel>).findOne(id, jsonApiQueryToFindOptions(query));
  }
}
