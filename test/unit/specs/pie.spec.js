import { createTest, destroyVM } from '../util';
import Pie from '@/components/pie';

describe('Pie', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Pie, true);
    expect(vm.$el).to.exist;
  });
});

