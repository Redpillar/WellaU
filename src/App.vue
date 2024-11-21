<template>
  <div class="app-wrapper">
    <Header-vue v-if="haderShow"
      type = "type2"
      :value="headerData"
      @headerChangeEv="headerChangeEv"
      @clickNextEvent="clickNextEvent"
      @alertIconClick="alertIconClick"
      @groupClicEv1="groupClicEv1"
      @groupClicEv2="groupClicEv2"
      @maxInputEvent="maxInputEvent"
    >
      <template #title>
        {{ headerText }}
      </template>  
    </Header-vue>
    <div id="content" :page="pageStatus">
      <router-view />
    </div>
    <!-- <a-button type="primary" @click="headerData.popShow = !headerData.popShow">Popup</a-button>

    {{aSelect}}
    <a-select
      ref="select"
      v-model:value="aSelect"
      @change="handleChange"
      style="width: 120px"
    >
      <a-select-option value="type1">type1</a-select-option>
      <a-select-option value="type2">type2</a-select-option>
      <a-select-option value="type3">type3</a-select-option>
      <a-select-option value="type4">type4</a-select-option>
      <a-select-option value="type5">type5</a-select-option>
      <a-select-option value="type6">type6</a-select-option>
    </a-select> -->
  </div>
</template>

<script>
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
  components: {},
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
      },
      aSelect : "type1",
    }
  },
  created(){},
  mounted(){},
  watch : {
    $route(to) {
      let path = (to.fullPath.replace(/(^\/)/,'') === "")?"listPage":to.fullPath.replace(/(^\/)/,'');
      this.$store.state.pageStatus = path;
    },
    pageStatus(n,o){
      if(n !== o){
        switch (n){
          case "pageListView" :
            this.headerData.type = "type1";
            this.headerText = "";
            break;
          case "resetPassWord" :
            this.headerData.type = "type1";
            this.headerText = "";
            break;
          default : 
            break;
        }
      }
    },
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
    handleChange(sel){
      console.log("sel : ",sel)
      this.headerData.type = sel;
    }
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
  }
}
</style>
