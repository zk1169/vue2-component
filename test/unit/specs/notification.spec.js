import { createTest, destroyVM } from '../util';
import Notification from '@/components/notification';

describe('Notification', () => {
  let vm;
  afterEach(() => {
    destroyVM(vm);
  });

  it('create', () => {
    vm = createTest(Notification, true);
    expect(vm.$el).to.exist;
  });
});

