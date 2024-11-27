<template>
    <div class="content-wrapper full">
        <div class="content-top-area-bopx">
            <div class="mark-time-box">
                <i class="mark-circle"></i>
                <div class="date">
                    <i><CalendarOutlined /></i>2024년 09월 13일
                </div>
                <div class="time">
                    <i><ClockCircleOutlined /></i>13시
                </div>
            </div>
        </div>
        <div class="content-scroll">
            <div class="mapArea dummy-back">
            </div>
        </div>
        <BothBar>
            <template #content>
                <StepBox :list="stepList" :step="stepStep" />
            </template>
        </BothBar>
    </div>
</template>
<script setup>
    import { ref } from 'vue'
    import { CalendarOutlined,ClockCircleOutlined } from '@ant-design/icons-vue'
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
        background:url(../../assets/img/dummy-map.png) no-repeat center;
    }
</style>