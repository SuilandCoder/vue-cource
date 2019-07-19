export default{
  //* xSet是一个通用方法 可以修改state中的所有数据。
  xSet:function(state,obj){
    function _set(obj){
      for(var key in obj){
        if(typeof key === 'object'){//* 只考虑了是对象的情况，还有数组等其他情况
          _set(obj[key])
        }else{
          state[key] = obj[key]
        }
      }
    }

    _set(obj);
  },

  setUserName(state,val){
    state.userName = "修改后的名字" + val.userName;
  }
}