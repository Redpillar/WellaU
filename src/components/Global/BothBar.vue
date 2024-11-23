<template>
    <div id="bothBar">
        <div class="bothBar-wrapper" :style="bothBarWrapperStyle" @touchstart="touchStart" @touchmove="touchMoved" @touchend="touchEnd">
            <div class="bothBar-thumn" ></div>
            <div class="bothBar-content">
                <slot name="content">
                </slot>
            </div>
        </div>
    </div>
</template>
<script setup>
    import { ref,computed } from 'vue'
    const points = ref({s:-1,e:-1,h:100,min:100,cuh:100});
    const toutchTargetChecked = ref(false);
    const targetChecked = (target)=>{
        const cl = target.getAttribute("class");
        const checked = (cl)?cl.match(/ant-/g):null;
        const parent = (target.parentNode)?target.parentNode:null;
        const parentCl = (parent && parent.getAttribute("class"))?parent.getAttribute("class"):null;
        const parehtChecked = (parentCl)?parentCl.match(/ant-/g):null;
        return checked || parehtChecked ? true : false;
    }
    const touchStart = ($ev)=>{
        toutchTargetChecked.value = targetChecked($ev.target);
        points.value.s = $ev.targetTouches[0].pageY;
        points.value.cuh = points.value.h;
        if(!toutchTargetChecked.value) $ev.preventDefault();
    }
    const touchMoved = ($ev)=>{
        if(toutchTargetChecked.value) return
        const touchPoint = $ev.targetTouches[0].pageY;
        const diff = points.value.s - touchPoint;
        const calc = points.value.cuh + diff
        points.value.h = calc;
    }
    const touchEnd = ()=>{
        points.value.s = -1;
        if(toutchTargetChecked.value) return
    }
    const bothBarWrapperStyle = computed(()=>{
        const style = {};
        style.height = points.value.h + "rem";
        return style
    })
</script>
<style type="scss" scoped>
    #bothBar{
        position:relative;
        height:100rem;
        background:gray;
    }
    .bothBar-wrapper{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        max-height:calc(100vh - 100rem);
        min-height:100rem;
        overflow:hidden;
        background:#fff;
    }
    .bothBar-thumn{
        position:relative;
        height:20rem;
        /* background:#000; */
        &:after{
            content:"";
            position:absolute;
            top:50%;
            left:50%;
            width:60rem;
            height:5rem;
            border-radius:5rem;
            transform:translate(-50%,-50%);
            background:#ededed;
        }
    }
    .bothBar-content{
        padding:20rem;
    }
</style>