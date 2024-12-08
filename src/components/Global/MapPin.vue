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
        <div class="mapPin-icon-circle" :style="mapPinIconCircleStyle" v-if="iconShow">
            <img :src="props.photo.src" :alt="props.photo.alt" v-if="props.photo.src !== '' " />
        </div>
        <div class="mapPin-sos" v-if="sos" @click.stop>SOS</div>
        <!-- <svg class="mapPin-pin" viewBox="0 0 138 182.2">
            <path class="st0" d="M136.6,69.1c0,37.4-30.4,79.3-67.7,111.3C35.9,153,1.3,106.5,1.3,69.1S31.6,1.4,68.9,1.4S136.6,31.7,136.6,69.1 z"/>
        </svg> -->
        <svg class="mapPin-pin" width="98" height="144" viewBox="0 0 98 144" fill="none" xmlns="http://www.w3.org/2000/svg" v-if="props.pinColor === 'blue'">
            <mask id="path-1-outside-1_14189_604" maskUnits="userSpaceOnUse" x="-0.399902" y="-0.400024" width="98" height="145" fill="black">
            <rect fill="white" x="-0.399902" y="-0.400024" width="98" height="145"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.6001 48.6C93.6001 58.7709 90.2258 68.1538 84.5355 75.6901C82.5132 78.5039 79.7792 81.4982 76.7527 84.8127C66.2405 96.3257 52.2001 111.703 52.2001 136.8C52.2001 138.788 50.5883 140.4 48.6001 140.4C46.6119 140.4 45.0001 138.788 45.0001 136.8C45.0001 111.703 30.9597 96.3257 20.4475 84.8127C17.421 81.4982 14.687 78.5039 12.6647 75.6901C6.97442 68.1538 3.6001 58.7709 3.6001 48.6C3.6001 23.7472 23.7473 3.59998 48.6001 3.59998C73.4529 3.59998 93.6001 23.7472 93.6001 48.6Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.6001 48.6C93.6001 58.7709 90.2258 68.1538 84.5355 75.6901C82.5132 78.5039 79.7792 81.4982 76.7527 84.8127C66.2405 96.3257 52.2001 111.703 52.2001 136.8C52.2001 138.788 50.5883 140.4 48.6001 140.4C46.6119 140.4 45.0001 138.788 45.0001 136.8C45.0001 111.703 30.9597 96.3257 20.4475 84.8127C17.421 81.4982 14.687 78.5039 12.6647 75.6901C6.97442 68.1538 3.6001 58.7709 3.6001 48.6C3.6001 23.7472 23.7473 3.59998 48.6001 3.59998C73.4529 3.59998 93.6001 23.7472 93.6001 48.6Z" fill="#1677FF"/>
            <path d="M84.5355 75.6901L81.6625 73.5208L81.637 73.5546L81.6122 73.589L84.5355 75.6901ZM76.7527 84.8127L79.4112 87.2402L79.4112 87.2402L76.7527 84.8127ZM20.4475 84.8127L17.789 87.2402L17.789 87.2402L20.4475 84.8127ZM12.6647 75.6901L15.588 73.589L15.5632 73.5546L15.5377 73.5208L12.6647 75.6901ZM87.4086 77.8594C93.5542 69.7199 97.2001 59.5805 97.2001 48.6H90.0001C90.0001 57.9613 86.8973 66.5877 81.6625 73.5208L87.4086 77.8594ZM79.4112 87.2402C82.3939 83.9735 85.2879 80.8116 87.4588 77.7912L81.6122 73.589C79.7385 76.1961 77.1644 79.0228 74.0942 82.3853L79.4112 87.2402ZM55.8001 136.8C55.8001 113.222 68.8842 98.7693 79.4112 87.2402L74.0942 82.3853C63.5968 93.882 48.6001 110.183 48.6001 136.8H55.8001ZM48.6001 144C52.5765 144 55.8001 140.776 55.8001 136.8H48.6001H48.6001V144ZM41.4001 136.8C41.4001 140.776 44.6236 144 48.6001 144V136.8H48.6001H41.4001ZM17.789 87.2402C28.316 98.7693 41.4001 113.222 41.4001 136.8H48.6001C48.6001 110.183 33.6034 93.882 23.106 82.3853L17.789 87.2402ZM9.74139 77.7911C11.9123 80.8116 14.8063 83.9735 17.789 87.2402L23.106 82.3853C20.0358 79.0228 17.4617 76.1961 15.588 73.589L9.74139 77.7911ZM9.75132e-05 48.6C9.75132e-05 59.5805 3.64598 69.7199 9.79164 77.8594L15.5377 73.5208C10.3029 66.5877 7.2001 57.9613 7.2001 48.6H9.75132e-05ZM48.6001 -2.45571e-05C21.7591 -2.45571e-05 9.75132e-05 21.7589 9.75132e-05 48.6H7.2001C7.2001 25.7354 25.7355 7.19998 48.6001 7.19998V-2.45571e-05ZM97.2001 48.6C97.2001 21.7589 75.4411 -2.45571e-05 48.6001 -2.45571e-05V7.19998C71.4647 7.19998 90.0001 25.7354 90.0001 48.6H97.2001Z" fill="url(#paint0_linear_14189_604)" mask="url(#path-1-outside-1_14189_604)"/>
            <defs>
            <linearGradient id="paint0_linear_14189_604" x1="48.6001" y1="3.59998" x2="48.6001" y2="140.4" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0.5"/>
            </linearGradient>
            </defs>
        </svg>
        <svg class="mapPin-pin" width="98" height="144" viewBox="0 0 98 144" fill="none" xmlns="http://www.w3.org/2000/svg" v-else>
            <mask id="path-1-outside-1_14189_645" maskUnits="userSpaceOnUse" x="-0.399902" y="-0.400024" width="98" height="145" fill="black">
            <rect fill="white" x="-0.399902" y="-0.400024" width="98" height="145"/>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.6001 48.6C93.6001 58.7709 90.2258 68.1538 84.5355 75.6901C82.5132 78.5039 79.7792 81.4982 76.7527 84.8127C66.2405 96.3257 52.2001 111.703 52.2001 136.8C52.2001 138.788 50.5883 140.4 48.6001 140.4C46.6119 140.4 45.0001 138.788 45.0001 136.8C45.0001 111.703 30.9597 96.3257 20.4475 84.8127C17.421 81.4982 14.687 78.5039 12.6647 75.6901C6.97442 68.1538 3.6001 58.7709 3.6001 48.6C3.6001 23.7472 23.7473 3.59998 48.6001 3.59998C73.4529 3.59998 93.6001 23.7472 93.6001 48.6Z"/>
            </mask>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M93.6001 48.6C93.6001 58.7709 90.2258 68.1538 84.5355 75.6901C82.5132 78.5039 79.7792 81.4982 76.7527 84.8127C66.2405 96.3257 52.2001 111.703 52.2001 136.8C52.2001 138.788 50.5883 140.4 48.6001 140.4C46.6119 140.4 45.0001 138.788 45.0001 136.8C45.0001 111.703 30.9597 96.3257 20.4475 84.8127C17.421 81.4982 14.687 78.5039 12.6647 75.6901C6.97442 68.1538 3.6001 58.7709 3.6001 48.6C3.6001 23.7472 23.7473 3.59998 48.6001 3.59998C73.4529 3.59998 93.6001 23.7472 93.6001 48.6Z" fill="#222222"/>
            <path d="M84.5355 75.6901L81.6625 73.5208L81.637 73.5546L81.6122 73.589L84.5355 75.6901ZM76.7527 84.8127L79.4112 87.2402L79.4112 87.2402L76.7527 84.8127ZM20.4475 84.8127L17.789 87.2402L17.789 87.2402L20.4475 84.8127ZM12.6647 75.6901L15.588 73.589L15.5632 73.5546L15.5377 73.5208L12.6647 75.6901ZM87.4086 77.8594C93.5542 69.7199 97.2001 59.5805 97.2001 48.6H90.0001C90.0001 57.9613 86.8973 66.5877 81.6625 73.5208L87.4086 77.8594ZM79.4112 87.2402C82.3939 83.9735 85.2879 80.8116 87.4588 77.7912L81.6122 73.589C79.7385 76.1961 77.1644 79.0228 74.0942 82.3853L79.4112 87.2402ZM55.8001 136.8C55.8001 113.222 68.8842 98.7693 79.4112 87.2402L74.0942 82.3853C63.5968 93.882 48.6001 110.183 48.6001 136.8H55.8001ZM48.6001 144C52.5765 144 55.8001 140.776 55.8001 136.8H48.6001H48.6001V144ZM41.4001 136.8C41.4001 140.776 44.6236 144 48.6001 144V136.8H48.6001H41.4001ZM17.789 87.2402C28.316 98.7693 41.4001 113.222 41.4001 136.8H48.6001C48.6001 110.183 33.6034 93.882 23.106 82.3853L17.789 87.2402ZM9.74139 77.7911C11.9123 80.8116 14.8063 83.9735 17.789 87.2402L23.106 82.3853C20.0358 79.0228 17.4617 76.1961 15.588 73.589L9.74139 77.7911ZM9.75132e-05 48.6C9.75132e-05 59.5805 3.64598 69.7199 9.79164 77.8594L15.5377 73.5208C10.3029 66.5877 7.2001 57.9613 7.2001 48.6H9.75132e-05ZM48.6001 -2.45571e-05C21.7591 -2.45571e-05 9.75132e-05 21.7589 9.75132e-05 48.6H7.2001C7.2001 25.7354 25.7355 7.19998 48.6001 7.19998V-2.45571e-05ZM97.2001 48.6C97.2001 21.7589 75.4411 -2.45571e-05 48.6001 -2.45571e-05V7.19998C71.4647 7.19998 90.0001 25.7354 90.0001 48.6H97.2001Z" fill="url(#paint0_linear_14189_645)" mask="url(#path-1-outside-1_14189_645)"/>
            <defs>
            <linearGradient id="paint0_linear_14189_645" x1="48.6001" y1="3.59998" x2="48.6001" y2="140.4" gradientUnits="userSpaceOnUse">
            <stop stop-color="white"/>
            <stop offset="1" stop-color="white" stop-opacity="0.5"/>
            </linearGradient>
            </defs>
        </svg>

        <svg class="mapPin-shawdow" width="47" height="29" viewBox="0 0 47 29" fill="none" xmlns="http://www.w3.org/2000/svg">
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
                return 48.6;
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
        const color = (props.per < 14) ? "#eb4b43" : (props.per < 51) ? "#ef8633" : (props.per < 75) ? "#f7cd47" : "#57DED2";
        const price = (props.width * 0.6) + 7;
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
        const price = props.width * 0.6;
        style.width = price + "rem";
        style.height = price + "rem";
        style.top = ((props.width - price) / 2) + "rem";
        style.left = ((props.width - price) / 2) + "rem";
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
            height:100%;
        }
        .mapPin-shawdow{
            position:absolute;
            left:50%;
            bottom:0;
            transform:translate(-50%,50%);
            width:12.2rem;
            height:9rem;
        }
    }

    .mapPin-pieChart{
        position:absolute;
        z-index:10;
        top:5rem;
        left:5rem;
        width:70rem;
        height:70rem;
        border-radius:35rem;
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