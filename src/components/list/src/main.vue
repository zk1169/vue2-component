 <template>
    <div class="zk-list">
        <slot>
            <div class="zk-list-header">
                <ul layout="row">
                    <li v-if="hasCheckbox">
                        <zk-checkbox v-model="allChecked"></zk-checkbox>
                    </li>
                    <li v-if="hasIndex" class="list-index">
                        #
                    </li>
                    <li v-for="(header, index) in headers" :flex="header.flex">
                        <span class="title">
                            {{header.title}}
                        </span>
                    </li>
                    <li>
                        操作
                    </li>
                </ul>
            </div>
            <div class="zk-list-body">
                <ul>
                    <li v-for="(item, index) in list" class="zk-list-item">
                        <div layout="row">
                            <div v-if="hasCheckbox" class="item-column">
                                <zk-checkbox v-model="item.checked"></zk-checkbox>
                            </div>
                            <div v-if="hasIndex" class="item-column list-index">
                                <i class="dot-status"></i>
                                {{((page-1)*10)+(index+1)}}
                            </div>
                            <div class="item-column" v-for="header in headers" :flex="header.flex">
                                <span v-if="header.prop==='status'">{{item[header.prop]|bugstatus}}</span>
                                <span v-else>{{item[header.prop]}}</span>
                            </div>
                            <!--<div class="item-column"><router-link :to="'/bug-detail/'+item.id">详情</router-link></div>-->
                            <div class="item-column" @click="itemClick(index)"><a class="hand">详情</a></div>
                        </div>
                    </li>
                </ul>
            </div>
        </slot>
    </div>
</template>

<script>
import ZkCheckbox from '../../checkbox';

export default {
    name: 'zk-list',
    props: {
        headers: {
            type: Array
        },
        list: {
            type: Array
        },
        hasCheckbox: {
            type: [Boolean, String, Number],
            default: false
        },
        hasIndex: {
            type: [Boolean, String, Number],
            default: false
        },
        page:{
            type:Number,
            default:1
        }
    },
    data() {
        return {
            //allChecked: false
            currentPage: 2
        }
    },
    components: {
        ZkCheckbox
    },
    computed: {
        allChecked: {
            get() {
                let _checked = true;
                if (this.list) {
                    this.list.forEach((item) => {
                        if (!item.checked) {
                            _checked = false;
                            return;
                        }
                    });
                }
                return _checked;
            },
            set(value) {
                if (this.list) {
                    this.list.forEach((item) => {
                        item.checked = value;
                    });
                }
            }
        }
    },
    methods: {
        handleSizeChange() {

        },
        handleCurrentChange() {

        },
        itemClick(index){
            this.$emit("item-click",index);
        }
    }
}
</script>
