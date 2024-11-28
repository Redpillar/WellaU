<template>
    <div class="safe-zone-list-vbox">
        <i class="icon">
            <EnvironmentOutlined />
        </i>
        <div class="text">
            <div class="name">{{props.name}}</div>
            <div class="nickname">{{props.nickname}}</div>
            <div class="address">{{props.address}}</div>
        </div>
    </div>
</template>
<script setup>
    import { EnvironmentOutlined } from '@ant-design/icons-vue'
    import { defineProps } from 'vue'
    const props = defineProps({
        name : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        nickname : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        address : {
            type : String,
            default : ()=>{
                return "";
            }
        }
    })

</script>
<style type="scss" scoped>
    .safe-zone-list-vbox{
        display:flex;
        padding:10rem 10rem 20rem;
        border-bottom:1px solid #ededed;
        &> .icon{
            display:flex;
            align-items: center;
            font-size:30rem;
        }
        &> .text{
            display:flex;
            flex-direction:column;
            padding:0 0 0 20rem;
            &> .name{
                padding:0 0 5rem;
                font-size:14rem;
                line-height:1;
                font-weight:bold;
            }
            &> .nickname{
                padding:0 0 5rem;
                font-size:14rem;
                line-height:1;
                font-weight:bold;
            }
            &> .address{
                font-size:12rem;
                line-height:1;
                font-weight:normal;
                color:#666;
            }
        }
    }
</style>