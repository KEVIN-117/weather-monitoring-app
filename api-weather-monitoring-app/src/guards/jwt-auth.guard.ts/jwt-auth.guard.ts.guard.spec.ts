import { JwtAuthGuardTsGuard } from './jwt-auth.guard.ts.guard';

describe('JwtAuthGuardTsGuard', () => {
  it('should be defined', () => {
    expect(new JwtAuthGuardTsGuard()).toBeDefined();
  });
});
