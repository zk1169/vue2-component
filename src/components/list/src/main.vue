 <template>
    <div class="zk-list">
        <slot>
            <div class="list-header">
                <ul layout="row">
                    <li v-if="hasCheckbox">
                        <zk-checkbox v-model="allChecked"></zk-checkbox>
                    </li>
                    <li v-if="hasIndex" class="list-index">
                        <span style="margin-left:8px;">#</span>
                    </li>
                    <li v-for="(header, index) in headers" :flex="header.flex">
                        <span class="title">
                            {{header.title}}
                        </span>
                    </li>
                </ul>
            </div>
            <div class="list-body">
                <ul>
                    <li v-for="(item, index) in list">
                        <div layout="row">
                            <div v-if="hasCheckbox" class="item-column">
                                <zk-checkbox v-model="item.checked"></zk-checkbox>
                            </div>
                            <div v-if="hasIndex" class="item-column list-index">
                                <i class="dot-status"></i>
                                {{index+1}}
                            </div>
                            <div class="item-column" v-for="header in headers" :flex="header.flex">
                                {{item[header.prop]}}
                            </div>
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
            type: [Boolean, String,Number],
            default: false
        },
        hasIndex: {
            type: [Boolean, String,Number],
            default: false
        }
    },
    data() {
        return {
            //allChecked: false
        }
    },
    components: {
        ZkCheckbox
    },
    computed:{
        allChecked:{
            get(){
                let _checked = true;
                if(this.list){
                    this.list.forEach((item)=>{
                        if(!item.checked){
                            _checked = false;
                            return;
                        }
                    });
                }
                return _checked;
            },
            set(value){
                if(this.list){
                    this.list.forEach((item)=>{
                        item.checked = value;
                    });
                }
            }
        }
    },
    methods: {
    }
}
</script>
