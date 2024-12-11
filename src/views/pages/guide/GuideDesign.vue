<template>
    <div class="guide-wrapper">
        <!-- category -->
        <div class="guide-category-wrapper">
            <h2 class="guide-tit-category">INPUT</h2>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 하단 시간</h3>
                <div class="view">
                    <div class="check-code-input-box"><!-- 241211 disabled 시 disabled 클래스 추가해 주세요 -->
                        <a-input class="wellau-input" placeholder="인증코드 입력" :disabled="false" />
                        <span>1분 1초</span>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 하단 시간 & 입력제한</h3>
                <div class="view">
                    <div class="check-code-input-box"><!-- 241211 disabled 시 disabled 클래스 추가해 주세요 -->
                        <MaxInput v-model:value="maxValue" :maxlength="maxlength" :placeholder="maxInputPlaceholder" :disabled="false" @input="maxInputEvent" @enterEv="maxInputEnterEvent" />
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
                <h3>INPUT SEARCH</h3>
                <div class="view">
                    <SearchInput v-model:value="searchTextField" :placeholder="searchPlaceholder" @input="searchInputEv" @enter="searchEnterEv" @searchIcon="searchIconEv" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>CHECKBOX</h3>
                <div class="view">
                    <div class="checkbox-list">
                        <div class="total">
                            <a-checkbox v-model:checked="allCheck.checked" class="wellau-checkbox sizeBig" :disabled="allCheck.dis" @change="allCheckChangeEv">전체동의</a-checkbox>
                        </div>
                        <ul class="list">
                            <li>
                                <a-checkbox v-model:checked="check[0].checked" class="wellau-checkbox" :disabled="check[0].dis"  @change="checkChangeEv">[필수] 서비스 이용약관 동의</a-checkbox>
                            </li>
                            <li>
                                <a-checkbox v-model:checked="check[1].checked" class="wellau-checkbox" :disabled="check[1].dis"  @change="checkChangeEv">[필수] 위치기반 서비스 이용약관 동의</a-checkbox>
                            </li>
                            <li>
                                <a-checkbox v-model:checked="check[2].checked" class="wellau-checkbox" :disabled="check[2].dis"  @change="checkChangeEv">[필수] 개인정보 처리방침 동의</a-checkbox>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>RADIO</h3>
                <div class="view">
                    <div class="radio-list-style-box">
                        <a-radio-group v-model:value="radio" @change="radioChange" class="wellau-radio-group">
                            <a-radio :value="0">긴급 상황입니다.</a-radio>
                            <a-radio :value="1">010-000-0000 번호로 연락 주세요.</a-radio>
                            <a-radio :value="2">다쳤어요, 도움이 필요해요.</a-radio>
                            <a-radio :value="3"><div class="click-dummy-box" v-if="radio !== 3"></div><a-input class="wellau-input" v-model:value="radioTextField" placeholder="10자 이내" :maxlength="10" :disabled="radioTextFieldDisabled" @input="radioTextFieldInput" ref="radioInputRef" /></a-radio>
                        </a-radio-group>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SET(하나인경우)</h3>
                <div class="view">
                    <div class="sleect-set">
                        <div class="wrapper-select-set">
                            <div class="wrapper-select-set-list">
                                <a-select v-model:value="selectSex" :showArrow="false" class="wellau-select" placeholder="성별" :options="optionsSex"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SET(하나인경우 + 타이틀)</h3>
                <div class="view">
                    <p  class="content-text-info">성별을 선택해주세요</p>
                    <div class="sleect-set">
                        <div class="wrapper-select-set">
                            <div class="wrapper-select-set-list">
                                <a-select v-model:value="selectSex" :showArrow="false" class="wellau-select" placeholder="성별" :options="optionsSex"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SETSELECT SET(세개인경우)</h3>
                <div class="view">
                <div class="sleect-set">
                    <div class="wrapper-select-set">
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectYear" :showArrow="false" class="wellau-select" placeholder="년" :options="optionsYear" @change="setDate"/>
                        </div>
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectMonth" :showArrow="false" class="wellau-select" placeholder="월" :options="optionsMonth" @change="setDate"/>
                        </div>
                        <div class="wrapper-select-set-list">
                            <a-select v-model:value="selectDate" :showArrow="false" class="wellau-select" placeholder="일" :options="optionsDate"/>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>SELECT SETSELECT SET(세개인경우 + 타이틀)</h3>
                <div class="view">
                    <p  class="content-text-info">생일을 입력해주세요</p>
                    <div class="sleect-set">
                        <div class="wrapper-select-set">
                            <div class="wrapper-select-set-list">
                                <a-select v-model:value="selectYear" :showArrow="false" class="wellau-select" placeholder="년" :options="optionsYear" @change="setDate"/>
                            </div>
                            <div class="wrapper-select-set-list">
                                <a-select v-model:value="selectMonth" :showArrow="false" class="wellau-select" placeholder="월" :options="optionsMonth" @change="setDate"/>
                            </div>
                            <div class="wrapper-select-set-list">
                                <a-select v-model:value="selectDate" :showArrow="false" class="wellau-select" placeholder="일" :options="optionsDate"/>
                            </div>
                        </div>
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
            <!-- area -->
            <div class="area-box">
                <h3>타이틀 타입2</h3>
                <div class="view">
                    <div class="title-both-line">
                        계정 세부 정보
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
                        <div class="l">
                            <div class="tit">내 프로필 공개</div>
                            <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                        </div>
                    </div>
                    <div class="title-info-style">
                        <div class="l">
                            <div class="tit">내 프로필 공개</div>
                            <div class="info">그룹원에게 내 프로필 사진을 공개합니다.  비활성 시 기본 프로필 아이콘이 노출됩니다.</div>
                        </div>
                        <div class="r"><a-switch v-model:checked="infoTextSwitch" /></div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>제목 안내 스타일2(가운데정럴)</h3>
                <div class="view">
                    <div class="both-text-info">
                        <b>전송할 메시지가 있을 시 선택하세요</b><br />
                        (현재 해당 그룹 연락처 미공개 상태입니다)
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>링크 스타일</h3>
                <div class="view">
                    <div class="link-box-area-arrow">
                        <div class="tit">휴대폰</div>
                        <div class="info">010-0000-1111</div>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 스타일</h3>
                <div class="view">
                    <div class="list-input-box">
                        <div class="tit">서비스 알림 받기</div>
                        <div class="input">
                            <a-switch v-model:checked="serviceAlert" class="wellau-switch big-size" />
                        </div>
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
                <h3>ICON BUTTON</h3>
                <div class="view">
                    <IconButton icon="phone" :disabled="true" @click="iconButtonClick" />
                    <IconButton icon="text" @click="iconButtonClick" />
                    <IconButton icon="sharing" @click="iconButtonClick" />
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
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1" />
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
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1">
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
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동" time="13분전" :img="img1" :battery="75" />
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
                    <ListSelectBox v-model:value="listSelectBoxValue" title="그룹을 선택해주세요." buttonText="+ 그룹 만들기" :list="listSelectBoxList" @listClick="listSelectBoxListClick" @btnClick="listSelectBoxBtnClick" />
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
                        <ListSelectBox v-model:value="listSelectBoxValue" title="그룹을 선택해주세요." buttonText="+ 그룹 만들기" :outLine="false" :list="listSelectBoxList" @listClick="listSelectBoxListClick" @btnClick="listSelectBoxBtnClick" />
                    </ModalBox>
                </div>
            </div>
        </div>
    </div>
    <!--
    <a-modal v-model:open="ModalShow" title="" class="wellau-modal">
        <p class="modal-title">등록한 이름 또는 휴대폰 번호가 일치하지 않습니다.</p>
        <p class="modal-content">등록정보 확인 및 비밀번호 재설정 실패 관련 안내는 02-2057-2678로 문의 바랍니다. </p>
        <template #footer>
            <div class="btn-set horizontal">
                <a-button @click="modalClose">취소</a-button>
                <a-button @click="modalClose">로그아웃</a-button>
            </div>
        </template>
    </a-modal>
    const ModalShow = ref(false);
    const modalClose = ()=>{ModalShow.value = false}
    -->
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

    /* search input */

    const searchTextField = ref("");
    const searchPlaceholder = ref("placeholder");

    const searchEnterEv = (val)=>{
        console.log("parent enter : ",val)
    }
    const searchIconEv = (val)=>{
        console.log("parent searchIcon : ",val)
    }
    const searchInputEv = (val)=>{
        console.log("parent input : ",val)
    }


    /* checkbox */

    const allCheck = ref({checked:false,dis:false})
    const check = ref([
        {checked:false,dis:false},
        {checked:false,dis:false},
        {checked:false,dis:false},
    ])

    const allCheckChangeEv = ()=>{
        const checked = allCheck.value.checked;
        check.value.forEach((c)=>{
            c.checked = checked;
        })
    }
    const checkChangeEv = ()=>{
        let checked = true;
        for(let i=0; i<check.value.length; i++){
            const c = check.value[i];
            if(c.checked === false){
                checked = false;
                break;
            }
        }
        allCheck.value.checked = checked;
    }

    /* radio */
    const radio = ref(0);
    const radioTextField = ref("");
    const radioTextFieldDisabled = ref(true);
    const radioChange = ($ev)=>{
        const val = $ev.target.value;
        if(val === 3){
            radioTextFieldDisabled.value = false;
            setTimeout(()=>{
                radioInputRef.value.focus();
            },250)
        }else{
            radioTextFieldDisabled.value = true
        }
    }
    const radioInputRef = ref();
    const radioTextFieldInput = ()=>{}


    /* select */
    const selectSex = ref(undefined);
    const optionsSex = [{value:"남"},{value:"여"}];
    const selectYear = ref(undefined);
    let optionsYear = []
    for(let i=new Date().getFullYear(); i>=1900; i--){
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
    /* info text */
    const infoTextSwitch = ref(false);
    const serviceAlert = ref(false);
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
