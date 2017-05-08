<template>
  <div id="app">
    <router-view></router-view>
    <loading v-show="showLoading"></loading>
    <loading-bar ref="loadingBar"></loading-bar>
  </div>
</template>

<script>
import loading from './components/loading';
import loadingBar from './components/loading-bar';
export default {
  name: 'app',
  data(){
    return {
      showLoading: false, //显示加载动画
      loadingBarOption:null
    };
  },
  components: {
      loadingBar,
      loading,
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
