// /**
//  * @example
//  * <input type="text" v-datepicker="{
//               initDate: '20170415',
//               dayNames: [7, 1, 2, 3, 4, 5, 6]
//               monthNames: [1, 2, 3, 4, 5, 6....],
//               onSelect() {...}
//              }" />
//  * You can pass the whole object params through a variable
//  * in parent components like the inline directive 'v-show="message"'
//  */

// import $ from 'jquery';
// import 'jquery-ui';
// import moment from 'moment';

// export default {
//   bind (el, binding) {
//     var picker = $(el).datepicker({
//       changeMonth: true,
//       changeYear: true,
//       showOtherMonths: true
//       // yearRange: '1970:' + (new Date().getFullYear() + 10)
//     });
//     var getDateStr = function () {
//       var currentDate = picker.datepicker('getDate');
//       return currentDate ? moment(currentDate).format('YYYYMMDD') : '';
//     };
//     var config = function () {
//       picker.datepicker('option', 'dateFormat', 'yymmdd');
//       picker.datepicker('option', 'showAnim', 'fadeIn');
//       if (binding.value && binding.value.monthNames instanceof Array) {
//         picker.datepicker('option', 'monthNames', binding.value.monthNames);
//         picker.datepicker('option', 'monthNamesShort', binding.value.monthNames);
//       }
//       if (binding.value && binding.value.dayNames instanceof Array) {
//         picker.datepicker('option', 'dayNamesMin', binding.value.dayNames);
//       }
//     };
//     var widget = picker.datepicker('widget');
//     picker.datepicker('option', 'beforeShow', function () {
//       // config();
//       setTimeout(() => {
//         widget.css('z-index', 9999);
//       }, 0);

//       // 从日历控件上获取设置的日期
//       // 若不存在的话，就用父组件传过来的日期初始化
//       var val = getDateStr();
//       if (!val) {
//         val = binding.value && binding.value.initDate || '';
//       }
//       picker.val(val);
//     }).datepicker('option', 'onSelect', function (dateStr) {
//       if (binding.value && typeof (binding.value.onSelect) === 'function') {
//         binding.value.onSelect(getDateStr(), picker);
//       }
//       // picker.datepicker('hide');
//     });
//     // widget.off('click').on('click', function (event) {
//     //   event.stopPropagation();
//     // });
//     config();
//   },
//   inserted (el, binding) {
//     let $father = $(el).parent();
//     // let index = /$(el).index();
//     let $from = $father.find('input').eq(0);
//     let $to = $father.find('input').eq(1);
//     if ($father.hasClass('datepicker-range')) {
//       $from.datepicker('option', 'onClose', function (selectedDate) {
//         $to.datepicker('option', 'minDate', selectedDate);
//       });
//       $to.datepicker('option', 'onClose', function (selectedDate) {
//         $from.datepicker('option', 'maxDate', selectedDate);
//       });
//     };
//   },
//   unbind (el, binding) {
//     var picker = $(el).datepicker();
//     picker.datepicker('hide');
//     picker.datepicker('widget').off('click');
//     picker.datepicker('destroy');
//   },
//   update (el, binding) {
//     $(el).datepicker('setDate', binding.value);
//   }
// };