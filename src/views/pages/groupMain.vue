<template>
    <div class="content-wrapper child100per full">
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
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동 | 13분전" :img="img1">
                        <template #rightArea>
                            <a-switch v-model:checked="switchChecked" />
                        </template>
                    </ProfileBox>
                </div>
                <div class="both-bar-area">
                    <ProfileBox name="김응삼" conText="서울시 용산동 갈월동 | 13분전" king :img="img2"></ProfileBox>
                    <ProfileBox name="김은지" conText="서울시 용산동 갈월동 | 13분전" birthday :img="img3" style="margin-top:20rem;"></ProfileBox>
                </div>
                <div class="both-bar-area paddingNone">
                    <a-button type="link" class="addGroupPersonBtn">+ 그룹원 추가 하기</a-button>
                </div>
                <div class="title-info-style">
                    <div class="float-input-area"><a-switch v-model:checked="checked1" /></div>
                    <div class="tit">내 프로필 공개</div>
                    <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                </div>
                <input type="checkbox" />
                <div class="title-info-style">
                    <div class="float-input-area"><a-switch v-model:checked="checked2" /></div>
                    <div class="tit">내 연락처 공개</div>
                    <div class="info">그룹원에게 내 연락처를 공개합니다. 비활성 시 그룹장을 제외한 그룹원에게 연락처가 노출되지 않으며 통화연결이 되지 않습니다.</div>
                </div>
            </template>
        </BothBar>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    import {FundOutlined,CommentOutlined} from '@ant-design/icons-vue'
    const checked1 = ref(false);
    const checked2 = ref(false);
    const switchChecked = ref(false);

    const img1 = ref({
        src : require('../../assets/img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })
    const img2 = ref({
        src : require('../../assets/img/dummy-profile02.jpeg'),
        alt : '김응삼 프로필 사진입니다'
    })
    const img3 = ref({
        src : require('../../assets/img/dummy-profile03.jpeg'),
        alt : '김은지 프로필 사진입니다'
    })

</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(../../assets/img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>