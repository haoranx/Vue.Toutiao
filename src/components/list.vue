<template>
<div ref="listWrapper">
<div class="page">
     <router-link v-for="(item,index) in items" :key="index" class="collect_items clearfix" :to="{
                    name:'detail',
                    params:{id:item.tag_id}
                }">
                
          <h2 class="collect_title">{{item.title}}</h2>
          <img v-lazy="imgs.url" v-for="(imgs,index) in item.image_list" :key="index"  alt=""  class="fr" :style="{'padding-left':index==0?'0':'4px'}">
          <div class="name_comment">
            <span class="collect_name">{{item.media_name}}</span>
            <span class="collect_comment">{{item.comment_count}}&nbsp;评论</span>
          </div>
    </router-link>
</div>
</div>
</template>
<script>
import api from "../api"
import BScroll from 'better-scroll'
export default {
  name: "list",
  props: ["type"],
  data() {
    return {
      title: "这就是列表",
      items: []
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      this.getList();
    },
    initScroll() {
      if (!this.listScroll) {
        this.listScroll = new BScroll(this.$refs.listWrapper,{click:true});
      } else {
        this.listScroll.refresh();
      }
    },
    getList() {
      var _self =this;
      switch (this.type) {
        case "recommend":
          this.$http.get(api.getData(this.type)).then(res => {

            if(res.status==200){
              res.data.data.forEach(element => {
                _self.items.push(element);
              });
            }

            this.$nextTick(() => {
              this.initScroll();
            });
            
          }); 
      }
      
    }
  }
};
</script>


<style lang="less" scoped>
.page{
  position: relative;
}
.collect_items{
  display: block;
  color: #222;
  min-height: 60px;
  padding: 10px 0;
}
.collect_title{
  font-weight: 400;
}
.name_comment{
  color: #999;
}
.fr{
  width: 33.3%;
  // padding-left: 4px;
} 
h2{
  font-size: 17px;
}


#collect {
    .collect-header {
        background: #fff;
        box-shadow: 0 1px #ccc;
        .back {
            line-height: 1.2rem;
            margin-left: 0.3rem;
        }
        a {
            font-size: 16px;
            font-weight: bold;
            display: inline-block;
            width: 1.8rem;
            margin-right: 0.3rem;
        }
        a.router-link-active {
            position: relative;
            &::after {
                content: "";
                box-sizing: border-box;
                width: 100%;
                position: absolute;
                left: 0;
                bottom: -1px;
                border-top: 4px solid #d43d3d;
                @media screen and (-webkit-min-device-pixel-ratio: 3) {
                    transform: scaleY(0.33333);
                }
                @media screen and (-webkit-min-device-pixel-ratio: 2) {
                    transform: scaleY(0.5);
                }
            }
        }
    }
    .collect_content {
        margin-top: 1.3rem;
        margin-bottom: 1.8rem;
        .con {
            width: 94%;
            margin: 0 auto;
            position: relative;
            .collect_items {
                display: block;
                border-bottom: 1px solid #d43d3d;
                padding: 0.3rem 0;
                .collect_title {
                    font-size: 14px;
                    font-weight: bold;
                    color: #000;
                    margin-right: 3.4rem;
                }
                img {
                    width: 3rem;
                }
                .name_comment {
                    margin-top: 0.6rem;
                    font-size: 12px;
                    color: #000;
                    .collect_name {
                        margin-right: 0.2rem;
                    }
                    .collect_comment {
                        }
                }
            }
        }
    }
}
</style>