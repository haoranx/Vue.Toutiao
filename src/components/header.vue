<template>
   <div class="topbar-header" v-show="$store.state.showMenu">
     <img src="../assets/img/logott.png" class="logo" alt="">
   </div>
</template>
<script>
export default {
  name:'header',
  data() {
     return {
       title:'今日头条'
     }
  },
  created(){
    this.init();
  },
  methods:{
    init(){
      
    }
  }
}
</script>


<style>

.topbar-header{
    position: fixed;
    line-height: 44px;
    font-size: 20px;
    color: #fff;
    background: #d43d3d;
    height: 44px;
    top: 0px;
    width: 100%;
    z-index: 1000;
    text-align: center;
}

.logo{
  height: 20px;
  margin-top: 12px;
}

</style>