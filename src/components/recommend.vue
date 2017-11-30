<template>
      <v-list v-bind:type='type'>
      </v-list>
</template>

<script>
import vList from '@/components/list'
export default {
  name:'recommend',
  data() {
     return {
       title:'这是推荐',
       type:'recommend'
     }
  },
  created(){
    
  },
  methods:{
     init(){

     }
  },
  components:{
    vList
  }
}
</script>


<style>

</style>
