<template>
  <header>
    <h1 @click="changeTitle()">{{title1}} {{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'app-header',
  props:{
    title:{
      type:String,
    }
  },
  data(){
    return {
      title1:"Vue.js Demo"
    }
  },
  methods:{
    changeTitle(){
      this.$emit("titleChanged","子向父组件传值");
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
header{
  background: lightgreen;
  padding: 10px;
}

h1{
  color: #222;
  text-align: center;
}
</style>
