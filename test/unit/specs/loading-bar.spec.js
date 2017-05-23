import { createTest, destroyVM } from '../util';
import LoadingBar from '@/components/loading-bar';

describe('LoadingBar', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(LoadingBar, true);
    expect(vm.$el).to.exist;
  });
});

