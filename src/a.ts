import type { EntityRepository, FindOptions } from '@mikro-orm/core';

// a function seems necessary to hang the server
function somethingReturningFindOptions<T> (): FindOptions<T> {
    return {} as never
  }

class UserModel  {
    // does not hang if removed
    declare firstName: string;
}

({} as EntityRepository<UserModel>).findOne('one' as never, somethingReturningFindOptions());
