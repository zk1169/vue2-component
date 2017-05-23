import { createTest, destroyVM } from '../util';
import TabItem from '@/components/tab-item';

describe('TabItem', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(TabItem, true);
    expect(vm.$el).to.exist;
  });
});

