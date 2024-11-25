<template>
    <div class="profileBox-warpper" :class="[{king : props.king},{birthday : props.birthday}]">
        <div class="inner-wrapper">
            <div class="picture">
                <div class="kingIcon" v-if="props.king">
                    <CrownFilled />
                </div>
                <div class="birthdayIcon" v-if="props.birthday">
                    <GiftOutlined />
                </div>
                <div class="pictueWrapper" :class="[{king : props.king},{birthday : props.birthday}]">
                    <div class="pictueInnerWrapper">
                        <img :src="img.src" :alt="img.alt" v-if="img.src" />
                    </div>
                </div>
            </div>
            <div class="infomation">
                <div class="name">
                    {{props.name}}
                    <div class="battery-icon" v-if="props.battery">
                        <span class="bar" :style="barStyle"></span>
                        <svg  viewBox="0 0 416 168"><path class="cls-1" stroke-width="20rem" stroke="currentColor" fill="none" d="M464.44,256.25h26.78C506,256.25,518,269,518,284.6v18.3c0,15.59-11.09,28.35-24.65,28.35H468.69" transform="translate(-112 -209.75)"/><rect stroke-width="20rem" stroke="#1d1d1b" fill="none" class="cls-1" x="10" y="10" width="345" height="148" rx="56.69"/></svg>
                        <span class="text">{{props.battery}}%</span>
                    </div>
                </div>
                <p class="content" v-if="props.conText.length > 0">
                    {{props.conText}}
                </p>
            </div>
        </div>
        <div class="right-area">
            <slot name="rightArea" />
        </div>
    </div>
</template>
<script setup>
    import { computed,defineProps } from 'vue'
    import { GiftOutlined,CrownFilled } from '@ant-design/icons-vue'
    const props = defineProps({
        name : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        conText : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        img : {
            type : Object,
            default : ()=>{
                return {
                    src : null,
                    alt : "프로필 사진입나다",
                };
            }
        },
        king : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        birthday : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        battery : {
            type : Number,
            default : ()=>{
                return null;
            }
        }
    })
    const barStyle = computed(()=>{
        const style = {};
        if(props.battery){
            const per = props.battery * 0.01;
            const width = `calc((100% - 11rem) * ${per})`
            style.width = width;
        }
        return style;
    })
</script>
<style type="scss" scoped>
    .profileBox-warpper{
        display:flex;
        .inner-wrapper{
            position:relative;
            display:flex;
            align-items:stretch;
            flex:1;
            &> .picture{
                position:relative;
                width:50rem;
                height:50rem;
                &> .pictueWrapper{
                    display:flex;
                    align-items:center;
                    justify-content:center;
                    width:100%;
                    height:100%;
                    border-radius:50%;
                    &> .pictueInnerWrapper{
                        position:relative;
                        width:100%;
                        height:100%;
                        border-radius:50%;
                        overflow:hidden;
                        background:orange;
                        &> img{
                            position:absolute;
                            top:50%;
                            left:50%;
                            width:50rem;
                            transform:translate(-50%,-50%);
                        }
                    }
                    &.birthday{
                        border:1rem solid orange;
                        background:#fff;
                        &> .pictueInnerWrapper{
                            width:calc(100% - 5rem);
                            height:calc(100% - 5rem);
                        }
                    }
                }
                .birthdayIcon{
                    position:absolute;
                    top:0;
                    right:0;
                    z-index:5;
                    transform:translate(5rem,-5rem);
                    font-size:20rem;
                }
                .kingIcon{
                    position:absolute;
                    top:-2rem;
                    left:50%;
                    z-index:5;
                    transform:translate(-50%,-50%);
                    font-size:20rem;
                }
            }
            &> .infomation{
                display:flex;
                justify-content:center;
                align-items:flex-start;
                flex-direction:column;
                padding:0 0 0 15rem;
                &> .name{
                    display:flex;
                    font-size:16rem;
                    line-height:1;
                    font-weight:bold;
                    &> .battery-icon{
                        position:relative;
                        width:40rem;
                        margin:0 0 0 5rem;
                        &> .bar{
                            position:absolute;
                            left:3rem;
                            top:3rem;
                            bottom:4rem;
                            z-index:2;
                            width:calc((100% - 11rem) * 1);
                            border-radius:7rem;
                            background:black;
                        }
                        &> svg{
                            position:relative;
                            z-index:5;
                        }
                        &> .text{
                            position:absolute;
                            right:0;
                            top:calc(50% - 1rem);
                            transform:translate(100%,-50%);
                            font-size:12rem;
                            line-height:1;
                        }
                    }
                }
                &> p{
                    padding:5rem 0 0 0;
                    margin:0;
                    font-size:12rem;
                    line-height:1;
                }
            }
        }
        &> .right-area{
            display:flex;
            align-items:center;
        }
        &+ .profileBox-warpper{
            margin-top:20rem;
        }
    }
</style>