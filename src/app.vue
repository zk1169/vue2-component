<template>
  <div id="app">
    <router-view></router-view>
    <zk-loading v-show="showLoading"></zk-loading>
    <zk-loading-bar ref="loadingBar"></zk-loading-bar>
  </div>
</template>

<script>
import ZkLoading from './components/loading';
import ZkLoadingBar from './components/loading-bar';
export default {
  name: 'app',
  data(){
    return {
      showLoading: false, //显示加载动画
      loadingBarOption:null
    };
  },
  components: {
      ZkLoadingBar,
      ZkLoading
  },
  mounted(){
    this.$root.$on('show-loading',(loading)=>{
      this.showLoading = loading;
    });
    this.$root.$on('start-loading-bar',(options)=>{
      this.$refs.loadingBar.start();
    });
    this.$root.$on('complete-loading-bar',(options)=>{
      this.$refs.loadingBar.complete();
    });
  }
}
</script>

<style lang="scss">

</style>
