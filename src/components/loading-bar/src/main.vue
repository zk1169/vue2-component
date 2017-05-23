<template>
  <div class="zk-loading-bar">
    <div class="loading-bar-progress" v-bind:style="styleModel"></div>
  </div>
</template>

<script>
export default {
  name: 'zk-loading-bar',
  data() {
    return {
      width: 0,
      opacity: 0,
      //timer: null,
    }
  },
  computed: {
    styleModel: function () {
      return {
        width: this.width + '%',
        opacity: this.opacity,
      }
    }
  },
  methods: {
    start() {
      if (this.opacity == 0) {
        this.opacity = 1;
        this.width = 30;
        // this.timer = setInterval(() => {
        //     if (this.width >= 100) {
        //         this.complete();
        //     } else {
        //         this.width++;
        //     }
        // }, 300);
        this.interval();
      }
    },
    interval() {
      let timeSpan = this.width * 5 + 300;
      setTimeout(() => {
        if (this.width >= 100) {
          this.complete();
        } else {
          this.width++;
          this.interval();
        }
      }, timeSpan);
    },
    complete() {
      this.width = 100;
      this.opacity = 0;
      setTimeout(() => {
        this.width = 0;
        //clearInterval(this.timer);
        //this.timer = null;
      }, 500);
    }
  },
  beforeDestroy() {
    this.complete();
  }
}
</script>