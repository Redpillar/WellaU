<template>
  <div class="app-wrapper" :class="[{map:map}]">
    <BackButton v-if="backBtnShow" />
    <Header-vue v-if="haderShow"
      :value="headerData"
      @menuIconClickEv="menuIconClickEv"
      @resetIconClick="resetIconClick"
      @starIconClick="starIconClick"
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
    <!-- modal -->
    <ModalBox v-model:modalShow="modalShow" :padding="0">
      <ListSelectBox v-model:value="listSelectBoxValue" :outLine="false" :list="listSelectBoxList" @listClick="listSelectBoxListClick" @btnClick="listSelectBoxBtnClick" />
    </ModalBox>
  </div>
</template>

<script>
import BackButton from './components/BackButton'
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
      let temp = false;
      if(this.pageStatus === "login" || this.pageStatus === "groupMain" || this.pageStatus === "locationSharing" || this.pageStatus === "locationSharingDoneTime"){
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
      headerText : "",
      modalShow : false,
      listSelectBoxValue : "",
      listSelectBoxList : [
        {
            text : "가족이랑",
            value : "가족이랑",
            checked : false,
        },
        {
            text : "친구들이랑",
            value : "친구들이랑",
            checked : false,
        },
        {
            text : "그룹1",
            value : "그룹1",
            checked : false,
        },
        {
            text : "그룹2",
            value : "그룹2",
            checked : false,
        },
        {
            text : "그룹3",
            value : "그룹3",
            checked : false,
        },
        {
            text : "그룹4",
            value : "그룹4",
            checked : false,
        },
        {
            text : "그룹5",
            value : "그룹5",
            checked : false,
        },
        {
            text : "그룹6",
            value : "그룹6",
            checked : false,
        },
        {
            text : "그룹7",
            value : "그룹7",
            checked : false,
        },
      ]
    }
  },
  created(){},
  mounted(){
    this.checkePath(this.pageStatus);
  },
  methods : {
    // Type2 : 계속하기 클릭 이벤트
    clickNextEvent(){
      console.log("clickNextEvent !!!!")
    },
    // Type3 : reset Icon 클릭 이벤트
    resetIconClick(){
      console.log("reset Icon")
    },
    // Type3 : 즐겨찾기 아이콘 클릭 이벤트
    starIconClick(data){
      console.log(data);
      this.headerData.like = data.like;
    },
    // Type5 : 햄버거 메뉴 클릭
    menuIconClickEv(){
      console.log("햄버거 메뉴")
    },
    // Type5, Type6 : 알림 아이콘 클릭
    alertIconClick(){
      console.log("alertIconClick !!!!")
    },
    // Type6 : 그룹아이콘 클릭1
    groupClicEv1(){
      console.log("groupClicEv1 !!!!")
    },
    // Type6 : 그룹아이콘 클릭2
    groupClicEv2(){
      console.log("groupClicEv2 !!!!")
    },
    // 안심존 이름을 입력하세요 input enter event
    maxInputEvent(val){
      console.log("maxInputEvent : ",val)
    },
    // 헤더 타이틀 클릭 이벤트
    titleClick(){
      const path = this.$route.path 
      console.log("path : ",path)
      if(path === '/groupMain'){
        console.log("this.modalShow : ",this.modalShow)
        this.modalShow = true;
      }
    },
    handleChange(sel){
      console.log("sel : ",sel)
      this.headerData.type = sel;
    },
    checkePath(path){
      switch (path){
        case "locationSharing" :
          this.headerData.type = "type3";
          this.headerText = "live.udiya.com";
          break;
        case "locationDetail" :
          this.headerData.type = "type4";
          this.headerText = "";
          break;
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
    },
    // 모달 그룹선택 셀럭트 박스 list 클릭 이벤트
    listSelectBoxListClick(){
      console.log("this.listSelectBoxValue : ",this.listSelectBoxValue)
      const checkedList = this.listSelectBoxList.find((l)=>l.value === this.listSelectBoxValue);
      this.headerText = checkedList.value
      console.log("checkedList : ",checkedList)
      this.modalShow = false;
    },
    // 모달 그룹선택 셀럭트 박스 그룹 만들기 버튼 이번트
    listSelectBoxBtnClick(){
      this.modalShow = false;
      this.$router.push("/createdGroup")
    },
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
  overflow:auto;
  #content{
    flex:1;
    overflow:auto;
    /* &[page=listPage], &[page=GuideDesign], &[page=GuideHeader]{
      overflow:auto;
    } */
  }
}
</style>
