<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="mapArea dummy-back">
                <button class="mapBtn">
                    <FundOutlined />
                </button>
                <button class="sosBtn">
                    <CommentOutlined />
                </button>
            </div>
        </div>
        <BothBar>
            <template #content>
                <div class="both-bar-area">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동 | 13분전" :img="img1"></ProfileBox>
                </div>
                <div class="both-bar-area paddingNone">
                    <a-button type="link" class="addGroupPersonBtn">+ 그룹원 추가 하기</a-button>
                </div>
            </template>
        </BothBar>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    import {FundOutlined,CommentOutlined} from '@ant-design/icons-vue'

    const img1 = ref({
        src : require('../../assets/img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })

</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>