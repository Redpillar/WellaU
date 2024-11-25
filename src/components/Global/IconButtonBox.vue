<template>
    <button class="icon-button-box i-location" :disabled="props.disabled" @click.stop="click">
        <i>
            <ShareAltOutlined v-if="props.icon === 'sharing'" /><!-- 공유 -->
            <FormOutlined v-if="props.icon === 'record'" /><!-- 기록 -->
            <MonitorOutlined v-if="props.icon === 'search'" /><!-- 찾기 -->
            <AlertOutlined v-if="props.icon === 'alert'" /><!-- 알림 -->
        </i>
        <span>{{buttonText}}</span>
    </button>
</template>
<script setup>
    import { ref,watch,defineEmits,defineProps } from 'vue'
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
        }
    })
    const emit = defineEmits(['click']);
    const textGroup = [{text:"위치공유",icon:"sharing"},{text:"위치기록",icon:"record"},{text:"길찾기",icon:"search"},{text:"알림목록",icon:"alert"}]
    const buttonText = ref("");
    const click = ()=>{
        emit("click",props.icon);
    }
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
        &> i{
            font-size:40rem;
        }
        &> span{
            font-size:16rem;
        }
        &[disabled]{
            &> i, &> span{
                color:#ddd;
            }
        }
    }
</style>