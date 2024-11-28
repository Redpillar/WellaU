<template>
    <div id="lnb-pc" :class="{open:props.open}">
        <div class="lnb-content-wrapper">
            <div class="lnb-content">
                <div class="top">
                    <div class="group-name-card" @click.stop="gropClick">
                        {{ props.group }}
                    </div>
                </div>
                <div class="con-wrapper">
                    <div class="content">
                        <div class="profile-box-pc">
                            <div class="top-wrappper">
                                <div class="top">
                                    <ProfileBox :name="person.name" :conText="person.text" :king="person.king" :birthday="person.birthday" :img="person.img"></ProfileBox>
                                </div>
                            </div>
                            <div class="con-wrappper">
                                <div class="con">
                                    <ProfileBox :name="friend.name" :conText="friend.text" :king="friend.king" :birthday="friend.birthday" :img="friend.img" v-for="(friend,index) in friends" :key='"profile_"+index'></ProfileBox>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="both">
                    <div class="btn-set">
                        <a-button class="wellau-btn" @click="logout">로그아웃</a-button>
                    </div>
                </div>
            </div>
        </div>
        <div class="lnb-thumb-pc" @click="lnbThumbClick"></div>
        <button class="mapBtn">
            <FundOutlined />
        </button>
    </div>
</template>
<script setup>
    import { defineProps,defineEmits,defineModel } from 'vue'
    import { FundOutlined } from '@ant-design/icons-vue'

    const props = defineProps({
        open : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        },
        group : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        person : {
            type : Object,
            default : ()=>{
                return {
                    name : "",
                    text : "",
                    king : false,
                    birthday : false,
                    img : {
                        src : "",
                        alt : "",
                    },
                }
            }
        },
        friends : {
            type : Array,
            default : ()=>{
                return [];
            }
        }
    })
    const emits = defineEmits(['gropClick','logout']);
    const model = defineModel("open")
    const lnbThumbClick = ()=>{
        model.value = !model.value;
    }
    const gropClick = ()=>{
        emits("gropClick");
    }
    const logout = ()=>{
        emits("logout");
    }
</script>
<style type="scss" scoped>
    #lnb-pc{
        position:fixed;
        top:0;
        bottom:0;
        left:0;
        width:0;
        transition:width ease .5s;
        background:rgba(255,255,255,0.45);
        &.open{
            width:400rem;
        }
        &> .mapBtn{
            left:auto;
            right: -20rem;
            transform:translate(100%, 0);
        }
    }
    .lnb-content-wrapper{
        position:absolute;
        top:0;
        bottom:0;
        width:100%;
    }
    .lnb-content{
        position:absolute;
        top:0;
        right:0;
        display:flex;
        flex-direction:column;
        width:400rem;
        height:100%;
        overflow:auto;
        background:#fff;
        &> *{
            width:100%;
        }
        &> .top{
            padding:20rem;
        }
        &> .con-wrapper{
            flex:1;
            display:flex;
            overflow:auto;
            &> .content{
                display:flex;
                flex-direction:column;
                flex:1;
                height:100%;
                overflow:auto;
                &> .profile-box-pc{
                    display:flex;
                    flex-direction:column;
                    flex:1;
                    width:100%;
                    overflow:auto;
                    &> *{
                        width:100%;
                    }
                    &> .top-wrappper{
                        padding:10rem 20rem;
                        &> .top{
                            padding:0 0 20rem 0;
                            border-bottom:1px solid #ededed;
                        }
                    }
                    &> .con-wrappper{
                        padding:10rem 20rem;
                        flex:1;
                        overflow:auto;
                    }
                }
            }
        }
        &> .both{
            padding:20rem;
        }
    }
    .lnb-thumb-pc{
        position:absolute;
        top:50%;
        right:-5rem;
        width:15rem;
        height:30rem;
        transform:translate(100%,-50%);
        cursor:pointer;
        /* background:red; */
        /* background:rgba(255,255,255,0.8); */
        &:before,&:after{
            content:"";
            position:absolute;
            top:0;
            bottom:0;
            width:2rem;
            border-radius:2rem;
            background:#333;
        }
        &:before{
            left:calc(50% - 2rem);
        }
        &:after{
            left:calc(50% + 2rem);
        }
    }
</style>