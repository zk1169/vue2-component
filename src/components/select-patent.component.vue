 <template>
    <div class="select-patent-component">
        <div class="select-patent-header">
            <span class="selected-count">{{selectedList.length}}</span>
            &nbsp;条已勾选
        </div>
        <div class="select-patent-body">
            <ul>
                <li class="hand" @click="exportOut">导出</li>
                <li class="hand" @click="exportOut">添加到工作空间</li>
                <li class="hand" @click="exportOut">提取化学结构式</li>
            </ul>
            <div class="hand cancel-text text-right" @click="cancelSelect">取消全部勾选</div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        selected: {
            type: Array
        }
    },
    data() {
        return {
            selectedList: this.selected || []
        }
    },
    methods: {
        cancelSelect() {
            this.$emit('cancelSelect');
        },
        exportOut() {
            if (this.selectedList) {
                this.selectedList.forEach((item, index) => {
                    console.log(index + ":PATENT_ID=" + item.PATENT_ID);
                })
            }
            this.$toast({
                message: '请在devtools的console里查看',
                type: 'info'
            });
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/variables';
.select-patent-component {
    .select-patent-header {
        .selected-count {
            font-weight: 700;
            font-size: 22px;
        }
        height: 36px;
        padding: 0 10px;
        line-height: 39px;
        color: #fff;
        background: $patsnap-color;
    }
    .select-patent-body {
        color: #06c;
        font-size: 12px;
        ul {
            border-bottom: 1px solid #d2d2d2;
            padding: 8px 10px;
        }
        .cancel-text {
            padding: 10px;
        }
    }
}
</style>
