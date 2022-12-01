import Vue from 'vue'
var globalValue= {
  install(Vue){
    Vue.prototype.globalValue = {

     val:10,
     setVal:function(val){
       this.val=val;
     }
    };

  }
}
Vue.use(globalValue);
