<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="title-wrappper">
                <h2 class="title">
                    아래 그룹이 맞나요?<br />
                    입장 전 그룹원들에게 공개할 내 정보를<br />
                    선택하세요
                </h2>
            </div>
            <div class="label-text-area">
                <div class="label">그룹명</div>
                <div class="text">홍길동 가족방</div>
            </div>
            <div class="label-img-text-area">
                <div class="label">그룹장</div>
                <div class="img">
                    <img :src="require('../../assets/img/dummy-profile01.jpeg')" alt="그룹장 사진입니다." />
                </div>
                <div class="text">홍길동 가족방</div>
            </div>
            <div class="title-info-style">
                <div class="float-input-area"><a-switch v-model:checked="termsChecked1" /></div>
                <div class="tit">내 프로필 공개</div>
                <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
            </div>
            <div class="title-info-style">
                <div class="float-input-area"><a-switch v-model:checked="termsChecked2" /></div>
                <div class="tit">내 연락처 공개</div>
                <div class="info">그룹원에게 내 연락처를 공개합니다. 비활성 시 그룹장을 제외한 그룹원에게 연락처가 노출되지 않으며 통화연결이 되지 않습니다.</div>
            </div>
        </div>
        <div class="btn-set">
            <a-button class="wellau-btn" :disabled="btnDisabled">참여 완료</a-button>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const termsChecked1 = ref(false);
    const termsChecked2 = ref(false);
    const btnDisabled = ref(true);
</script>
<style type="scss" scoped>
</style>