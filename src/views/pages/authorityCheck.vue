<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="title-wrappper">
                <h2 class="title" v-html="title"></h2>
            </div>
            <div class="title-info-style">
                <div class="tit">위치 권한(필수)</div>
                <div class="info">위치 권한은 그룹 내 위치 공유, 안심존 알림, 근접 알림에 필요해요.</div>
            </div>
            <div class="title-info-style">
                <div class="tit">알림 권한(필수)</div>
                <div class="info">알림 권한은 안심존 알림, 근접 알림. SOS, 비활동 감시 기능에 필요해요.</div>
            </div>
            <div class="title-info-style">
                <div class="tit">저장소 접근권한(선택)</div>
                <div class="info">저장소 권한은 프로필 사진 등록에 필요해요. </div>
            </div>
            <div class="title-info-style">
                <div class="tit">카메라 접근권한(선택)</div>
                <div class="info">카메라 권한은 프로필 사진 등록에 필요해요.</div>
            </div>
        </div>
        <div class="btn-set">
            <a-button class="wellau-btn" :disabled="disabled">가입하기</a-button>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    const title = ref("WellaU를 사용하기 위해서<br />다음와 같은 권한이 필요해요.");
    const disabled = ref(false);
</script>
<style type="scss" scoped>
</style>