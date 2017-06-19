import { createTest, destroyVM } from '../util';
import Line from '@/components/line';

describe('Line', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Line, true);
    expect(vm.$el).to.exist;
  });
});

