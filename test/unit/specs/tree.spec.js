import { createTest, destroyVM } from '../util';
import Tree from '@/components/tree';

describe('Tree', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Tree, true);
    expect(vm.$el).to.exist;
  });
});

