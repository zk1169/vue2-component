 <template>
  <div class="zk-popover" v-on:mouseover="onMouseOver" v-on:mouseleave="onMouseLeave">
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
  name: 'zk-popover',
  data() {
    return {
      showPupop: false
    }
  },
  methods: {
    onMouseOver() {
      this.showPupop = true;
    },
    onMouseLeave() {
      this.showPupop = false;
    }
  }
}
</script>
