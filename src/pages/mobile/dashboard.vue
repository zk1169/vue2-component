<template>
    <div class="m-dashboard-component">
        <router-view></router-view>
    </div>
</template>
<script>
export default {
    data() {
        return {}
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    @import '../../styles/variables';
    .m-dashboard-component{
        min-height:100vh;
        background-color:$bg-color;
    }
</style>
