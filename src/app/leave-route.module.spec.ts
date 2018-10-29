import { LeaveRouteModule } from './leave-route.module';

describe('LeaveRouteModule', () => {
  let leaveRouteModule: LeaveRouteModule;

  beforeEach(() => {
    leaveRouteModule = new LeaveRouteModule();
  });

  it('should create an instance', () => {
    expect(leaveRouteModule).toBeTruthy();
  });
});
