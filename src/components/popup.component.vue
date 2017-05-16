 <template>
    <div class="popup-component" v-on:mouseover="onMouseOver" v-on:mouseleave="onMouseLeave">
        <slot name="content">content</slot>
        <transition name="fade-in-linear">
            <div class="popup-wrap" v-if="showPupop">
                <slot name="popup">content</slot>
            </div>
        </transition>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showPupop:false
        }
    },
    methods:{
        onMouseOver(){
            this.showPupop = true;
        },
        onMouseLeave(){
            this.showPupop = false;
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../styles/mixin';
.popup-component{
    //position: relative;
    .popup-wrap{
        position: absolute;
        left:0px;
        top:30px;
        min-width:100%;
    }
}
</style>
