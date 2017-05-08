 <template>
   <div id="sign-component">
    <video v-if="showVideo" class="bg-video" autoplay loop="loop" autobuffer="autobuffer" preload="auto" oncontextmenu="return false" 
    src="./static/videos/LookoutTower_GrandCanyon_GettyRM-606345549_1080_HD_ZH-CN.mp4">
    您的浏览器不支持视频</video>
    <router-view></router-view>
   </div>
 </template>

 <script>
  export default {
   data(){
     return {
      showVideo:true
     }
   }
 }
 </script>

 <!-- Add "scoped" attribute to limit CSS to this component only -->
 <style scoped lang="scss">
 #sign-component{
  height: 100vh;
    width: 100%;
    background-image: url('../assets/images/LookoutTower_GrandCanyon_FF_768_HD_ZH-CN727571233.jpg');
    background-color: #000;
    background-repeat: no-repeat;
    background-size: cover;
    overflow:hidden;
    .banner {
        height: 90px;
        padding: 15px 0;
        background-color: rgba(0, 0, 0, 0.1);
        text-align: center;
    }
    .bg-video {
        width: 100%;
    }
    .bg-image{
        width: 100%;
        position: absolute;
        left: 0px;
        top: 0px;
    }
 }
 </style>
