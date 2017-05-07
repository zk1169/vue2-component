<template>
    <div class="send-message-component" v-title="'发布'">
        <header-top :goBack="true">
            <div slot="left">
                <span class="fs-14">取消</span>
            </div>
            <div slot="right" @click="sendClick">
                发布
            </div>
        </header-top>
        <div>
            <textarea class="fs-14" rows="10" placeholder="分享新鲜事" v-model="content"></textarea>
        </div>
        <div layout="row" layout-wrap>
            <div class="upload-file-wrap" v-for="item in fileList">
                <img :src="item.base64"></img>
            </div>
            <div class="upload-file-wrap" v-if="fileList.length==0">
                <span class="center" style="font-size:40px;">+</span>
                <input type="file" accept="image/*" v-on:change="fileChange($event)">
            </div>
        </div>
    </div>
</template>

<script>
    import headerTop from '../../m-components/header';
    import {
        sendBlog
    } from '../../services/api.product';
    
    export default {
        data() {
            return {
                fileList: [],
                content:null
            }
        },
        components: {
            headerTop
        },
        created() {
            this.$parent.tabIndex = 2;
        },
        mounted() {
    
        },
        methods: {
            fileChange(ev) {
                let files = ev.target.files;
                for (var i = 0; i < files.length; i++) {
                    let file = files[i];
                    let reader = new FileReader();
                    reader.readAsDataURL(file);
                    // on reader load somthing...
                    reader.onload = () => {
                        // Make a fileInfo Object
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
            sendClick() {
                this.$indicator.open();
                let form = new FormData();
                form.append('file', this.fileList[0].file);
                form.append('content',this.content);
                sendBlog(form)
                    .subscribe(
                        (res) => {
                            this.$indicator.close();
                            this.$router.push('/send-index');
                        },
                        (error) => {
                            this.$indicator.close();
                            this.$toast({
                                message: error.message,
                                position: 'bottom',
                                duration: 5000
                            });
                        }
                    );
            }
        }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../styles/variables';
    .send-message-component {
        background-color: #fff;
        textarea {
            width: 100%;
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
            }
            span {
                color: $border-color;
            }
            img {
                width: 80px;
                height: 80px;
            }
        }
    }
</style>
