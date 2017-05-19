import Vue from 'vue';
import Select from 'element-ui/lib/select';
import Option from 'element-ui/lib/option';
import Button from 'element-ui/lib/button';
import Dialog from 'element-ui/lib/dialog';
import DatePicker from 'element-ui/lib/date-picker';
import Notification from 'element-ui/lib/notification';
//import Loading from 'element-ui/lib/loading';

// import {
//     //version,
//     //locale,
//     //i18n,
//     //Loading,
//     //Pagination,
//     //Dialog,
//     //Autocomplete,
//     //Dropdown,
//     //DropdownMenu,
//     //DropdownItem,
//     //Menu,
//     //Submenu,
//     //MenuItem,
//     //MenuItemGroup,
//     //Input,
//     //InputNumber,
//     //Radio,
//     //RadioGroup,
//     //RadioButton,
//     //Checkbox,
//     //CheckboxGroup,
//     //Switch,
//     Select,
//     Option,
//     //OptionGroup,
//     Button,
//     //ButtonGroup,
//     //Table,
//     //TableColumn,
//     DatePicker,
//     //TimeSelect,
//     //TimePicker,
//     //Popover,
//     //Tooltip,
//     //MessageBox,
//     //Breadcrumb,
//     //BreadcrumbItem,
//     //Form,
//     //FormItem,
//     //Tabs,
//     //TabPane,
//     //Tag,
//     //Tree,
//     //Alert,
//     Notification,
//     //Slider,
//     //Icon,
//     //Row,
//     //Col,
//     //Upload,
//     //Progress,
//     //Spinner,
//     //Message,
//     //Badge,
//     //Card,
//     //Rate,
//     //Steps,
//     //Step,
//     //Carousel,
//     //Scrollbar,
//     //CarouselItem,
//     //Collapse,
//     //CollapseItem,
//     //Cascader,
//     //ColorPicker
//} from 'element-ui';

/* istanbul ignore if */
// if (typeof window !== 'undefined' && window.Vue) {
//     install(window.Vue);
// };

export default {
    install: function(Vue, opts = {}) {
        /* istanbul ignore if */
        //if (install.installed) return;
        //locale.use(opts.locale);
        //locale.i18n(opts.i18n);

        // components.map(component => {
        //     Vue.component(component.name, component);
        // });

        //Vue.use(Pagination);
        Vue.use(Dialog);
        //Vue.use(Autocomplete);
        //Vue.use(Dropdown);
        //Vue.use(DropdownMenu);
        //Vue.use(DropdownItem);
        //Vue.use(Menu);
        //Vue.use(Submenu);
        //Vue.use(MenuItem);
        //Vue.use(MenuItemGroup);
        //Vue.use(Input);
        //Vue.use(InputNumber);
        //Vue.use(Radio);
        //Vue.use(RadioGroup);
        //Vue.use(RadioButton);
        //Vue.use(Checkbox);
        //Vue.use(CheckboxGroup);
        //Vue.use(Switch);
        Vue.use(Select);
        Vue.use(Option);
        //Vue.use(OptionGroup);
        Vue.use(Button);
        //Vue.use(ButtonGroup);
        //Vue.use(Table);
        //Vue.use(TableColumn);
        Vue.use(DatePicker);
        //Vue.use(TimeSelect);
        //Vue.use(TimePicker);
        //Vue.use(Popover);
        //Vue.use(Tooltip);
        //Vue.use(Breadcrumb);
        //Vue.use(BreadcrumbItem);
        //Vue.use(Form);
        //Vue.use(FormItem);
        //Vue.use(Tabs);
        //Vue.use(TabPane);
        //Vue.use(Tag);
        //Vue.use(Tree);
        //Vue.use(Alert);
        //Vue.use(Slider);
        //Vue.use(Icon);
        //Vue.use(Row);
        //Vue.use(Col);
        //Vue.use(Upload);
        //Vue.use(Progress);
        //Vue.use(Spinner);
        //Vue.use(Badge);
        //Vue.use(Card);
        //Vue.use(Rate);
        //Vue.use(Steps);
        //Vue.use(Step);
        //Vue.use(Carousel);
        //Vue.use(Scrollbar);
        //Vue.use(CarouselItem);
        //Vue.use(Collapse);
        //Vue.use(CollapseItem);
        //Vue.use(Cascader);
        //Vue.use(ColorPicker);

        //Vue.use(Loading.directive);

        //Vue.prototype.$loading = Loading.service;
        //Vue.prototype.$msgbox = MessageBox;
        //Vue.prototype.$alert = MessageBox.alert;
        //Vue.prototype.$confirm = MessageBox.confirm;
        //Vue.prototype.$prompt = MessageBox.prompt;
        //Vue.prototype.$notify = Notification;
        Vue.prototype.$toast = Notification;
        //Vue.prototype.$message = Message;
    }
};