<template>
    <div class="content-wrapper fixedBorderTop">
        <div class="content-scroll paddingWrapper">
            <div class="alert-box" v-for="(list,index) in lists" :key="'list_'+index">
                <i class="mark-circle" :style={background:list.color}></i>
                <div class="text">
                    {{list.text}}
                </div>
                <div class="date">{{list.date}}</div>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    const lists = ref([
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
</script>
<style type="scss" scoped>
    .alert-box{
        position:relative;
        display:flex;
        align-items:center;
        justify-content:flex-start;
        padding:10rem;
        border:1px solid #ededed;
        border-radius:10rem;
        &> .mark-circle{
            display:block;
            width:40rem;
            height:40rem;
            border-radius:50%;
            background:orange;
        }
        &> .text{
            padding:0 0 0 10rem;
            font-size:14rem;
            line-height:1;
        }
        &> .date{
            position:absolute;
            top:5rem;
            right:10rem;
            font-size:11rem;
            color:#ccc;
        }
        &+ .alert-box{
            margin-top:5rem;
        }
    }
</style>