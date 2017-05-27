<template>
    <div class="dashboard-component" layout="row">
        <div class="dashboard-left" :class="{'dashboard-left-nav-show':menuShow}">
            <div class="left-side-top">
    
            </div>
            <div>
                <div class="text-right">
                    <span class="collapse-nav text-center" @click="menuShow=!menuShow">
                        <i class="fa fa-angle-left"></i>
                    </span>
                </div>
                <ul>
                    <li class="menu-item checked">
                        <i class="fa fa-dashboard fa-fw"></i>
                        <span v-if="menuShow" class="menu-text">Dashboard</span>
                    </li>
                    <li class="menu-item">
                        <i class="fa fa-star fa-fw"></i>
                        <span v-if="menuShow" class="menu-text">Fav</span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="dashboard-right" flex :class="{'dashboard-right-nav-show':menuShow}">
            <div class="dashboard-header" layout="row" layout-align="end center">
                <ul>
                    <li class="toolbar-item">
                        <span>Admin</span>
                    </li>
                    <li class="toolbar-item">
                        <a>
                            <i class="fa fa-sign-out"></i>
                        </a>
                    </li>
                </ul>
            </div>
            <router-view></router-view>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            menuShow: false
        }
    }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
$left-width:60px;
$left-width-large:230px;
$tool-bar-height:50px;
.dashboard-component {
    height: 100vh;
    .dashboard-left {
        overflow: hidden;
        position: fixed;
        top: 0px;
        left: 0px;
        height: 100vh;
        width: $left-width;
        background-color: #2b333d;
        color: #c5d0de;
        z-index: 101;
        transition-duration: .3s;
        .collapse-nav {
            display: inline-block;
            width: 100%;
            height: 28px;
            line-height: 28px;
            background: #474d57;
            color: #fff;
            transition-duration: .3s;
        }
        .left-side-top {
            height: 50px;
        }
        .menu-item {
            cursor: pointer;
            width: $left-width-large;
            padding: 8px 15px 8px 20px;
            .menu-text {
                display: inline-block;
                margin-left: 10px;
                width: 160px;
            }
        }
        .menu-item:hover,
        .menu-item.checked {
            background-color: #24272d;
            color: #fff;
        }
    }
    .dashboard-right {
        transition-duration: .3s;
        position: relative;
        margin-left: $left-width;
        margin-top: $tool-bar-height;
        .dashboard-header {
            z-index: 100;
            position: fixed;
            top: 0px;
            right: 0px;
            padding-right:35px;
            height: $tool-bar-height;
            width: 100%;
            background-color: #fff;
            box-shadow: 0px 0px 1px 1px rgba(0, 0, 0, 0.14), 0px 0px 2px 2px rgba(0, 0, 0, 0.098), 0px 0px 5px 1px rgba(0, 0, 0, 0.084);
            opacity: 0.9;
            .toolbar-item {
                display: inline-block;
                a {
                    color: #888;
                    font-size: 14px;
                    padding: 0;
                    background-color: #f5f5f5;
                    margin: 11px 0;
                    margin-left: 10px;
                    border-radius: 40px;
                    height: 28px;
                    width: 28px;
                    line-height: 28px;
                    text-align: center;
                    display: block;
                }
            }
        }
    }
    .dashboard-left-nav-show {
        width: $left-width-large;
        .collapse-nav {
            width: 32px;
        }
    }
    .dashboard-right-nav-show {
        margin-left: $left-width-large;
    }
}
</style>
