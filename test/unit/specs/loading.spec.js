import { createTest, destroyVM } from '../util';
import Loading from '@/components/loading';

describe('Loading', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Loading, true);
    expect(vm.$el).to.exist;
  });
});

