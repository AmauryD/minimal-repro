import { somethingReturningFindOptions } from './b';
import type { EntityRepository } from '@mikro-orm/core';

class UserModel  {
    // does not hang if removed
    declare firstName: string;
}

export class SomeService {
  public async getOne () {
    return (anything as EntityRepository<UserModel>).findOne(id, somethingReturningFindOptions(query));
  }
}
