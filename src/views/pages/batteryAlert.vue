<template>
    <div class="content-wrapper full jCenter">
        <div class="content-scroll">
            <div class="setting-box-top">
                <div class="title-info-style">
                    <div class="l">
                        <div class="tit">배터리 부족 알림 설정</div>
                        <div class="info">그룹원의 배터리가 15% 이하일때 푸시가 전달돼요.</div>
                    </div>
                    <div class="r"><a-switch v-model:checked="sensingSwitch" /></div>
                </div>
                <div class="title-info-style" style="margin-top:40rem">
                    <div class="l">
                        <div class="tit">전체 선택</div>
                    </div>
                    <div class="r"><a-switch v-model:checked="allChecked" @click="allChange" /></div>
                </div>
            </div>
            <div class="setting-box-scroll">
                <ProfileBox :name="list.name" :img="list.img" v-for="(list,index) in profileList" :key="'profile_' + index">
                    <template #rightArea>
                        <a-switch v-model:checked="list.checked" @change="listRadioChange" />
                    </template>
                </ProfileBox>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'


    const img1 = ref({
        src : require('@img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })
    const img2 = ref({
        src : require('@img/dummy-profile02.jpeg'),
        alt : '김응삼 프로필 사진입니다'
    })
    const img3 = ref({
        src : require('@img/dummy-profile03.jpeg'),
        alt : '김은지 프로필 사진입니다'
    })

    const profileList = ref([
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
        {
            name : "홍길동",
            img : img1,
            checked : false,
        },
        {
            name : "김응삼",
            img : img2,
            checked : false,
        },
        {
            name : "김은지",
            img : img3,
            checked : false,
        },
    ])


    const sensingSwitch = ref(false);
    const allChecked = ref(false);

    const allChange = ()=>{
        const checked = allChecked.value ? true : false;
        profileList.value.forEach((l)=>{
            l.checked = checked;
        })
    }
    const listRadioChange = ()=>{
        let checked = true;
        for(let i=0; i<profileList.value.length; i++){
            const listChecked = profileList.value[i].checked;
            if(!listChecked){
                checked = false;
                break;
            }
        }
        allChecked.value = checked;
    }
</script>
<style type="scss" scoped>
</style>