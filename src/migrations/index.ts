import * as migration_20260312_060628 from './20260312_060628';

export const migrations = [
  {
    up: migration_20260312_060628.up,
    down: migration_20260312_060628.down,
    name: '20260312_060628'
  },
];
