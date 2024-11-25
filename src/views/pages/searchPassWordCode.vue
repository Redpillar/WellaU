<template>
    <div class="content-wrapper">
        <div class="content-scroll">
            <div class="check-code-input-box">
                <a-input v-model:value="textFieldCode" class="wellau-input" placeholder="인증코드 입력" />
                <span>{{time.m}}분 {{time.s}}초</span>
            </div>
            <div class="btn-set">
                <a-button type="primary" class="wellau-btn" :disabled="disabled">확인</a-button>
            </div>
        </div>

        
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const textFieldCode = ref("");
    const disabled = ref(false);
    const time = ref({
                m : 3,
                s : 0,
    })

</script>
<style type="scss" scoped>
    .check-code-input-box{
        margin-top:110rem;
    }
</style>