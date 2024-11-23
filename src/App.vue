<template>
  <div class="app-wrapper" :class="[{map:map}]">
    <BackButton v-if="backBtnShow" />
    <Header-vue v-if="haderShow"
      type = "type2"
      :value="headerData"
      @headerChangeEv="headerChangeEv"
      @clickNextEvent="clickNextEvent"
      @alertIconClick="alertIconClick"
      @groupClicEv1="groupClicEv1"
      @groupClicEv2="groupClicEv2"
      @maxInputEvent="maxInputEvent"
      @titleClick="titleClick"
    >
      <template #title>
        {{ headerText }}
      </template>  
    </Header-vue>
    <div id="content" :page="pageStatus">
      <router-view />
    </div>
  </div>
</template>

<script>
import {ref} from 'vue'
import BackButton from './components/BackButton'
export default {
  name: 'App',
  props : {},
  setup(){
    const headerText = ref("");
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
      let temp = false;
      if(this.pageStatus === "login" || this.pageStatus === "groupMain"){
        temp = true;
      }
      return temp;
    },
    haderShow(){
      let temp = true;
      if(this.pageStatus === "listPage" || this.pageStatus === "login"){
        temp = false
      }
      return temp;
    }
  },
  data : ()=>{
    return {
      checked : true,
      headerData : {
        headerShow : true,
        type : 'type1',
        like : true,
        alert : 10,
        popShow : true,
        inputVal : "",
        maxlength : 20,
        backShow : false,
      },
    }
  },
  created(){},
  mounted(){
    this.checkePath(this.pageStatus);
  },
  methods : {
    // 즐겨 찾기 클릭 이벤트
    headerChangeEv(data){
      console.log(data);
      this.headerData.like = data.like;
    },
    // 계속하기 클릭 이벤트
    clickNextEvent(){
      console.log("clickNextEvent !!!!")
    },
    // 알림 아이콘 클릭
    alertIconClick(){
      console.log("alertIconClick !!!!")
    },
    // 그룹아이콘 클릭1
    groupClicEv1(){
      console.log("groupClicEv1 !!!!")
    },
    // 그룹아이콘 클릭2
    groupClicEv2(){
      console.log("groupClicEv2 !!!!")
    },
    // 안심존 이름을 입력하세요 input enter event
    maxInputEvent(val){
      console.log("maxInputEvent : ",val)
    },
    // 헤더 타이틀 클릭 이벤트
    titleClick(){
      console.log("titleClick");
    },
    handleChange(sel){
      console.log("sel : ",sel)
      this.headerData.type = sel;
    },
    checkePath(path){
      switch (path){
        case "groupMainFirst" :
          this.headerData.type = "type6";
          this.headerText = "";
          break;
        case "groupMain" :
          this.headerData.type = "type5";
          this.headerText = "그룹1";
          break;
        default : 
          this.headerData.type = "type1";
          this.headerText = "";
          break;
      }
    }
  },
  watch : {
    $route(to) {
      let path = (to.fullPath.replace(/(^\/)/,'') === "")?"listPage":to.fullPath.replace(/(^\/)/,'');
      this.$store.state.pageStatus = path;
    },
    pageStatus(n,o){
      if(n !== o) this.checkePath(n);
    },
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height:100%;
}
.app-wrapper{
  display:flex;
  flex-direction:column;
  height:100%;
  #content{
    flex:1;
    height:100%;
    &[page=listPage]{
      overflow:auto;
    }
  }
}
</style>
