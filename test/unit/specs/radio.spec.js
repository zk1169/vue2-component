import { createTest, destroyVM } from '../util';
import Radio from '@/components/radio';

describe('Radio', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Radio, true);
    expect(vm.$el).to.exist;
  });
});

