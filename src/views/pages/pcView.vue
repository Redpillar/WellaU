<template>
    <div class="content-wrapper full">
        <div class="content-scroll">
            <div class="mapArea dummy-back">
                <MapPin type="pie" :photo="photo" :per="per" style="position:absolute; top:50%; left:50%;" />
                <!-- pop 알림 & 위치기록  -->
                <div class="floating-right-top-box" v-if="floatPopBoxOpen">
                    <div class="floating-right-top-con-wrapper">
                        <div class="floating-right-top-con">
                            <!-- 제목 -->
                            <div class="top">
                                <div class="tit">{{floatBoxType === 'alert' ? '알림목록' : '위치기록' }}</div>
                                <!-- 닫기 버튼 -->
                                <i @click="floatPopClse"><CloseOutlined /></i>
                            </div>
                            <!-- 위치 기록 시 입력폼  -->
                            <div class="middle" v-if="floatBoxType === 'record'">
                                <div class="mark-time-box">
                                    <div class="date">
                                        <i><CalendarOutlined /></i>2024년 09월 13일
                                    </div>
                                    <div class="time">
                                        <i><ClockCircleOutlined /></i>13시
                                    </div>
                                </div>
                            </div>
                            <!-- 알림 콘텐츠 -->
                            <div class="con-wrapper" v-if="floatBoxType === 'alert'">
                                <div class="con">
                                    <AlertBox :list="alertLists" />
                                </div>
                            </div>
                            <!-- STEP 콘텐츠 -->
                            <div class="con-wrapper" v-else>
                                <div class="con">
                                    <StepBox :list="stepList" :step="stepStep" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="floating-menu-box">
                    <div class="floating-menu-wrapper">
                        <div class="top">
                            <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1"></ProfileBox>
                        </div>
                        <div class="con-wrapper">
                            <div class="con">
                                <div class="btn-set horizontal">
                                    <IconButtonBox icon="battery" :disabled="bDis" :battery="iconBattery"  @click="iconButtonBoxClick" />
                                    <IconButtonBox icon="alert" :disabled="aDis"  @click="iconButtonBoxClickAlert" />
                                    <IconButtonBox icon="record" :disabled="rDis"  @click="iconButtonBoxClickRecord" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <BothBar style="display:none;">
            <template #content>
                <div class="both-bar-area">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1">
                        <template #rightArea>
                            <a-switch v-model:checked="switchChecked" />
                        </template>
                    </ProfileBox>
                </div>
                <div class="both-bar-area">
                    <ProfileBox name="김응삼" conText="서울시 용산동 갈월동" time="13분전" king :img="img2"></ProfileBox>
                    <ProfileBox name="김은지" conText="서울시 용산동 갈월동" time="13분전" birthday :img="img3"></ProfileBox>
                </div>
                <div class="both-bar-area paddingNone">
                    <a-button type="link" class="addGroupPersonBtn">+ 그룹원 추가 하기</a-button>
                </div>
                <div class="title-info-style">
                    <div class="l">
                        <div class="tit">내 프로필 공개</div>
                        <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                    </div>
                    <div class="r"><a-switch v-model:checked="checked1" /></div>
                </div>
                <div class="title-info-style">
                    <div class="l">
                        <div class="tit">내 연락처 공개</div>
                        <div class="info">그룹원에게 내 연락처를 공개합니다. 비활성 시 그룹장을 제외한 그룹원에게 연락처가 노출되지 않으며 통화연결이 되지 않습니다.</div>
                    </div>
                    <div class="r"><a-switch v-model:checked="checked2" /></div>
                </div>
            </template>
        </BothBar>
        <PcLnb v-model:open="lnbOpen" :group="group" :person="person" :friends="lnbList" @gropClick="gropClick" @logout="logout" />
    </div>

    <!-- modal -->
    <ModalBox v-model:modalShow="modalShow" :padding="0">
        <ListSelectBox v-model:value="listSelectBoxValue" title="그룹을 선택해주세요." buttonText="+ 그룹 만들기" :outLine="false" :list="listSelectBoxList" @listClick="listSelectBoxListClick" :buttonShow="false" />
    </ModalBox>
</template>
<script setup>
    import { ref } from 'vue'
    import { CloseOutlined,CalendarOutlined,ClockCircleOutlined } from '@ant-design/icons-vue'

    const checked1 = ref(false);
    const checked2 = ref(false);
    const switchChecked = ref(false);

    const img1 = ref({
        src : null,
        // src : require('@img/dummy-profile01.jpeg'),
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

    /* MAP PIN */
    const photo = ref({
        src : require('@img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })
    const per = ref(Math.floor(Math.random()*100));

    /* BUTTON */
    const iconButtonBoxClickAlert = ()=>{
        if(floatBoxType.value === 'alert' && floatPopBoxOpen.value){
            floatPopBoxOpen.value = false;
        }else{
            floatBoxType.value = "alert";
            floatPopBoxOpen.value = true;
        }
    }
    const iconButtonBoxClickRecord = ()=>{
        if(floatBoxType.value === 'record' && floatPopBoxOpen.value){
            floatPopBoxOpen.value = false;
        }else{
            floatBoxType.value = "record";
            floatPopBoxOpen.value = true;
        }
    }
    const iconButtonBoxClick = (icon)=>{
        console.log("icon : ",icon)
    }
    const bDis = ref(false)
    const aDis = ref(false)
    const rDis = ref(false)

    const iconBattery = Math.floor(Math.random() * 100);

    /* lnb */
    const lnbOpen = ref(true);

    const group = ref("그룹1");

    const person = ref({
        name : "홍길동",
        text : "서울시 용산동 갈월동 | 13분전",
        king : true,
        birthday : false,
        img : {
            // src : require('../../assets/img/dummy-profile01.jpeg'),
            src : null,
            alt : '홍길동님의 프로필 사진입니다'
        }
    })
    const lnbList = ref([]);
    const setFriends = (len)=>{
        lnbList.value.length = 0;
        for(let i=0; i<len;i++){
            const n = Math.floor(Math.random() * 3) + 1;
            const name = ["홍길동","김응삼","김은지"]
            lnbList.value.push({
                name : name[n - 1],
                text : "서울시 용산동 갈월동 | 13분전",
                king : false,
                birthday : Math.floor(Math.random() * 3) % 2 === 0 ? true : false,
                img : {
                    // src : require('../../assets/img/dummy-profile0'+n+'.jpeg'),
                    src : null,
                    alt : '홍길동님의 프로필 사진입니다'
                }
            })
        }
    }
    const len = Math.floor(Math.random() * 30) + 10;
    setFriends(len);
    const gropClick = ()=>{
        console.log("gropClick !!!!")
        modalOpen();
    }
    const logout = ()=>{
        console.log("logout !!!!")
    }

    /* ETC Select */
    const modalShow = ref(false);
    const listSelectBoxValue = ref("")
    const listSelectBoxList = ref([
        {
            text : "가족이랑",
            value : "가족이랑",
            checked : false,
        },
        {
            text : "친구들이랑",
            value : "친구들이랑",
            checked : false,
        },
        {
            text : "그룹1",
            value : "그룹1",
            checked : false,
        },
        {
            text : "그룹2",
            value : "그룹2",
            checked : false,
        },
        {
            text : "그룹3",
            value : "그룹3",
            checked : false,
        },
        {
            text : "그룹4",
            value : "그룹4",
            checked : false,
        },
        {
            text : "그룹5",
            value : "그룹5",
            checked : false,
        },
        {
            text : "그룹6",
            value : "그룹6",
            checked : false,
        },
        {
            text : "그룹7",
            value : "그룹7",
            checked : false,
        },
    ])
    const listSelectBoxListClick = (val)=>{
        modalShow.value = false;
        group.value = val;
        const len = Math.floor(Math.random() * 100);
        setFriends(len);
    }
    const modalOpen = ()=>{
        modalShow.value = true;
    }

    /* FLOAT */
    const floatPopBoxOpen = ref(true);
    const floatBoxType = ref("alert");
    const floatPopClse = ()=>{
        floatPopBoxOpen.value = false;
    }

    /* ALERT */
    const alertLists = ref([
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "red",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "blue",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "pink",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "red",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "blue",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "pink",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "red",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "blue",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "pink",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "red",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "blue",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "pink",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
        {
            color : "orange",
            text : "[김응삼] 님이 SOS를 요청하셨습니다.",
            date : "2024/9/11 14:31",
        },
    ])

    /* STEP */
    const stepList = ref([
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
        {
            time : "13:00:32",
            text : "서울시 용산구 한강대로 273 (용산빌딩)",
        },
    ])
    const stepStep = ref(2);
</script>
<style type="scss" scoped>
    .dummy-back{
        background:url(@img/dummy-map.png) no-repeat center;
    }
    .addGroupPersonBtn{
        margin-bottom:20rem;
    }
</style>