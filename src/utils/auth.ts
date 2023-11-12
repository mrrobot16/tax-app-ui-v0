import { faker } from '@faker-js/faker';

import { User } from 'types';

export function createRandomUser(): User {
  return {
    name: faker.internet.displayName(),
    email: faker.internet.email(),
    password: 'faker.internet.password()',
    auth_type: 'local',
  };
}
