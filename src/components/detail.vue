<template>
   <div>
     <header-bar class="detail-header">
        <div slot="detail-header">
            {{title}} 
            <Icon type="ios-arrow-back" size="28" color="#000" class="fl back" ></Icon>
            <Icon type="share" size="28" color="#000" class="fr share"></Icon>
        </div>
    </header-bar>
     <article class="article padding-side"><div class="article__header new-style-test-article__header"><h1 class="article__title">军报评张阳畏罪自杀：以可耻的方式结束一生！</h1><div class="new-style-test-article-author"><span class="avatar new-style-test-avatar"><img src="https://p3.pstatp.com/thumb/bc20000b91968707dab" class="avatar__image" style="transition: opacity 200ms ease; opacity: 1;"><span class="avatar__mask"></span></span><span style="display: inline-block; margin-left: 10px;"><div><span class="new-style-test-article-author-name">央视网新闻</span><img class="new-style-test-article-author-toutiaohao" src="//s3b.pstatp.com/growth/mobile_detail/image/toutiaohao_tag.1vygyFaw.svg" style="transition: opacity 200ms ease; opacity: 1;"></div><div><span class="new-style-test-article-publish-time">2小时前</span><span class="dot"></span><span class="new-style-test-article-comment">16评论</span></div></span><a href="javascript: void(0)" class="new-style-test-favor-btn">关注</a></div></div><div class="article__content" style="height: 881.5px;"><div><p><strong>央视网消息：</strong>2017年8月28日，经党中央批准，中央军委决定对中华人民共和国中央军事委员会委员、中共中央军事委员会原委员、中央军委政治工作部原主任张阳进行组织谈话，调查核实其涉郭伯雄、徐才厚等案问题线索。经调查核实，张阳严重违纪违法，涉嫌行贿受贿、巨额财产来源不明犯罪。接受组织谈话期间，张阳一直在家中居住。11月23日上午，张阳在家中自缢死亡。</p><p>钧正平工作室评论称，张阳畏罪自杀！这个曾经位高权重的上将，以这种可耻的方式结束了自己的一生。</p><p class="img-wrapper-embedded" style="width: 100%; min-height: 230.913px;"><img src="https://p3.pstatp.com/large/471800008c61d942643f" img_width="550" img_height="366" inline="0" alt="军报评张阳畏罪自杀：以可耻的方式结束一生！" onerror="javascript:errorimg.call(this);" data-index="0" data-src="https://p3.pstatp.com/large/471800008c61d942643f" style="opacity: 1;"></p><p><strong>张阳</strong></p><p>张阳出生于1951年，河北武强人，1968年入伍，从此几乎都在政工系统服役，历任基层政治处主任、团政委、炮兵一师副政委、第42集团军师政委、集团军政委。担任第42集团军政委时，张阳在改制换装和人才培养方面倾注了很多心血。2003年4月，总参谋部发布命令，广州军区某摩托化步兵师改编为机械化步兵师。这意味着，营房库房设施要改建，训练场地要重新规划，还有最重要的人才培养要跟上。该师主体是传统步兵出身，多数人对机械化装备比较陌生，张阳和第42集团军军长刘粤军到该师现场办公，确定把人才培养作为改制换装的首要任务来抓，叫响了“宁可让人才等装备，也不能让装备等人才”的口号。</p><p>2015年9月17日全军教育整改领导小组召开第五次会议，张阳出席会议并讲话，指出肃清郭伯雄、徐才厚案件影响要抓实抓深，在思想观念、思维理念、指导方式等深层次问题上下大气力挖根除弊。（文/祝新宇）</p></div></div><div class="unfold-field"><div class="unflod-field__mask"></div><a href="javascript:void(0)" class="new-style-test-unfold-text">展开阅读全文</a></div></article>
   </div>
</template>
<script>

import headerBar from './header-bar.vue'
export default {
  name:'detail',
  data() {
     return {
       title:'详情页'
     }
  },
  created(){
    this.init();
  },
  activated(){
    this.showUI();
  },
  methods:{
    init(){
      
    },
    showUI(){
      this.$store.commit('showMenu',false)
      this.$store.commit('showHeader',false)
    },
    hideUI(){
      this.$store.commit('showMenu',true)
      this.$store.commit('showHeader',true)
    }
  },
  beforeRouteLeave (to,from,next) {
    this.hideUI()
    next();
  },
  components: {
    headerBar
  }
}
</script>


<style scoped>

img{
  max-width: 100%;
}

</style>