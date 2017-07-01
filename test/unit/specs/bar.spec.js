import { createTest, destroyVM } from '../util';
import Bar from '@/components/bar';

describe('Bar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Bar, true);
    expect(vm.$el).to.exist;
  });
});

