import { UValPipe } from './uval.pipe';

describe('UvaluePipe', () => {
  it('create an instance', () => {
    const pipe = new UValPipe(null);
    expect(pipe).toBeTruthy();
  });
});
