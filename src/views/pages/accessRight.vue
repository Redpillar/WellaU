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

    <a-modal v-model:open="ModalShow" title="">
        <p class="modal-title">위치 권한 허용</p>
        <p class="modal-content">친구들과 위치를 공유하기 위해서 위치권한을 ‘항상허용＇으로 설정해야해요</p>
        <div class="img-dummy">
        </div>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button @click="modalClose">설정으로 이동</a-button>
            </div>
        </template>
    </a-modal>
</template>
<script setup>
    import {ref} from 'vue'
    import { useRouter } from 'vue-router'
    import {FundOutlined,CommentOutlined} from '@ant-design/icons-vue'

    const router = useRouter();
    const img1 = ref({
        src : require('../../assets/img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })

    const ModalShow = ref(true);
    const modalClose = ()=>{
        ModalShow.value = false;
        router.push('/locationSharingStatus');
    }
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
    .img-dummy{
        display:flex;
        align-items:center;
        justify-content:center;
        height:300rem;
        background:gray;
        &:after{
            content:"IMG";
            font-size:20rem;
            font-weight:bold;
            color:#fff;
        }
    }
</style>