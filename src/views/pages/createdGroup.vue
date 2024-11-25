<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="title-wrappper">
                <h2 class="title">
                    새로운 그룹을 만들어 주세요.
                </h2>
            </div>
            <p class="content-text-info">그룹명을 입력해주세요</p>
            <a-input class="textAlignCenter wellau-input" v-model:value="textField" placeholder="그룹명" @input="textFieldInput" />
        </div>
        <div class="btn-set">
            <a-button class="wellau-btn" :disabled="btnDisabled" @click="btnClick">만들기</a-button>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { useRouter } from 'vue-router'
    const router = useRouter();
    const btnDisabled = ref(true);
    const textField = ref("");
    const  textFieldInput = ($ev)=>{
        if($ev.target.value.length > 0){
            btnDisabled.value = false;
        }else{
            btnDisabled.value = true;
        }
    }
    const btnClick = ()=>{
        router.push("/shareGroup")
    }
</script>
<style type="scss" scoped>
</style>