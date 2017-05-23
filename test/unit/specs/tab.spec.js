import { createTest, destroyVM } from '../util';
import Tab from '@/components/tab';

describe('Tab', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Tab, true);
    expect(vm.$el).to.exist;
  });
});

