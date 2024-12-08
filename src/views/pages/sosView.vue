<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="title-center-type">SOS</div>
                <div class="title-center-type-info">그룹원에게 내 위치를 전송합니다.</div>
                <div class="circle-number-box">
                    9
                </div>
                <div class="circle-number-box-info">
                    숫자를 탭하면 즉시 전송됩니다.
                </div>
                <div class="radio-list-style-box">
                    <a-radio-group v-model:value="radio" @change="change" class="wellau-radio-group">
                        <a-radio :value="0">긴급 상황입니다.</a-radio>
                        <a-radio :value="1">010-000-0000 번호로 연락 주세요.</a-radio>
                        <a-radio :value="2">다쳤어요, 도움이 필요해요.</a-radio>
                        <a-radio :value="3"><div class="click-dummy-box" v-if="radio !== 3"></div><a-input class="wellau-input" v-model:value="textField" placeholder="10자 이내" :maxlength="10" :disabled="disabled" @input="textFieldInput" ref="inputRef" /></a-radio>
                    </a-radio-group>
                </div>
                <div class="both-text-info">
                    <b>전송할 메시지가 있을 시 선택하세요</b><br />
                    (현재 해당 그룹 연락처 미공개 상태입니다)
                </div>
            </div>
        </div>
        <div class="btn-set horizontal">
            <a-button class="wellau-btn">즉시정송</a-button>
            <a-button class="wellau-btn">취소</a-button>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const radio = ref(0);
    const textField = ref("");
    const disabled = ref(true);
    const change = ($ev)=>{
        console.log("$ev : ",$ev.target.value)
        const val = $ev.target.value;
        if(val === 3){
            disabled.value = false;
            setTimeout(()=>{
                inputRef.value.focus();
            },250)
        }else{
            disabled.value = true
        }
    }
    const inputRef = ref();
    const textFieldInput = ()=>{}
</script>
<style type="scss" scoped>
</style>