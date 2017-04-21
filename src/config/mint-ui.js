import Vue from 'vue';

import { Toast } from 'mint-ui/lib/toast';
import { Indicator } from 'mint-ui/lib/indicator';
import { Button } from 'mint-ui/lib/button';
import { Field } from 'mint-ui/lib/field';

export default {
    install: function(Vue, opts = {}) {
        Vue.use(Button);
        Vue.use(Field);
        Vue.prototype.$toast = Toast;
        Vue.prototype.$indicator = Indicator;
    }
};