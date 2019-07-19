//* actions 中无法直接修改数据，需要通过 mutations 修改数据
//* 执行异步操作是它存在的意义。
export default{
  axset:function(context,obj){
      //*执行异步操作

      //* 调用 mutations 中的方法修改 state
      context.commit("xSet",obj);
   }
}