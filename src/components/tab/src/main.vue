 <template>
    <div class="zk-tab">
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
    name: 'zk-tab',
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
        this.tabs = this.$children.filter((comp) => comp.$options.name === 'zk-tab-item');
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