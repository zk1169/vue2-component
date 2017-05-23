import { createTest, destroyVM } from '../util';
import CheckboxList from '@/components/checkbox-list';

describe('CheckboxList', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(CheckboxList, true);
    expect(vm.$el).to.exist;
  });
});

