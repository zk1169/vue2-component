 <template>
    <div class="list-component">
        <slot>
            <div class="list-header">
                <ul layout="row">
                    <li v-if="hasCheckbox">
                        <checkbox-component v-model="allChecked"></checkbox-component>
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
                                <checkbox-component v-model="item.checked"></checkbox-component>
                            </div>
                            <div v-if="hasIndex" class="item-column list-index">
                                <i class="dot-status"></i>
                                {{index+1}}
                            </div>
                            <div class="item-column" v-for="header in headers" :flex="header.flex">
                                {{item[header.prop].toString()}}
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </slot>
    </div>
</template>

<script>
import CheckboxComponent from '../common/checkbox.component';

export default {
    name: 'list-component',
    props: {
        headers: {
            type: Array
        },
        list: {
            type: Array
        },
        hasCheckbox: {
            type: [Boolean, String],
            default: false
        },
        hasIndex: {
            type: [Boolean, String],
            default: false
        }
    },
    data() {
        return {
            allChecked: false
        }
    },
    components: {
        CheckboxComponent
    },
    methods: {
    }
}
</script>

<style lang="scss" scoped>
.list-component {
    .list-index {
        width: 40px;
    }
    .list-header {
        background: #75bb00;
        color: #fff;
        ul li {
            padding: 3px 5px;
        }
    }
    .list-body {
        ul li {
            border-bottom: 1px solid #d2d2d2;
            color: #333;
            font-size: 12px;
            .item-column {
                padding: 3px 5px;
                .dot-status {
                    width: 8px;
                    height: 8px;
                    background-color: #4e92df;
                    display: inline-block;
                    border-radius: 50%;
                }
            }
        }
    }
}
</style>
