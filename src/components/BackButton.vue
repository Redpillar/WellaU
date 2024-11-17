<template>
    <div class="BackBtnWrapper">
        <button @click="click">리스트 페이지 이동</button>
    </div>
</template>
<script>
    export default {
        name : "BackButton",
        components : {},
        props : {},
        computed : {},
        data(){return{}},
        created(){},
        mounted(){},
        methods : {
            click(){
                this.$router.push("/")
            }
        },
    }
</script>
<style type="scss" scoped>
    .BackBtnWrapper{
        position:fixed;
        top:0%;
        right:10%;
        &> button{
            height:50rem;
            padding:5rem;
            font-size:14rem;
            font-weight:bold;
            color:#fff;
            border-radius:5rem;
            background:black;
        }
    }
</style>