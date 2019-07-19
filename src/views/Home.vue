<template>
  <div class="home">
    <app-header
      :title="title"
      v-on:titleChanged="updateTitle($event)"
    ></app-header>
    <div id="content">
      <h1 @click="changeName">{{X.userName}}</h1>
      <h2 @click="changeNameByAction">{{X.userName}}</h2>

      <h3 @click="changeUserName">{{XUser.name}}</h3>
      <users v-bind:users="users"></users>
    </div>
    <app-footer :title="title"></app-footer>
  </div>
</template>

<script>
import Users from "_c/Users.vue";
import Header from "_c/Header.vue";
import Footer from "_c/Footer.vue";
import store from "../store";
import { mapState,mapMutations, mapActions } from "vuex";
export default {
  store,
  name: "home",
  components: {
    Users,
    "app-header": Header,
    "app-footer": Footer
  },
  computed: {
    ...mapState(["userName"]),
    X:function(){
      return this.$store.state;
    },
    XUser:function(){ //* 使用 User 模块中的 state
      return this.$store.state.user;
    }
  },
  data() {
    return {
      title: "父组件的Title",
      users: [
        { name: "songjie", position: "student", show: false },
        { name: "songjie", position: "student", show: false },
        { name: "songjie", position: "student", show: false },
        { name: "songjie", position: "student", show: false },
        { name: "songjie", position: "student", show: false },
        { name: "songjie", position: "student", show: false },
        { name: "songjie", position: "student", show: false },
        { name: "songjie", position: "student", show: false },
        { name: "songjie", position: "student", show: false },
        { name: "songjie", position: "student", show: false }
      ]
    };
  },
  methods: {
    updateTitle(title) {
      this.title = title;
    },
     ...mapMutations(['xSet']),
     ...mapActions(['axset']),
     ...mapMutations({
       setName_User:"user/setName",//* 启用别名，防止函数的同名调用。
     }),
     //* 1. mutations 修改数据
    changeName(){
      // this.$store.commit("setUserName",{userName:"ZhangRuMeng"});

      // this.$store.commit("xSet",{userName:"zhangrumeng"}) //* 使用 mapMutations 方法之前的调用方式
      this.xSet({userName:"zhangrumeng"}) //* 使用 mapMutation 方法之后的调用方式

    },
    //* 2. actions 异步处理数据
    changeNameByAction(){
      // this.$store.dispatch("axset",{userName:"songjie and zhangrumeng"})
      this.axset({userName:"songjie & zhangrumeng"})
    },
    //* 3. 使用 modules 及 命名空间
    changeUserName(){
      // this.$store.commit("user/setName","new name");//* 如果不加 user/ 路径，则所有的 setName 函数都会被调用
      this.setName_User("new name A");
    }
  }
};
</script>
<style  scoped>
h1 {
  color: red;
}

#content {
  margin-bottom: 65px;
}
</style>