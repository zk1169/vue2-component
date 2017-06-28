import { createTest, destroyVM } from '../util';
import NplHeader from '@/components/npl-header';

describe('NplHeader', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(NplHeader, true);
    expect(vm.$el).to.exist;
  });
});

