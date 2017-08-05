<template>
    <div class="search-component">
        <div class="search-body" layout="row">
            <div class="body-right" flex>
                <div>
                    <zk-button type="primary" @click="addHotClick">新增</zk-button>
                    <br>
                    <zk-list :headers="listData.headers" :list="listData.list" :page="listData.currentPage" :hasIndex="1" @item-click="itemClick"></zk-list>
                    <div class="text-right list-page">
                        <el-pagination @current-change="pageChange" :current-page="listData.currentPage" layout="total, prev, pager, next" :total="listData.totalCount" :page-size="10">
                        </el-pagination>
                    </div>
                </div>
            </div>
        </div>
        <el-dialog title="发布热门话题" :visible="dialogVisible" :show-close="false">
            <div>
                <div class="form-item" layout="row" layout-align="start center">
                    <label flex="20">标题：</label>
                    <el-input v-model="selectModel.title"></el-input>
                </div>
                <div class="form-item" layout="row" layout-align="start center">
                    <label flex="20">内容：</label>
                    <el-input type="textarea" v-model="selectModel.content"></el-input>
                </div>
                <div layout="row" layout-wrap>
                    <div class="upload-file-wrap" v-for="(item,index) in imageFileList">
                        <img v-if="item.base64" :src="item.base64"></img>
                        <img v-else :src="'/api'+item"></img>
                        <div class="upload-file-close" @click="removeImage(index)">
                            <i class="fa fa-close"></i>
                        </div>
                    </div>
                    <div class="upload-file-wrap" v-if="!imageFileList || imageFileList.length<3">
                        <span class="center" style="font-size:40px;">+</span>
                        <input type="file" accept="image/*" v-on:change="imageFileChange($event)">
                    </div>
                </div>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogVisible = false">取 消</el-button>
                <el-button type="primary" @click="saveClick">保 存</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
import Vue from 'vue';
import {
    mapState
} from 'vuex';
import {
    getHotList, saveHotInfoBatch
} from '../services/gang-flower';
import ZkSelect from '../components/select';
import ZkButton from '../components/button';
import ZkList from '../components/list';
import ZkListHeader from '../components/list-header';
import ZkListItem from '../components/list-item';
import BugModel from '../models/bug.model';

export default {
    data() {
        return {
            loading: true,
            listData: {
                headers: [{
                    title: '标题',
                    prop: 'title',
                    flex: 20
                },
                {
                    title: '内容',
                    prop: 'content',
                    flex: 30
                },
                {
                    title: '提交时间',
                    prop: 'createTime',
                    flex: 10
                }
                ],
                list: [],
                totalCount: 0,
                currentPage: 1
            },
            listAllChecked: false,
            searchText: '',
            dialogVisible: false,
            selectModel: new BugModel(),
            imageFileList: [],
        }
    },
    components: {
        ZkList,
        ZkListHeader,
        ZkListItem,
        ZkSelect,
        ZkButton
    },
    created() {
        this.queryInit(1);
    },
    methods: {
        queryInit(page) {
            this.$root.$emit('start-loading-bar');
            return getHotList(page).subscribe(
                (res) => {
                    this.listData.list = res.rows;
                    this.listData.totalCount = res.totalCount;
                    this.listData.currentPage = Number(page);
                    this.$root.$emit('complete-loading-bar');
                },
                (error) => {
                    this.$root.$emit('complete-loading-bar');
                    this.$toast({
                        title: 'error',
                        message: error.message,
                        type: 'error'
                    });
                }
            );
        },
        pageChange(page) {
            this.queryInit(page);
        },
        itemClick(options) {
            let index = options.index;
            this.selectModel = this.listData.list[index];
            this.imageFileList = this.selectModel.imageList;
            this.dialogVisible = true;
        },
        addHotClick() {
            this.selectModel = new BugModel();
            this.dialogVisible = true;
        },
        saveClick() {
            this.$root.$emit('start-loading-bar');
            saveHotInfoBatch(this.selectModel.title,this.selectModel.content,this.imageFileList).subscribe(
                (res) => {
                    this.$root.$emit('complete-loading-bar');
                    this.dialogVisible = false;
                    this.queryInit(this.listData.currentPage);
                },
                (error) => {
                    this.$root.$emit('complete-loading-bar');
                    this.$toast({
                        title: 'error',
                        message: error.message,
                        type: 'error'
                    });
                }
            );
        },
        imageFileChange(ev) {
            let files = ev.target.files;
            for (var i = 0; i < files.length; i++) {
                let file = files[i];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                // on reader load somthing...
                reader.onload = () => {
                    // Make a fileInfo Object
                    if (file.size >= 1024 * 1024 * 3) {
                        this.$toast({
                            message: '上传的图片大小应在3MB以下',
                            position: 'bottom',
                            duration: 3000
                        });
                        return;
                    }
                    let fileInfo = {
                        name: file.name,
                        type: file.type,
                        size: Math.round(file.size / 1000) + ' kB',
                        base64: reader.result,
                        file: file
                    };
                    this.imageFileList.push(fileInfo);
                } // reader.onload
            }
        },
        fileChange(ev) {
            let files = ev.target.files;
            for (var i = 0; i < files.length; i++) {
                let file = files[i];
                let reader = new FileReader();
                reader.readAsDataURL(file);
                // on reader load somthing...
                reader.onload = () => {
                    // Make a fileInfo Object
                    if (file.size >= 1024 * 1024 * 10) {
                        this.$toast({
                            message: '上传的图片大小应在10MB以下',
                            position: 'bottom',
                            duration: 3000
                        });
                        return;
                    }
                    let fileInfo = {
                        name: file.name,
                        type: file.type,
                        size: Math.round(file.size / 1000) + ' kB',
                        base64: reader.result,
                        file: file
                    };
                    this.fileList.push(fileInfo);
                } // reader.onload
            }
        },
        removeImage(index) {
            this.imageFileList.splice(index, 1);
        },
    },
    computed: {
        ...mapState([
            'userInfo'
        ])
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import '../styles/variables';
.search-component {
    height: 100vh;
    min-width: 1280px;
}

.search-header {
    border-bottom: 1px solid #d2d2d2;
    padding: 8px;
    padding-left: 25px;
}

.search-body {
    margin: 30px 20px 30px 10px;
    .body-right {
        margin-left: 15px;
    }
}

.form-item {
    margin: 10px;
}

.upload-file-wrap {
    margin-left: 16px;
    position: relative;
    width: 80px;
    height: 80px;
    border: 1px solid $border-color;
    input[type="file"] {
        opacity: 0;
        position: absolute;
        left: 0px;
        top: 0px;
        height: 100%;
        width: 100%;
        cursor:pointer;
    }
    span {
        color: $border-color;
    }
    img {
        width: 80px;
        height: 80px;
    }
    .upload-file-close {
        position: absolute;
        right: -7px;
        top: -13px;
        font-size: 20px;
        color: firebrick;
    }
}
</style>