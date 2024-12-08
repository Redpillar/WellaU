<template>
    <div class="content-wrapper onePage">
        <div class="content-scroll">
            <div class="content-scroll-padding-box">
                <div class="title-wrappper">
                    <h2 class="title">
                        그룹1 을 공유해보세요.
                    </h2>
                </div>
                <div class="shareCodeInfoBox">
                    <div class="code">DKE3FE</div>
                    <div class="timeTit">초대코드 유효시간</div>
                    <div class="time">
                        {{time.d}}일 {{time.h}}:{{time.m}}:{{time.s}}
                    </div>
                </div>
            </div>
        </div>
        <div class="btn-set">
            <a-button class="wellau-btn">코드 공유하기</a-button>
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