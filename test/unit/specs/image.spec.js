import { createTest, destroyVM } from '../util';
import Image from '@/components/image';

describe('Image', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Image, true);
    expect(vm.$el).to.exist;
  });
});

