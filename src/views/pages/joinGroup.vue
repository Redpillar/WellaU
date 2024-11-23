<template>
    <div class="content-wrapper onePage">
        <div class="joinGroup-img">
        </div>
        <div class="btn-set">
            <a-button @click="click">그룹 참여하기</a-button>
            <a-button>새로운 그룹 생성하기</a-button>
        </div>
    </div>
</template>
<script setup>
    import { useRouter } from 'vue-router'
    const router = useRouter();
    const click = ()=>{
        router.push('/joinGroup/invite')
    }
</script>
<style type="scss" scoped>
    .joinGroup-img{
        flex:1;
        width:100%;
        height:calc(100% - 300rem);
        margin-bottom:20rem;
        background:#ddd;
    }
</style>