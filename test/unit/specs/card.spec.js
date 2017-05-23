import { createTest, destroyVM } from '../util';
import Card from '@/components/card';

describe('Card', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Card, true);
    expect(vm.$el).to.exist;
  });
});

