<template>
    <button class="icon-button-box i-location" :disabled="props.disabled" @click.stop="click">
        <i>
            <ShareAltOutlined v-if="props.icon === 'sharing'" /><!-- 공유 -->
            <FormOutlined v-if="props.icon === 'record'" /><!-- 기록 -->
            <MonitorOutlined v-if="props.icon === 'search'" /><!-- 찾기 -->
            <AlertOutlined v-if="props.icon === 'alert'" /><!-- 알림 -->
            <div class="battery-icon" v-if="props.icon === 'battery'">
                <span class="bar" :style="barStyle"></span>
                <svg  viewBox="0 0 416 168"><path class="cls-1" stroke-width="20rem" stroke="currentColor" fill="none" d="M464.44,256.25h26.78C506,256.25,518,269,518,284.6v18.3c0,15.59-11.09,28.35-24.65,28.35H468.69" transform="translate(-112 -209.75)"/><rect stroke-width="20rem" stroke="#1d1d1b" fill="none" class="cls-1" x="10" y="10" width="345" height="148" rx="56.69"/></svg>
            </div>
        </i>
        
        <span>{{(props.icon === 'battery') ? props.battery + '%' : buttonText }}</span>
    </button>
</template>
<script setup>
    import { ref,watch,computed,defineEmits,defineProps } from 'vue'
    import { ShareAltOutlined,FormOutlined,MonitorOutlined,AlertOutlined } from '@ant-design/icons-vue'
    const props = defineProps({
        icon : {
            type : String,
            default : ()=>{
                return 'sharing' // [record,search,sharing,alert]
            }
        },
        text : {
            type : String,
            default : ()=>{
                return null
            }
        },
        disabled : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        battery : {
            type : Number,
            default : ()=>{
                return 0;
            }
        }
    })
    const emit = defineEmits(['click']);
    const textGroup = [{text:"위치공유",icon:"sharing"},{text:"위치기록",icon:"record"},{text:"길찾기",icon:"search"},{text:"알림목록",icon:"alert"},{text:"베터리",icon:"battery"}]
    const buttonText = ref("");
    const click = ()=>{
        emit("click",props.icon);
    }
    const barStyle = computed(()=>{
        const style = {};
        console.log("props.battery : ",props.battery)
        if(props.battery > -1){
            const per = props.battery * 0.01;
            const width = `calc((100% - 11rem) * ${per})`
            style.width = width;
            if(props.battery < 21){
                style.borderRadius = "5rem 0 0 5rem"
            }
        }
        return style;
    })
    watch(()=>props.icon,()=>{
        if(!props.text){
            const t = textGroup.find(a=>a.icon === props.icon);
            buttonText.value = t.text;
        }
    },{immediate:true})
</script>
<style type="scss" scoped>
    .icon-button-box{
        display:inline-flex;
        flex-direction:column;
        align-items:center;
        width:150rem;
        padding:10rem;
        border-radius:20rem;
        outline:none;
        border:1rem solid #ededed;
        cursor:pointer;
        &> i{
            font-size:40rem;
        }
        &> span{
            font-size:16rem;
        }
        &[disabled]{
            cursor:default;
            &> i, &> span{
                color:#ddd;
            }
        }
    }
    .battery-icon{
        position:relative;
        display:flex;
        align-items:center;
        width:40rem;
        height:40rem;
        margin:0 0 0 5rem;
        &> .bar{
            position:absolute;
            left:3rem;
            top:50%;
            z-index:2;
            width:calc((100% - 11rem) * 1);
            height:11rem;
            border-radius:5rem;
            transform:translate(0,-50%);
            background:black;
        }
        &> svg{
            position:relative;
            top:0;
            z-index:5;
            height:auto;
        }
    }
</style>