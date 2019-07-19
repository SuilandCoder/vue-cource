<template>
  <footer>
    <p>{{copyright}}{{title}}</p>
  </footer>
</template>

<script>
export default {
  name: "app-footer",
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      copyright: "Copyright 2019 Vue Demo"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="less">
footer {
  background: #222;
  padding: 6px;
  position: fixed;
  bottom: 0;
  width: 100%;
}

p {
  color: lightgreen;
  text-align: center;
}
</style>
