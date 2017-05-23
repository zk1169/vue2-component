import { createTest, destroyVM } from '../util';
import List from '@/components/list';

describe('List', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(List, true);
    expect(vm.$el).to.exist;
  });
});

