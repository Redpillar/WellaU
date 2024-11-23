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
                        <a-input  placeholder="인증코드 입력" />
                        <span>1분 1초</span>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>INPUT 상단 텍스트</h3>
                <div class="view">
                    <p class="content-text-info">신규 비밀번호를 입력해 주세요</p>
                    <a-input-password placeholder="신규 비밀번호" />
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
                        <a-button>그룹 참여하기</a-button>
                        <a-button>새로운 그룹 생성하기</a-button>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>버튼 set 타입2</h3>
                <div class="view">
                    <div class="btn-set horizontal">
                        <a-button>계속하기</a-button>
                        <a-button>공유하기</a-button>
                    </div>
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>텍스트 버튼 타입1</h3>
                <div class="view">
                     <a-button type="link" class="addGroupPersonBtn">+ 그룹원 추가 하기</a-button>
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
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동 | 13분전" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>이름만</h3>
                <div class="view">
                    <ProfileBox name="홍길동" />
                </div>
            </div>
            <!-- area -->
            <div class="area-box">
                <h3>오른쪽 체크박스</h3>
                <div class="view">
                    <ProfileBox name="홍길동" conText="서울시 용산동 갈월동 | 13분전">
                        <template #rightArea>
                            <a-switch /><!-- v-model:checked -->
                        </template>
                    </ProfileBox>
                </div>
            </div>
        </div>
    </div>
</template>
<script setup>
</script>
<style type="scss" scoped>
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