import { HideMeDirective } from './hide-me.directive';

describe('HideMeDirective', () => {
  it('should create an instance', () => {
    const directive = new HideMeDirective(
      null,
      null
    );
    expect(directive).toBeTruthy();
  });
});
