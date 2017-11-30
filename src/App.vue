<template>
  <div id="app" v-cloak>
    <v-header></v-header>
    <v-menu>
    </v-menu>
    <transition>
        <keep-alive>
          <router-view class="container"/>
        </keep-alive>
    </transition>
  </div>
</template>

<script>
import vHeader from '@/components/header'
import vMenu from '@/components/menu'
export default {
  name: 'app',  
  components: {
    vHeader,
    vMenu
  }
}
</script>

<style>
[v-cloak] {
    display: none !important;
}

#app {
  font-family: 'Microsoft YaHei', 'Helvetica', 'Arial', 'sans-serif';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  position: relative;
}

html{
  height: 100%;
  background: #fff;
  -webkit-text-size-adjust: none;
  word-break: break-word;
  font-size:16px
}

body {
  margin: 0;
  height: 100%;
}


ul {
  padding: 0;
  margin: 0;
}

li {
  list-style: none;
}

a {
    text-decoration: none;
    color: #131313;
}
.container{
  position: absolute;
  padding: 0px 15px;
  padding-top: 82px;
  height: 100%;
  width: 100%;
}
</style>
