import type { FindOptions } from '@mikro-orm/core';

export function somethingReturningFindOptions<T> (): FindOptions<T> {
    return {}
  }