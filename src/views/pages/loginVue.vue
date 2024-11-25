<template>
    <!-- <div class="login-logo">LOGO</div> -->
    <div class="content-wrapper jCenter">
        <div class="content-scroll">
            <a-input v-model:value="textFieldId" class="wellau-input" placeholder="휴대폰 번호" />
            <a-input-password v-model:value="textFieldPw" class="wellau-input" placeholder="비밀번호" />
            <a-input-password v-model:value="textFieldPw" placeholder="비밀번호" />
            <div class="btn-set">
                <a-button type="primary" class="wellau-btn" :disabled="disabled">시작하기</a-button>
            </div>
            <div class="link-text-btn-set">
                <a-button type="link">가입하기</a-button><i class="gap-line-icon" />
                <a-button type="link">비밀번호 찾기</a-button>
            </div>
        </div>
    </div>
</template>
<script>
    export default {
        name : "loginVue",
        props : {},
        computed : {},
        data(){return{
            textFieldId : "",
            textFieldPw : "",
            disabled : false,
        }},
        created(){},
        mounted(){},
        methods : {},
        watch : {},
    }
</script>
<style type="scss" scoped>
    .login-logo{
        position:absolute;
        top:10%;
        left:10%;
        display:flex;
        align-items:center;
        justify-content:center;
        width:80rem;
        height:60rem;
        font-size:20rem;
        color:#fff;
        background:black;
    }
</style>