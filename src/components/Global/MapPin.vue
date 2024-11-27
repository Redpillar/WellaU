<template>
    <div class="mapPin-wrapper" :style="mapPinWrapperStyle" @click.stop="click">
        <div class="mapPinPop" v-if="popShow">
            <div class="mapPinPop-con">
                <slot>
                </slot>
            </div>
            <div class="mapPinPop-btn">
                <a-button type="primary" @click.stop="popClose">확인</a-button>
            </div>
        </div>
        <div class="mapPin-pieChart" :style="mapPinCircleStyle" v-if="piechartShow">
        </div>
        <div class="mapPin-icon-circle" :style="mapPinIconCircleStyle" v-if="iconShow">
            <img :src="props.photo.src" :alt="props.photo.alt" v-if="props.photo.src !== '' " />
        </div>
        <div class="mapPin-sos" v-if="sos" @click.stop>SOS</div>
        <svg class="mapPin-pin" viewBox="0 0 138 182.2">
            <path class="st0" d="M136.6,69.1c0,37.4-30.4,79.3-67.7,111.3C35.9,153,1.3,106.5,1.3,69.1S31.6,1.4,68.9,1.4S136.6,31.7,136.6,69.1 z"/>
        </svg>

    </div>
</template>
<script setup>
    import { ref,computed,defineProps,defineEmits,defineModel } from 'vue'
    const props = defineProps({
        value : {
            type : Boolean,
            default : ()=>{
                false;
            }
        },
        width : {
            type : Number,
            default : ()=>{
                return 50;
            }
        },
        per : {
            type : Number,
            default : ()=>{
                return 0;
            }
        },
        type : {
            type : String,
            default : ()=>{
                return "icon"; // icon or pie
            }
        },
        icon : {
            type : String,
            default : ()=>{
                return "home"; // yellow or people orhome
            }
        },
        popShow :{
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        photo : {
            type : Object,
            default : ()=>{
                return {
                    src : "",
                    alt : "",
                }
            }
        },
        sos : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        }
    })
    const emits = defineEmits(['click','mapPinPopupEv'])
    const model = defineModel('popShow');
    const popupShow = ref(true)
    const piechartShow = ref(props.type === 'pie' ? true : false);
    const iconShow = ref(props.type === 'icon' || props.icon !== "none" ? true : false);
    const popClose = ()=>{
        popupShow.value = false;
        model.value = false;
        emits("mapPinPopupEv");
    }
    const mapPinWrapperStyle= computed(()=>{
        const style = {};
        style.width = props.width + "rem";
        return style
    })
    const mapPinCircleStyle = computed(()=>{
        const style = {};
        const per = props.per * (360 / 100);
        const color = (props.per < 14) ? "#ff0000" : (props.per < 51) ? "#ffff00" : "#57DED2";
        style.width = props.width - 10 + "rem";
        style.height = props.width - 10 + "rem";
        style.background = `conic-gradient(${color} ${per}deg, #000 ${per}deg)`;
        return style;
    })
    const mapPinIconCircleStyle = computed(()=>{
        const style = {};
        const diffPrice = (props.icon !== "yellow") ? 20 : 10;
        style.width = props.width - diffPrice + "rem";
        style.height = props.width - diffPrice + "rem";
        style.top = (diffPrice / 2) + "rem";
        style.left = (diffPrice / 2) + "rem";
        if(props.icon === 'yellow'){
            style.background = "yellow";
        }else if(props.icon === 'people'){
            style.background = "red";
        }else if(props.icon === 'house'){
            style.background = "green";
        }
        return style;
    })
    const click = ()=>{
        emits('click')
    }
</script>
<style type="scss" scoped>
    .mapPin-wrapper{
        position:relative;
        display:inline-block;
        width:80rem;
        .mapPin-pin{
            width:100%;
        }
    }

    .mapPin-pieChart{
        position:absolute;
        z-index:10;
        top:5rem;
        left:5rem;
        width:70rem;
        height:70rem;
        border-radius:50%;
        /* background:conic-gradient(#db4e59 40deg, #57DED2 40deg); */
        &:before{
            content:"";
            position:absolute;
            top:50%;
            left:50%;
            width:calc(100% - 10rem);
            height:calc(100% - 10rem);
            border-radius:50%;
            transform:translate(-50%,-50%);
            background:#000;
        }
    }
    .mapPin-icon-circle{
        position:absolute;
        top:10rem;
        left:10rem;
        z-index:50;
        width:70rem;
        border-radius:50%;
        overflow:hidden;
        background:yellow;
        &> img{
            position:absolute;
            top:50%;
            left:50%;
            width:100%;
            height:100%;
            transform:translate(-50%,-50%);
        }
    }
    .mapPinPop{
        position:absolute;
        top:0;
        left:50%;
        z-index:100;
        padding:10rem;
        transform:translate(-50%,calc(-100% - 10rem));
        border:1px solid #ededed;
        border-radius:5rem;
        background:#fff;

    }
    .mapPinPop-con{
        font-size:12rem;
        line-height:1;
        white-space:nowrap;
    }
    .mapPinPop-btn{
        display:flex;
        justify-content:flex-end;
        width:100%;
    }
    .mapPin-sos{
        position:absolute;
        top:0;
        right:0;
        z-index:100;
        padding:5rem 15rem;
        font-size:12rem;
        line-height:1;
        color:#fff;
        font-weight:bold;
        border-radius:10rem;
        transform:translate(100%,0);
        background:red;
    }
</style>