<template>
  <div id="mobile-app">
    <div class="app-body">
        <router-view></router-view>
    </div>
    <div class="app-foot fs-12" layout="row" layout-align="start center">
        <div flex="25" layout="column" layout-align="center center" @click="tabClick(0)" v-bind:class="{ active: tabIndex==0 }">
            <div><i class="fa fa-bank fs-16"></i></div>
            <div>发现</div>
        </div>
        <div flex="25" layout="column" layout-align="center center" @click="tabClick(1)" v-bind:class="{ active: tabIndex==1 }">
            <div><i class="fa fa-bookmark-o fs-16"></i></div>
            <div>发布</div>
        </div>
        <div flex="25" layout="column" layout-align="center center" @click="tabClick(2)" v-bind:class="{ active: tabIndex==2 }">
            <div><i class="fa fa-address-book-o fs-16"></i></div>
            <div>好友</div>
        </div>
        <div flex="25" layout="column" layout-align="center center" @click="tabClick(3)" v-bind:class="{ active: tabIndex==3 }">
            <div><i class="fa fa-user-o fs-16"></i></div>
            <div>我的</div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data(){
    return {
        tabIndex:0
    };
  },
  methods:{
    tabClick(index){
        this.tabIndex = index;
        switch(this.tabIndex){
            case 0:
                this.$router.push("/index");
                break;
            case 1:
                break;
            case 2:
                break;
            case 3:
                this.$router.push("/login");
                break;
        }
    }
  },
  components: {
  }
}
</script>

<style lang="scss">
    @import './styles/variables';
    #mobile-app{
        width:100vw;
        height:100vh;
        .app-body{
            min-height:calc(100% - 50px);
            overflow-x:hidden;
            //overflow-y:auto;
        }
        .app-foot{
            border-top:1px solid $border-color;
            position:fixed;
            bottom:0px;
            left:0px;
            width:100vw;
            background-color:$tab-bg;
            height:50px;
            .active{
                color:#1cab1a;
            }
        }
    }
</style>
