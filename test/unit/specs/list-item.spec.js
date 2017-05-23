import { createTest, destroyVM } from '../util';
import ListItem from '@/components/list-item';

describe('ListItem', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(ListItem, true);
    expect(vm.$el).to.exist;
  });
});

