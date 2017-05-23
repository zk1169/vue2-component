import { createTest, destroyVM } from '../util';
import Tooltip from '@/components/tooltip';

describe('Tooltip', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Tooltip, true);
    expect(vm.$el).to.exist;
  });
});

