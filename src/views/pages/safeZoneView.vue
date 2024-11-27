<template>
    <div class="content-wrapper fixedBorderTop">
        <div class="content-scroll paddingWrapper">
            <div style="padding-top:20rem;">
                <a-radio-group v-model:value="radio" class="wellau-radio-group">
                    <ProfileBox name="홍길동" :img="img1" v-for="(profile,index) in 100" :key="'profile_'+index">
                        <template #rightArea>
                            <a-radio :value="index"></a-radio>
                        </template>
                    </ProfileBox>
                </a-radio-group>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'

    /* profile */
    const img1 = ref({
        src : require('@img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })
    const radio = ref(0);
</script>
<style type="scss" scoped>
</style>