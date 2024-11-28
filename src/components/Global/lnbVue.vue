<template>
    <div id="lnb" :class="(props.open) ? 'open' : 'close'">
        <div class="hidden-box">
            <div class="lnb-wrapper">
                <button class="lnb-clse-btn" @click="lnbCloseBtClick"><CloseOutlined /></button>
                <div class="lnb-profile">
                    <div class="picture">
                        <img :src="props.profile.img.src" :alt="props.profile.img.alt" />
                    </div>
                    <div class="name">
                        {{props.profile.name}}
                    </div>
                </div>
                <div class="lnb-menu">
                    <div class="lnb-menu-top">
                        <div class="menu" @click="gotoMenu('/groupManagement')">그룹 관리</div>
                        <div class="menu" @click="gotoMenu('/proximityAlertSetting')">근접알림 설정</div>
                    </div>
                    <div class="lnb-menu-both">
                        <div class="menu" @click="gotoMenu('/myProfileEditPhoto')">내 정보</div>
                        <div class="menu" @click="gotoMenu('/noticeView')">공지사항</div>
                        <div class="menu" @click="gotoMenu('/faqView')">FAQ</div>
                        <div class="menu" @click="gotoMenu('/settingView')">설정</div>
                    </div>
                </div>
                <div class="lnb-log-out" @click="modalOpen">
                    로그아웃    
                </div>
            </div>
        </div>
    </div>

    <!-- moadl -->
    <a-modal modal v-model:open="ModalShow" title="">
        <p class="modal-content">
            WellaU 서비스를 로그아웃 하시겠습니까?
        </p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button class="width100per" @click="modalClose">취소</a-button>
                <a-button class="width100per" @click="modalBtnLocation">로그아웃</a-button>
            </div>
        </template>
    </a-modal>
</template>
<script setup>
    import { ref,defineProps,defineModel } from 'vue'
    import { useRouter } from 'vue-router'
    import { CloseOutlined } from '@ant-design/icons-vue'

    const props = defineProps({
        open : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        profile : {
            type : Object,
            default : ()=>{
                return {
                    name : "홍길동",
                    img : {
                        src : require('@img/dummy-profile01.jpeg'),
                        alt : '홍길동님의 프로필 사진입니다'
                    }
                }

            }
        }
    })
    const router = useRouter();
    const model = defineModel("open")


    const lnbCloseBtClick = ()=>{
        model.value = false;
    }
    const gotoMenu = (path)=>{
        lnbCloseBtClick();
        router.push(path);
    }

    const ModalShow = ref(false);

    const modalOpen = ()=>{
        ModalShow.value = true;
    }
    const modalClose = ()=>{
        ModalShow.value = false;
    }
    const modalBtnLocation = ()=>{
        ModalShow.value = false;
    }
</script>
<style type="scss" scoped>
    #lnb{
        position:fixed;
        top:0;
        left:0;
        bottom:0;
        /* right:0; */
        z-index:1000;
        width:0;
        overflow:auto;
        &.open{
            width:100%;
            background:rgba(0,0,0,0.45);
            .hidden-box{
                right:0;
            }        
        }
    }
    .hidden-box{
        position:fixed;
        top:0;
        left:0;
        right:100%;
        bottom:0;
        transition:right ease .5s;
        overflow:hidden;
    }
    .lnb-wrapper{
        position:absolute;
        top:0;
        right:0;
        display:flex;
        flex-direction:column;
        width:calc(100vw - 50rem);
        height:100%;
        margin:0 50rem 0 0;
        overflow:auto;
        background:#fff;
    }
    .lnb-profile{
        display:flex;
        flex-direction:column;
        justify-content:center;
        align-items:center;
        height:150rem;
        background:gray;
        &> .picture{
            width:80rem;
            height:80rem;
            border-radius:50%;
            overflow:hidden;
            background:orange;
            &> img{
                width:100%;
                height:100%;
            }
        }
        &> .name{
            padding:10rem 0 0;
            font-size:16rem;
            line-height:1;
            color:#fff;
            font-weight:bold;
        }
    }
    .lnb-clse-btn{
        position:absolute;
        top:10rem;
        right:10rem;
        font-size:30rem;
        border:none;
        background:transparent;
    }
    .lnb-menu{
        flex:1;
        overflow:auto;
        padding:20rem;
        &> .lnb-menu-top{
            padding:0 0 30rem 0;
        }
        &> .lnb-menu-both{
            padding:10rem 0 0;
            border-top:1px solid #ededed;
        }
        .menu{
            display:flex;
            align-items:center;
            height:40rem;
            padding:0 0 0 10rem;
            font-size:16rem;
            line-height:1;
        }
    }
    .lnb-log-out{
        padding:10rem;
        text-align:center;
        font-size:14rem;
        line-height:1;
        color:#333;
    }
</style>