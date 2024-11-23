<template>
    <div class="content-wrapper">
        <div class="title-wrappper">
            <h2 class="title" v-html="title"></h2>
        </div>

        <p  class="content-text-info">{{infoText}}</p>
        <a-input v-model:value="textFieldId" placeholder="휴대폰 번호" />
        <div class="check-code-input-box">
            <a-input v-model:value="textFieldCode" placeholder="인증코드 입력" />
            <span>{{time.m}}분 {{time.s}}초</span>
        </div>
        <div class="btn-set submit-bt-style">
            <a-button :disabled="disabled" @click="modalOpen">전송</a-button>
        </div>
        <a-modal modal v-model:open="ModalShow" title="" cancelText="싫어" @ok="handleOk">
            <p class="modal-title">등록한 이름 또는 휴대폰 번호가 일치하지 않습니다.</p>
            <p class="modal-content">등록정보 확인 및 비밀번호 재설정 실패 관련 안내는 02-2057-2678로 문의 바랍니다. </p>
            <template #footer>
                <a-button class="width100per" @click="modalClose">확인</a-button>
            </template>
        </a-modal>

        
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const title = ref("휴대폰으로 <br /> WellaU 가입하기");
    const infoText = ref("휴대폰 번호를 입력해주세요.");
    const textFieldId = ref("");
    const textFieldCode = ref("");
    const disabled = ref(false);
    const time = ref({
                m : 3,
                s : 0,
    })

    const ModalShow = ref(false);

    const modalOpen = ()=>{
        ModalShow.value = true;
    }
    const modalClose = ()=>{
        ModalShow.value = false;
    }

</script>
<style type="scss" scoped>
    .middle-input{
        margin:10rem 0;
    }
    .submit-bt-style{
        margin-top:40rem;
    }
</style>