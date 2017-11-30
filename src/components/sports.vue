<template>
   <div>{{title}} <a href="#/hot">转到 热点</a></div>
</template>
<script>
export default {
  name:'sports',
  data() {
     return {
       title:'体育'
     }
  },
  created(){
    console.log('sports')
  }
}
</script>


<style>

</style>