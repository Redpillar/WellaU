<template>
    <div class="content-wrapper">
        <div class="search-top-tit">
            <h2 class="title">{{title}}</h2>
        </div>

        <p  class="search-top-info">{{infoText}}</p>
        <a-input v-model:value="textFieldName" placeholder="이름" />
        <a-input v-model:value="textFieldId" class="middle-input" placeholder="휴대폰 번호" />
        <div class="check-code-input-box">
            <a-input v-model:value="textFieldCode" placeholder="인증코드 입력" />
            <span>{{time.m}}분 {{time.s}}초</span>
        </div>
        <a-button :disabled="disabled" class="submit-bt-style width100per">전송</a-button>
    </div>
</template>
<script>
    export default {
        name : "loginVue",
        props : {},
        computed : {},
        data(){return{
            title : "비밀번호 재설정",
            infoText : "문자 인증을 위한 계정 정보를 입력해주세요",
            textFieldName : "",
            textFieldId : "",
            textFieldCode : "",
            disabled : true,
            time : {
                m : 3,
                s : 0,
            }
        }},
        created(){},
        mounted(){},
        methods : {},
        watch : {},
    }
</script>
<style type="scss" scoped>
    .content-wrapper{
        display:flex;
        align-items:center;
        justify-content:flex-start;
        flex-direction:column;
        height:100%;
        padding:0 20rem;
    }
    .middle-input{
        margin:10rem 0;
    }
    .search-top-tit{
        width:100%;
        padding:30rem 0 30rem;
    }
    .search-top-info{
        width:100%;
        margin-bottom:5rem;
    }
    .submit-bt-style{
        margin-top:40rem;
    }
</style>