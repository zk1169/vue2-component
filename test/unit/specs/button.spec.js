import { createTest, destroyVM } from '../util';
import Button from '@/components/button';

describe('Button', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Button, true);
    expect(vm.$el).to.exist;
  });
});

