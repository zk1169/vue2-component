import { createTest, destroyVM } from '../util';
import Popover from '@/components/popover';

describe('Popover', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Popover, true);
    expect(vm.$el).to.exist;
  });
});

