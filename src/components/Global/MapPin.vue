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
            <span class="s" :style="pieChartCircleSstyle"></span>
            <span class="e" :style="pieChartCircleEstyle"><i class="c" :style="pieChartCircleECstyle"></i></span>
        </div>
        <div class="mapPin-icon-circle" :style="mapPinIconCircleStyle">
            <img :src="props.photo.src" :alt="props.photo.alt" v-if="props.photo.src !== '' " />
            <p v-else-if="props.photo.src === '' && props.pinText !== null " :style="firstNameStyle">
                {{props.pinText}}
            </p>
            <i class="none-icon" v-else>
                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M16 20C20.4183 20 24 16.4183 24 12C24 7.58172 20.4183 4 16 4C11.5817 4 8 7.58172 8 12C8 16.4183 11.5817 20 16 20Z" stroke="white" stroke-width="2" stroke-miterlimit="10"/>
                    <path d="M3.875 27C5.10367 24.8714 6.87104 23.1038 8.99944 21.8749C11.1278 20.6459 13.5423 19.9989 16 19.9989C18.4577 19.9989 20.8722 20.6459 23.0006 21.8749C25.129 23.1038 26.8963 24.8714 28.125 27" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </i>

        </div>
        <div class="mapPin-sos" v-if="sos" @click.stop>SOS</div>
        <!-- <svg class="mapPin-pin" viewBox="0 0 138 182.2">
            <path class="st0" d="M136.6,69.1c0,37.4-30.4,79.3-67.7,111.3C35.9,153,1.3,106.5,1.3,69.1S31.6,1.4,68.9,1.4S136.6,31.7,136.6,69.1 z"/>
        </svg> -->
        <svg class="mapPin-pin" width="98" height="144" viewBox="0 0 98 144" fill="none" xmlns="http://www.w3.org/2000/svg">
            <mask id="path-1-outside-1_14189_604" maskUnits="userSpaceOnUse" x="-0.399902" y="-0.400024" width="98" height="145" fill="black">
            <rect fill="white" x="-0.399902" y="-0.400024" width="98" height="145"/>
            <path ref="path" fill-rule="evenodd" clip-rule="evenodd" d="M93.6001 48.6C93.6001 58.7709 90.2258 68.1538 84.5355 75.6901C82.5132 78.5039 79.7792 81.4982 76.7527 84.8127C66.2405 96.3257 52.2001 111.703 52.2001 136.8C52.2001 138.788 50.5883 140.4 48.6001 140.4C46.6119 140.4 45.0001 138.788 45.0001 136.8C45.0001 111.703 30.9597 96.3257 20.4475 84.8127C17.421 81.4982 14.687 78.5039 12.6647 75.6901C6.97442 68.1538 3.6001 58.7709 3.6001 48.6C3.6001 23.7472 23.7473 3.59998 48.6001 3.59998C73.4529 3.59998 93.6001 23.7472 93.6001 48.6Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.6001 48.6C93.6001 58.7709 90.2258 68.1538 84.5355 75.6901C82.5132 78.5039 79.7792 81.4982 76.7527 84.8127C66.2405 96.3257 52.2001 111.703 52.2001 136.8C52.2001 138.788 50.5883 140.4 48.6001 140.4C46.6119 140.4 45.0001 138.788 45.0001 136.8C45.0001 111.703 30.9597 96.3257 20.4475 84.8127C17.421 81.4982 14.687 78.5039 12.6647 75.6901C6.97442 68.1538 3.6001 58.7709 3.6001 48.6C3.6001 23.7472 23.7473 3.59998 48.6001 3.59998C73.4529 3.59998 93.6001 23.7472 93.6001 48.6Z" :fill="fillColor"/>
            <path d="M84.5355 75.6901L81.6625 73.5208L81.637 73.5546L81.6122 73.589L84.5355 75.6901ZM76.7527 84.8127L79.4112 87.2402L79.4112 87.2402L76.7527 84.8127ZM20.4475 84.8127L17.789 87.2402L17.789 87.2402L20.4475 84.8127ZM12.6647 75.6901L15.588 73.589L15.5632 73.5546L15.5377 73.5208L12.6647 75.6901ZM87.4086 77.8594C93.5542 69.7199 97.2001 59.5805 97.2001 48.6H90.0001C90.0001 57.9613 86.8973 66.5877 81.6625 73.5208L87.4086 77.8594ZM79.4112 87.2402C82.3939 83.9735 85.2879 80.8116 87.4588 77.7912L81.6122 73.589C79.7385 76.1961 77.1644 79.0228 74.0942 82.3853L79.4112 87.2402ZM55.8001 136.8C55.8001 113.222 68.8842 98.7693 79.4112 87.2402L74.0942 82.3853C63.5968 93.882 48.6001 110.183 48.6001 136.8H55.8001ZM48.6001 144C52.5765 144 55.8001 140.776 55.8001 136.8H48.6001H48.6001V144ZM41.4001 136.8C41.4001 140.776 44.6236 144 48.6001 144V136.8H48.6001H41.4001ZM17.789 87.2402C28.316 98.7693 41.4001 113.222 41.4001 136.8H48.6001C48.6001 110.183 33.6034 93.882 23.106 82.3853L17.789 87.2402ZM9.74139 77.7911C11.9123 80.8116 14.8063 83.9735 17.789 87.2402L23.106 82.3853C20.0358 79.0228 17.4617 76.1961 15.588 73.589L9.74139 77.7911ZM9.75132e-05 48.6C9.75132e-05 59.5805 3.64598 69.7199 9.79164 77.8594L15.5377 73.5208C10.3029 66.5877 7.2001 57.9613 7.2001 48.6H9.75132e-05ZM48.6001 -2.45571e-05C21.7591 -2.45571e-05 9.75132e-05 21.7589 9.75132e-05 48.6H7.2001C7.2001 25.7354 25.7355 7.19998 48.6001 7.19998V-2.45571e-05ZM97.2001 48.6C97.2001 21.7589 75.4411 -2.45571e-05 48.6001 -2.45571e-05V7.19998C71.4647 7.19998 90.0001 25.7354 90.0001 48.6H97.2001Z" fill="url(#paint0_linear_14189_604)" mask="url(#path-1-outside-1_14189_604)"/>
            <defs>
            <linearGradient id="paint0_linear_14189_604" x1="48.6001" y1="3.59998" x2="48.6001" y2="140.4" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0.5"/>
            </linearGradient>
            </defs>
        </svg>
        <svg class="mapPin-shawdow" viewBox="0 0 47 29" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_f_14189_603)">
            <ellipse cx="23.5999" cy="16.2" rx="16.2" ry="9" fill="black" fill-opacity="0.12"/>
            </g>
            <defs>
            <filter id="filter0_f_14189_603" x="0.199902" y="-4.91142e-05" width="46.7999" height="32.4" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
            <feGaussianBlur stdDeviation="3.6" result="effect1_foregroundBlur_14189_603"/>
            </filter>
            </defs>
        </svg>

    </div>
</template>
<script setup>
    import { ref,computed,watch,defineProps,defineEmits,defineModel,onMounted } from 'vue'
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
                return 48.6;
            }
        },
        per : {
            type : Number,
            default : ()=>{
                return null;
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
        pinText : {
            type : String,
            default : ()=>{
                return null
            }
        },
        pinColor : {
            type : String,
            default : ()=>{
                return ""
            }
        },
        sos : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        zIndex : {
            type : String,
            default : ()=> "100"
        }
    })
    const w = ref(0);
    const path = ref("path");
    const emits = defineEmits(['click','mapPinPopupEv'])
    const model = defineModel('popShow');
    const popupShow = ref(true)
    const piechartShow = ref(props.per !== null ? true : false);
    const popClose = ()=>{
        popupShow.value = false;
        model.value = false;
        emits("mapPinPopupEv");
    }
    const mapPinWrapperStyle= computed(()=>{
        const style = {};
        style.width = props.width + "rem";
        style.zIndex = props.zIndex;
        return style
    })
    const mapPinCircleStyle = computed(()=>{
        const style = {};
        const per = props.per * (360 / 100);
        const color = (props.per < 14) ? "#eb4b43" : (props.per < 51) ? "#ef8633" : (props.per < 75) ? "#f7cd47" : "#57DED2";
        // const price = (props.width * 0.6) + 7;
        const price = w.value + 7;
        style.width = price + "rem";
        style.height = price + "rem";
        style.top = ((props.width - price) / 2) + "rem";
        style.left = ((props.width - price) / 2) + "rem";
        style.background = `conic-gradient(${color} ${per}deg, rgba(255,255,255,0.25) ${per}deg)`;
        return style;
    })
    const pieChartCircleSstyle = computed(()=>{
        const style = {};
        const color = (props.per < 14) ? "#eb4b43" : (props.per < 51) ? "#ef8633" : (props.per < 75) ? "#f7cd47" : "#57DED2";
        style.background = color;
        return style;
    });
    const pieChartCircleEstyle = computed(()=>{
        const style = {};
        const angle = (360 * 0.01) * props.per;
        style.transform = `rotate(${angle}deg)`
        return style;
    });
    const pieChartCircleECstyle = computed(()=>{
        const style = {};
        const color = (props.per < 14) ? "#eb4b43" : (props.per < 51) ? "#ef8633" : (props.per < 75) ? "#f7cd47" : "#57DED2";
        style.background = color;
        return style;
    })
    const mapPinIconCircleStyle = computed(()=>{
        const style = {};
        // const price = props.width * 0.6;
        const price = w.value;
        console.log("========================")
        console.log("props.width => ",props.width)
        console.log("props.width * 0.6 => ",(props.width * 0.6) / 2)
        style.width = price + "rem";
        style.height = price + "rem";
        style.top = ((props.width - price) / 2) + "rem";
        style.left = ((props.width - price) / 2) + "rem";
        style.background = fillColor.value;
        return style;
    })
    const fillColor = computed(()=>{
        let color = "#000";
        if(props.pinColor === 'blue'){
            color = "#6CA7F4";
        }else if(props.pinColor === 'gray'){
            color = "#9F9F9F";
        }else if(props.pinColor === 'purple'){
            color = "#C483F9";
        }else if(props.pinColor === 'orange'){
            color = "#FFA143";
        }else if(props.pinColor === 'pink'){
            color = "#F88BD4";
        }else if(props.pinColor === 'yellow'){
            color = "#F1CB3A";
        }else if(props.pinColor === 'black'){
            color = "#000";
        }else if(props.pinColor === 'green'){
            color = "#34C759";
        }else if(props.pinColor === 'red'){
            color = "#F00";
        }else if(props.pinColor === 'bluegreen'){
            color = "#1ED1D7";
        
        }else if( typeof(props.pinColor) === 'string' && ( props.pinColor.length === 4 || props.pinColor.length === 7 ) && props.pinColor.match(/^#/g)){
            color = props.pinColor
        }
        return color;
    })
    const firstNameStyle = computed(()=>{
        const style = {};
        style.fontSize = (props.width * 0.55) + "rem"
        return style;
    })
    const setCircleSize = ()=>{
        const style = path.value.getBoundingClientRect();
        w.value = (props.per !== null && props.per > -1) ? style.width - 17 :  style.width - 10;
    }
    const click = ()=>{
        emits('click')
    }
    watch(()=>props.width,()=>{
        setCircleSize();
    })
    onMounted(()=>{
        setCircleSize();
    })
</script>
<style type="scss" scoped>
    .mapPin-wrapper{
        position:relative;
        z-index:100;
        display:inline-block;
        width:80rem;
        .mapPin-pin{
            width:100%;
            height:100%;
        }
        .mapPin-shawdow{
            position:absolute;
            left:50%;
            bottom:3rem;
            transform:translate(-50%,50%);
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
        /* transform-origin:50%; */
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
        }
        &> .s{
            position:absolute;
            top:50%;
            left:50%;
            z-index:20000;
            width:3.5rem;
            height:3.5rem;
            border-radius:50%;
            transform-origin:50%;
        }
        &> .s{
            top:0;
            transform:translate(-50%,0)
        }
        &> .e{
            position:absolute;
            top:0;
            left:0;
            right:-0.3rem;
            bottom:-0.3rem;
            transform-origin:50%;
            border-radius:50%;
            z-index:1000;
            &> .c{
                content:"";
                position:absolute;
                top:0;
                left:50%;
                width:3.5rem;
                height:3.5rem;
                border-radius:50%;
                transform:translate(-50%,0);
                background:red;
            }
        }
    }
    .mapPin-icon-circle{
        position:absolute;
        top:10rem;
        left:10rem;
        z-index:50;
        display:flex;
        align-items:center;
        justify-content:center;
        width:57rem;
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
        &> p{
            display:flex;
            align-items:center;
            justify-content:center;
            padding:0;
            margin:0;
            font-size: 2em;
            font-style: normal;
            font-weight: 300;
            line-height: 1;
            letter-spacing: 0.288rem;
            color:#fff;
        }
        &> .none-icon{
            position:relative;
            display:block;;
            width:calc(100% - 2rem);
            height:calc(100% - 2rem);
            top:50%;
            left:50%;
            transform:translate(-50%,-50%);
            &> svg{
                position:absolute;
                width:100%;
                height:100%;
            }
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
        width:41rem;
        font-size:12rem;
        line-height:1;
        color:#fff;
        font-weight:bold;
        border-radius:10rem;
        transform:translate(100%,0);
        background:red;
    }
</style>