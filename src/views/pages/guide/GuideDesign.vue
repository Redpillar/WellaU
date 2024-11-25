<template>
    <div class="guide-wrapper">
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">INPUT</h2>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 하단 시간</h3>
                <div class="view">
                    <div class="check-code-input-box">
                        <a-input class="wellau-input" placeholder="인증코드 입력" />
                        <span>1분 1초</span>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 하단 시간 & 입력제한</h3>
                <div class="view">
                    <div class="check-code-input-box">
                        <MaxInput v-model:value="maxValue" :maxlength="maxlength" :placeholder="maxInputPlaceholder" @input="maxInputEvent" @enterEv="maxInputEnterEvent" />
                        <span>{{time.m}}분 {{time.s}}초</span>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 상단 텍스트</h3>
                <div class="view">
                    <p class="content-text-info">신규 비밀번호를 입력해 주세요</p>
                    <a-input-password class="wellau-input" placeholder="신규 비밀번호" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SET(하나인경우)</h3>
                <div class="view">
                    <div class="sleect-set">
                        <a-select v-model:value="selectSex" :showArrow="false" class="wellau-select"  placeholder="성별" :options="optionsSex"/>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SET(하나인경우 + 타이틀)</h3>
                <div class="view">
                    <p  class="content-text-info">성별을 선택해주세요</p>
                    <div class="sleect-set">
                        <a-select v-model:value="selectSex" :showArrow="false" class="wellau-select" placeholder="성별" :options="optionsSex"/>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SETSELECT SET(세개인경우)</h3>
                <div class="view">
                    <div class="sleect-set">
                        <a-select v-model:value="selectYear" :showArrow="false" class="wellau-select" placeholder="년" :options="optionsYear" @change="setDate"/>
                        <a-select v-model:value="selectMonth" :showArrow="false" class="wellau-select" placeholder="월" :options="optionsMonth" @change="setDate"/>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SETSELECT SET(세개인경우 + 타이틀)</h3>
                <div class="view">
                    <p  class="content-text-info">생일을 입력해주세요</p>
                    <div class="sleect-set">
                        <a-select v-model:value="selectYear" :showArrow="false" class="wellau-select" placeholder="년" :options="optionsYear" @change="setDate"/>
                        <a-select v-model:value="selectMonth" :showArrow="false" class="wellau-select" placeholder="월" :options="optionsMonth" @change="setDate"/>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SETSELECT SET(세개인경우)</h3>
                <div class="view">
                    <div class="sleect-set">
                        <a-select v-model:value="selectYear" :showArrow="false" class="wellau-select" placeholder="년" :options="optionsYear" @change="setDate"/>
                        <a-select v-model:value="selectMonth" :showArrow="false" class="wellau-select" placeholder="월" :options="optionsMonth" @change="setDate"/>
                        <a-select v-model:value="selectDate" :showArrow="false" class="wellau-select" placeholder="일" :options="optionsDate"/>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SETSELECT SET(세개인경우 + 타이틀)</h3>
                <div class="view">
                    <p  class="content-text-info">생일을 입력해주세요</p>
                    <div class="sleect-set">
                        <a-select v-model:value="selectYear" :showArrow="false" class="wellau-select" placeholder="년" :options="optionsYear" @change="setDate"/>
                        <a-select v-model:value="selectMonth" :showArrow="false" class="wellau-select" placeholder="월" :options="optionsMonth" @change="setDate"/>
                        <a-select v-model:value="selectDate" :showArrow="false" class="wellau-select" placeholder="일" :options="optionsDate"/>
                    </div>
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">TITLE</h2>
            <!-- area -->
            <div class="area-box">
                <h3>타이틀 타입1</h3>
                <div class="view">
                    <div class="title-wrappper">
                        <h2 class="title">
                            아래 그룹이 맞나요?<br />
                            입장 전 그룹원들에게 공개할 내 정보를<br />
                            선택하세요
                        </h2>
                    </div>
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">INFO TEXT</h2>
            <!-- area -->
            <div class="area-box">
                <h3>제목 안내 스타일1</h3>
                <div class="view">
                    <div class="title-info-style">
                        <div class="float-input-area"><a-switch /></div>
                        <div class="tit">내 프로필 공개</div>
                        <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                    </div>
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">BUTTON</h2>
            <!-- area -->
            <div class="area-box">
                <h3>버튼 set 타입1</h3>
                <div class="view">
                    <div class="btn-set">
                        <a-button class="wellau-btn">그룹 참여하기</a-button>
                        <a-button class="wellau-btn">새로운 그룹 생성하기</a-button>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>버튼 set 타입2</h3>
                <div class="view">
                    <div class="btn-set horizontal">
                        <a-button class="wellau-btn">계속하기</a-button>
                        <a-button class="wellau-btn">공유하기</a-button>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>하단 텍스트가 있는경우 1</h3>
                <div class="view">
                    <div class="btn-set">
                        <a-button class="wellau-btn">계속하기</a-button>
                    </div>
                    <div class="btn-info-text-both">
                        가입 코드를 전송합니다.
                    </div>
                </div>
            </div>
            <div class="area-box">
                <h3>하단 텍스트가 있는경우 2</h3>
                <div class="view">
                    <div class="btn-set">
                        <a-button class="wellau-btn">계속하기</a-button>
                    </div>
                    <div class="btn-info-text-both color-black">
                        가입 코드를 전송합니다.
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>텍스트 버튼 타입1</h3>
                <div class="view">
                     <a-button type="link" class="wellau-btn addGroupPersonBtn">+ 그룹원 추가 하기</a-button>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>ICON BUTTON BOX</h3>
                <div class="view">
                    <IconButtonBox icon="sharing" @click.stop="iconButtonBoxClick" />
                    <IconButtonBox icon="record" :disabled="true"  @click.stop="iconButtonBoxClick" />
                    <IconButtonBox icon="search"  @click.stop="iconButtonBoxClick" />
                    <IconButtonBox icon="alert" :disabled="true"  @click.stop="iconButtonBoxClick" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>ICON BUTTON BOX(버튼 set)</h3>
                <div class="view">
                    <div class="btn-set horizontal sb">
                        <IconButtonBox icon="sharing" @click.stop="iconButtonBoxClick" />
                        <IconButtonBox icon="record"  @click.stop="iconButtonBoxClick" />
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>ICON BUTTON BOX</h3>
                <div class="view">
                    <IconButton icon="phone" :disabled="true" @click="iconButtonClick" />
                    <IconButton icon="text" @click="iconButtonClick" />
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">PROFILE</h2>
            <!-- area -->
            <div class="area-box">
                <h3>Default</h3>
                <div class="view">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동 | 13분전" :img="img1" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>이름만</h3>
                <div class="view">
                    <ProfileBox name="홍길동" :img="img1" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>오른쪽 체크박스</h3>
                <div class="view">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동 | 13분전" :img="img1">
                        <template #rightArea>
                            <a-switch v-model:checked="switchChecked" />
                        </template>
                    </ProfileBox>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>베터리</h3>
                <div class="view">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동 | 13분전" :img="img1" :battery="75" />
                </div>
            </div>
        </div>
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">ETC</h2>
            <!-- area -->
            <div class="area-box">
                <h3>Select</h3>
                <div>listSelectBoxValue : {{listSelectBoxValue}}</div>
                <div class="view">
                    <ListSelectBox v-model:value="listSelectBoxValue" :list="listSelectBoxList" @listClick="listSelectBoxListClick" @btnClick="listSelectBoxBtnClick" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>Modal Select</h3>
                <div>
                    listSelectBoxValue : {{listSelectBoxValue}}<br />
                    <a-button class="wellau-btn" @click="modalOpen">OPEN</a-button>
                </div>
                <div class="view">
                    <!-- modal -->
                    <ModalBox v-model:modalShow="modalShow" :padding="0">
                    <ListSelectBox v-model:value="listSelectBoxValue" :outLine="false" :list="listSelectBoxList" @listClick="listSelectBoxListClick" @btnClick="listSelectBoxBtnClick" />
                    </ModalBox>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import {ref} from 'vue'
    /* input */
    const maxValue = ref("");
    const maxlength = ref(6);
    const maxInputPlaceholder = ref("인증번호 입력​");
    const maxInputEvent = ()=>{}
    const maxInputEnterEvent = ()=>{}
    const time = ref({
                m : 3,
                s : 0,
    })
    /* select */
    const selectSex = ref(undefined);
    const optionsSex = [{value:"남"},{value:"여"}];
    const selectYear = ref(undefined);
    let optionsYear = []
    for(let i=1999; i<new Date().getFullYear(); i++){
        optionsYear.push({
            value : (i + 1) + "년"
        })
    }
    const selectMonth = ref(undefined);
    let optionsMonth = [];
    for(let i=0; i<11; i++){
        optionsMonth.push({
            value : (i + 1) + "월"
        })
    }
    const selectDate = ref(undefined);
    const optionsDate = ref([]);
    const setDate = ()=>{
        selectDate.value = undefined;
        optionsDate.value = [];
        if(selectYear.value !== undefined && selectMonth.value !== undefined){
            const y = selectYear.value.replace(/\D/g,'');
            const m = selectMonth.value.replace(/\D/g,'');
            const setDate = new Date(y,m,0);
            for(let i=0; i<setDate.getDate(); i++){
                optionsDate.value.push({
                    value : (i + 1) + "일"
                })
            }
        }
    }
    /* profile */
    const img1 = ref({
        src : require('@img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })
    const switchChecked = ref(false);

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
    const listSelectBoxListClick = ()=>{
        modalShow.value = false;
    }
    const listSelectBoxBtnClick = ()=>{
        modalShow.value = false;
    }
    const modalOpen = ()=>{
        modalShow.value = true;
    }
    /* BUTTON */
    const iconButtonBoxClick = (icon)=>{
        console.log("icon : ",icon)
    }

    const iconButtonClick = (icon)=>{
        console.log("icon : ",icon)
    }
</script>
<style type="scss" scoped>
    .guide-wrapper{
        height:100%;
        overflow:auto;
    }
    .guide-category-wrapper{
        border-bottom:2rem solid #ccc;
        padding:0 0 30rem 0;
        &+ .guide-category-wrapper{
            margin-top:50rem;
        }
    }
    .guide-tit-category{
        padding:0 0 15rem 0;
        font-size:20rem;
        font-weight:bold;
    }
    .area-box{
        &> h3{
            margin:0 0 20rem 0;
            padding:0 0 5rem 0;
            font-size:16rem;
            border-bottom:1px solid #ededed;
        }
        &+ .area-box{
          margin-top:45rem;
        }
    } 
</style>