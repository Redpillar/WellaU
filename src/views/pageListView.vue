<template>
    <div>
        <Test-component />
        <div class="top">화면설계서 버전 : v1.14, 총 페이지 : {{pageList.length}}</div>
        <table cellspacing="0" cellapdding="0">
            <colgroup>
                <col style="width:20%" />
                <col style="width:20%" />
                <col style="width:20%" />
                <col style="width:20%" />
                <col style="width:20%" />
            </colgroup>
            <thead>
                <tr>
                    <th>
                        카테고리
                    </th>
                    <th>
                        OS
                    </th>
                    <th>
                        이름
                    </th>
                    <th>
                        화면 타입
                    </th>
                    <th>
                        피피티 번호
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(page,index) in pageList" :key="'list' + index" :class="categoryLine(index)" @click="trClick(page.path)">
                    <td>
                        {{page.category}}
                    </td>
                    <td>
                        {{page.os}}
                    </td>
                    <td>
                        {{page.name}}
                    </td>
                    <td>
                        {{page.type}}
                    </td>
                    <td>
                        {{page.page}}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>
<script>
    export default {
        name : "pageList",
        props : {},
        components : {},
        data(){return{
            pageList : [
                {
                    category : "기본구역",
                    os : "WEB",
                    name : "메인-지도마커 상세",
                    type : "Component",
                    page : 1,
                    path : "/page01"
                },
                {
                    category : "로그인",
                    os : "WEB",
                    name : "로그인",
                    type : "화면",
                    page : 3,
                    path : "/login"
                },
                {
                    category : "로그인",
                    os : "WEB",
                    name : "회원가입 > 비밀번호등록, 프로필등록",
                    type : "화면",
                    page : 4,
                    path : "/searchPassWord"
                },
                {
                    category : "로그인",
                    os : "WEB",
                    name : "비밀번호 재설정 > 휴대폰 인증",
                    type : "알림",
                    page : 5,
                    path : "/resetPassWord"
                },
                {
                    category : "가입하기",
                    os : "WEB",
                    name : "회원가입 > 약관동의",
                    type : "알람",
                    page : 6,
                    path : "/page01"
                },
                {
                    category : "가입하기",
                    os : "WEB",
                    name : "회원가입 > 권한허용",
                    type : "화면 / 알람",
                    page : 7,
                    path : "/page01"
                },
                {
                    category : "메인",
                    os : "WEB",
                    name : "메인 > 그룹 (그룹없음)",
                    type : "화면",
                    page : 8,
                    path : "/page01"
                },
                {
                    category : "메인",
                    os : "AOS",
                    name : "메인 > 위치권한허용",
                    type : "팝업",
                    page : 10,
                    path : "/page01"
                },
                {
                    category : "메인",
                    os : "공통",
                    name : "참여그룹 확인",
                    type : "화면",
                    page : 13,
                    path : "/page01"
                },
                {
                    category : "메인",
                    os : "WEB",
                    name : "그룹생성",
                    type : "화면",
                    page : 14,
                    path : "/page01"
                },
                {
                    category : "메인",
                    os : "WEB",
                    name : "메인 > 그룹 (그룹있음)",
                    type : "화면",
                    page : 15,
                    path : "/page01"
                },
                {
                    category : "메인",
                    os : "WEB",
                    name : "메인 > 그룹 (그룹변경)",
                    type : "팝업",
                    page : 16,
                    path : "/page01"
                },
                {
                    category : "메인",
                    os : "WEB",
                    name : "위치정보 상세",
                    type : "화면",
                    page : 17,
                    path : "/page01"
                },
                {
                    category : "메인",
                    os : "WEB",
                    name : "위치정보 상세 > 위치기록",
                    type : "화면",
                    page : 19,
                    path : "/page01"
                },
                {
                    category : "메인",
                    os : "WEB",
                    name : "알림함",
                    type : "화면",
                    page : 20,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "메뉴",
                    type : "화면",
                    page : 21,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "그룹관리",
                    type : "화면",
                    page : 22,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "위치공유상태 보기",
                    type : "화면",
                    page : 23,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "안심존 목록",
                    type : "화면",
                    page : 30,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "안심존 생성",
                    type : "화면",
                    page : 31,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "안심존 보기",
                    type : "화면",
                    page : 32,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "안심존 수정",
                    type : "화면",
                    page : 33,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "근접 알림 수정",
                    type : "화면",
                    page : 35,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "SOS 요청, 취소",
                    type : "화면",
                    page : 36,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "내정보 > 사진변경",
                    type : "화면",
                    page : 38,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "WEB",
                    name : "FAQ",
                    type : "화면",
                    page : 44,
                    path : "/page01"
                },
                {
                    category : "메뉴",
                    os : "IOS",
                    name : "결제",
                    type : "화면",
                    page : 48,
                    path : "/page01"
                },
            ]
        }},
        computed : {},
        created(){},
        mounted(){},
        wtach : {},
        methods : {
            trClick(path){
                this.$router.push(path);
            },
            categoryLine(index){
                let temp = "";
                const index2 = index - 1;
                if(index > 0 && this.pageList[index2].category !== this.pageList[index].category){
                    temp = "categoryLine"
                }
                return temp;
            }
        },
    }
</script>
<style type="scss" scoped>
    table{
        width:100%;
        font-size:12rem;
        border-collapse:collapse;
        td, th{
            border:1px solid #ededed;
        }
        thead{
            th, td{
                height:30rem;
                font-weight:bold;
                background:#ccc;
            }
        }
        tbody{
            td{
                padding:10rem;
                font-size:15rem;
                &:first-child{
                    text-align:center;
                }
            }
        }
    }
    .categoryLine{
        border-top:2rem double #000;
    }
    .top{
        padding:5rem;
        font-size:14rem;
        text-align:right;
    }
</style>