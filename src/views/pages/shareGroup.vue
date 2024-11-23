<template>
    <div class="content-wrapper child100per onePage">
        <div class="content-scroll">
            <div class="title-wrappper">
                <h2 class="title">
                    새그룹을 공유해보세요.
                </h2>
            </div>
            <div class="shareCodeInfoBox">
                <div class="code">DKE3FE</div>
                <div class="timeTit">초대코드 유효시간</div>
                <div class="time">
                    {{time.d}}일 {{time.h}}:{{time.m}}:{{time.s}}
                </div>
            </div>
            <div class="btn-set horizontal">
                <a-button>계속하기</a-button>
                <a-button>공유하기</a-button>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const time = ref({d:1,h:23,m:43,s:53});
</script>
<style type="scss" scoped>
    .shareCodeInfoBox{
        display:flex;
        align-items:center;
        justify-content:center;
        flex-direction:column;
        width:300rem;
        height:300rem;
        margin:0 auto;
        border-radius:50%;
        border:1px solid #000;
        &> .code{
            font-size:40rem;
            line-height:1;
            font-weight:bold;
        }
        &> .timeTit{
            margin:10rem 0 0;
            font-size:20rem;
            line-height:1;
        }
        &> .time{
            margin:5rem 0  0;
            font-size:16rem;
            line-height:1;
            color:red;
        }
    }
    .btn-set{
        margin-top:30rem;
    }
</style>