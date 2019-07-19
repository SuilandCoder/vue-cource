<template>
  <div>
    404 页面不存在，{{time}}秒后跳转首页
  </div>
</template>

<script>
import { setInterval, clearInterval } from "timers";
export default {
  created: function() {
    this.timer = setInterval(() => {
      this.time--;
      console.log(this.time);
    }, 1000)
  },
  data() {
    return {
      time: 3,
      timer:0
    };
  },
  destroyed(){
    clearInterval(this.timer);
  }
};
</script>