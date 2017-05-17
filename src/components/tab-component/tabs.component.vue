 <template>
    <div class="tabs-component">
        <div class="tab-header">
            <ul>
                <li v-for="(tab, index) in tabs" :class="{'active':activeTabIndex===index}" @click="tabHeaderClick(index)">
                    <span class="title">
                        {{tab.title}}
                    </span>
                </li>
            </ul>
        </div>
        <div class="tab-content">
            <slot>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'tabs-component',
    props: {
        /***
        * Index of the initial tab to display
        */
        activeIndex: {
            type: Number,
            default: 0
        }
    },
    data() {
        return {
            activeTabIndex:this.activeIndex,
            tabs: []
        }
    },
    mounted() {
        this.tabs = this.$children.filter((comp) => comp.$options.name === 'tab-component');
        if (this.tabs.length > 0) {
            this.tabs[this.activeTabIndex].active = true;
        }
    },
    methods:{
        tabHeaderClick(index){
            this.tabs[this.activeTabIndex].active = false;
            this.activeTabIndex=index;
            this.tabs[this.activeTabIndex].active = true;
        }
    }
}
</script>

<style lang="scss" scoped>
.tabs-component {
    .tab-header {
        border-bottom: 1px solid #d2d2d2;
        ul li {
            display: inline-block;
            padding: 6px 10px;
            border: 1px solid #d2d2d2;
            background: #f5f5f5;
            color: #000;
            border-radius: 3px 3px 0 0;
            margin-bottom:-1px;
            cursor: pointer;
            margin-left:10px;
        }
        li.active{
            background: #fff;
            border-bottom: 1px solid #fff;
        }
    }
}
</style>
