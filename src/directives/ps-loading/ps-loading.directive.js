import Vue from 'vue';
let Mask = Vue.extend(require('./ps-loading.vue'));
import { addClass, removeClass } from 'element-ui/src/utils/dom';

let toggleLoading = (el, binding) => {
    if (binding.value) {
        Vue.nextTick(() => {
            if (binding.modifiers.fullscreen) {
                el.originalPosition = document.body.style.position;
                el.originalOverflow = document.body.style.overflow;

                addClass(el.mask, 'is-fullscreen');
                insertDom(document.body, el, binding);
            } else {
                removeClass(el.mask, 'is-fullscreen');

                if (binding.modifiers.body) {
                    el.originalPosition = document.body.style.position;

                    ['top', 'left'].forEach(property => {
                        let scroll = property === 'top' ? 'scrollTop' : 'scrollLeft';
                        el.maskStyle[property] = el.getBoundingClientRect()[property] + document.body[scroll] + document.documentElement[scroll] + 'px';
                    });
                    ['height', 'width'].forEach(property => {
                        el.maskStyle[property] = el.getBoundingClientRect()[property] + 'px';
                    });

                    insertDom(document.body, el, binding);
                } else {
                    el.originalPosition = el.style.position;
                    insertDom(el, el, binding);
                }
            }
        });
    } else {
        if (el.domVisible) {
            el.instance.$on('after-leave', _ => {
                el.domVisible = false;
                if (binding.modifiers.fullscreen && el.originalOverflow !== 'hidden') {
                    document.body.style.overflow = el.originalOverflow;
                }
                if (binding.modifiers.fullscreen || binding.modifiers.body) {
                    document.body.style.position = el.originalPosition;
                } else {
                    el.style.position = el.originalPosition;
                }
            });
            el.instance.visible = false;
        }
    }
};
let insertDom = (parent, el, binding) => {
    if (!el.domVisible) {
        Object.keys(el.maskStyle).forEach(property => {
            el.mask.style[property] = el.maskStyle[property];
        });

        if (el.originalPosition !== 'absolute') {
            parent.style.position = 'relative';
        }
        if (binding.modifiers.fullscreen && binding.modifiers.lock) {
            parent.style.overflow = 'hidden';
        }
        el.domVisible = true;

        parent.appendChild(el.mask);
        Vue.nextTick(() => {
            el.instance.visible = true;
        });
        el.domInserted = true;
    }
};

Vue.directive('ps-loading', {
    bind: function(el, binding) {
        let mask = new Mask({
            el: document.createElement('div'),
            data: {
                text: el.getAttribute('ps-loading-text'),
                fullscreen: !!binding.modifiers.fullscreen
            }
        });
        el.instance = mask;
        el.mask = mask.$el;
        el.maskStyle = {};

        toggleLoading(el, binding);
    },

    update: function(el, binding) {
        el.instance.setText(el.getAttribute('ps-loading-text'));
        if (binding.oldValue !== binding.value) {
            toggleLoading(el, binding);
        }
    },

    unbind: function(el, binding) {
        if (el.domInserted) {
            if (binding.modifiers.fullscreen || binding.modifiers.body) {
                document.body.removeChild(el.mask);
            } else {
                el.mask &&
                    el.mask.parentNode &&
                    el.mask.parentNode.removeChild(el.mask);
            }
        }
    }
});

// Vue.directive('image-404', {
//     bind: function(el, binding, vnode) {
//         var notFoundCount = 0;
//         if (!el.attributes.src) {
//             changeSCR();
//         }
//         el.onerror = changeSCR;

//         function changeSCR() {
//             var newIamgeUrl = binding.value;
//             if (notFoundCount >= 3 || !newIamgeUrl) {
//                 newIamgeUrl = getDefaultImagePlaceholder();
//             }
//             el.setAttribute('src', newIamgeUrl);
//             notFoundCount++;
//         }

//         function getDefaultImagePlaceholder() {
//             var width = el.offsetWidth || 120;
//             var height = el.offsetHeight || 120;
//             var protocol = window.location.href.split('://').shift();
//             if (!protocol) protocol = 'http';
//             return protocol + '://dummyimage.com/' + width + 'x' + height;
//         }
//     },
//     componentUpdated: function() {

//     }
// });

// Vue.directive('title', {
//     inserted: function(el, binding) {
//         document.title = binding.value;
//     }
// });