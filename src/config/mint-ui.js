import Vue from 'vue';

import { Toast } from 'mint-ui/lib/toast';
import { Indicator } from 'mint-ui/lib/indicator';
import { Button } from 'mint-ui/lib/button';
import { Field } from 'mint-ui/lib/field';
import { Cell } from 'mint-ui/lib/cell';
import { InfiniteScroll } from 'mint-ui/lib/infinite-scroll';
import { Actionsheet } from 'mint-ui/lib/actionsheet';
import { Popup } from 'mint-ui/lib/popup';
//import { PaletteButton } from 'mint-ui/lib/palette-button';
import { Search } from 'mint-ui/lib/search';

export default {
    install: function(Vue, opts = {}) {
        Vue.use(Button);
        Vue.use(Field);
        Vue.use(Cell);
        Vue.use(InfiniteScroll);
        Vue.use(Actionsheet);
        Vue.use(Popup);
        //Vue.use(PaletteButton);
        Vue.use(Search);
        
        Vue.prototype.$toast = Toast;
        Vue.prototype.$indicator = Indicator;
    }
};