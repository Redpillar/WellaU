<template>
    like : {{like}}
    headerData : {{headerData}}
    <Header-vue v-if="haderShow" :value="headerData" @headerChangeEv="headerChangeEv">
      <template #title>
        {{ headerText }}
      </template>
    </Header-vue>
    <BackButton v-if="backBtnShow" />
    <div id="content" :page="pageStatus">
      <router-view />
    </div>
</template>

<script>
import BackButton from './components/BackButton';
import {ref} from 'vue'

export default {
  name: 'App',
  props : {},
  setup(){
    const headerText = ref("setup 헤더 텍스트입니다!!");
    return {
      headerText,
    }
  },
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
    },
    haderShow(){
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
      headerData : {
        type : 'type02',
        like : true,
      },
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
      this.$store.state.pageStatus = path;
    },
  },
  methods : {
    headerChangeEv(data){
      console.log(data);
      this.headerData.like = data.like;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
