<template>
     <div class="menu" v-show="$store.state.showMenu">
       <ul>
         <li v-for="(item,index) in menuItems" :key="index" @click="go(item.name)" :class="{'active':(selected==item.name)}">{{item.text}}</li>
       </ul>
     </div>
</template>
<script>
import BScroll from "better-scroll";

export default {
  name: "menu",
  data() {
    return {
      title: "今日头条",
      selected:'推荐',
      menuItems: [
        {
          icon: "1",
          text: "推荐",
          name:'recommend',
          order: "2"
        },{
          icon: "1",
          text: "视频",
          name:'videos',
          order: "2"
        },{
          icon: "1",
          text: "热点",
          name:'hot',
          order: "2"
        },{
          icon: "1",
          text: "社会",
          name:'society',
          order: "2"
        },{
          icon: "1",
          text: "汽车",
          name:'cars',
          order: "2"
        },{
          icon: "1",
          text: "房产",
          name:'',
          order: "2"
        },{
          icon: "1",
          text: "体育",
          name:'sports',
          order: "2"
        }
      ]
    };
  },
  created() {
    this.init();
  },
  methods: {
    go(dest) {
      var d='';
      this.selected=dest;
      this.$router.options.routes.forEach(element => {
          if(dest==element.name){
            d=element.path;
          }
      });
      if(d){
        this.$router.push(d);
      }
    },
    init() {
    }
  }
};
</script>


<style >

.menu{
  top:44px;
  height: 38px;
  line-height: 38px;
  position: fixed;
  z-index: 5;
  width: 100%;
  overflow: auto;
  white-space:nowrap;
}
.menu ul{
  white-space:nowrap;
  height: 38px;
}
.menu ul li{
  list-style: none;
  display: inline;
  float: none;
  font-size: 17px;
  padding: 8px 12px;
  background: #f4f5f6;
}

.active{
  color: #f85959;
}

</style>