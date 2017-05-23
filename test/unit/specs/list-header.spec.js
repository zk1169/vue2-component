import { createTest, destroyVM } from '../util';
import ListHeader from '@/components/list-header';

describe('ListHeader', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(ListHeader, true);
    expect(vm.$el).to.exist;
  });
});

