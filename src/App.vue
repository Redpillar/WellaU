<template>
    <BackButton v-if="backBtnShow" />
    <div id="content" :page="pageStatus">
      <router-view />
    </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import BackButton from './components/BackButton';
import './assets/css/common.css';

export default {
  name: 'App',
  props : {},
  components: {
    BackButton
  },
  computed : {
    pageStatus(){
      return this.$store.state.pageStatus
    },
    backBtnShow(){
      let temp = true;
      if(this.pageStatus === "listPage"){
        temp = false
      }
      return temp;
    }
  },

  data : ()=>{
    return {
      checked : true,
      css : {
        token: {
          Button: {
            colorPrimary : 'skyblue',
            borderRadius : 4,
            fontColor : 'red',
          },
          Radio : {
            colorPrimary : 'green',
          },
        },
      }
    }
  },
  created(){},
  mounted(){},
  watch : {
    $route(to) {
      let path = (to.fullPath.replace(/(^\/)/,'') === "")?"listPage":to.fullPath.replace(/(^\/)/,'');
      console.log("path : ",path)
      this.$store.state.pageStatus = path;
    },
    pageStatus(){
      console.log("this.pageStatus : ",this.pageStatus)
    }
  },
  methods : {},
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
