import { createTest, destroyVM } from '../util';
import DatePicker from '@/components/date-picker';

describe('DatePicker', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(DatePicker, true);
    expect(vm.$el).to.exist;
  });
});

