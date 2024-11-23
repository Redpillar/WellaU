<template>
    <div class="profileBox-warpper" :class="[{king : props.king},{birthday : props.birthday}]">
        <div class="inner-wrapper">
            <div class="picture">
                <div class="kingIcon" v-if="props.king">
                    <ThunderboltOutlined />
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
    import { defineProps } from 'vue'
    import { GiftOutlined,ThunderboltOutlined } from '@ant-design/icons-vue'
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
                    top:0;
                    left:0;
                    z-index:5;
                    transform:translate(100%,-50%);
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
                    font-size:16rem;
                    line-height:1;
                    font-weight:bold;
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
    }
</style>