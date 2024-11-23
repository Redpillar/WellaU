<template>
    <div class="content-wrapper">
        <div class="title-wrappper">
            <h2 class="title">{{title}}</h2>
        </div>

        <p class="content-text-info">{{infoText}}</p>
        <a-input-password v-model:value="textFieldPw" placeholder="신규 비밀번호" />
        <a-input-password v-model:value="textFieldCheckedPw" class="middle-input" placeholder="신규 비밀번호 혹인" />
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
            infoText : "신규 비밀번호를 입력해 주세요",
            textFieldPw : "",
            textFieldCheckedPw : "",
            disabled : true,
        }},
        created(){},
        mounted(){},
        methods : {},
        watch : {},
    }
</script>
<style type="scss" scoped>
    .middle-input{
        margin:10rem 0 0 0;
    }
    .submit-bt-style{
        margin-top:40rem;
    }
</style>