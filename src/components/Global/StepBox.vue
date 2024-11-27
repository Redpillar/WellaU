<template>
    <div class="step-box">
        <div class="con">
            <ul>
                <li class="step-box-list" :class="{active:props.step === (index+1)}" v-for="(list,index) in props.list" :key="'list_'+index">
                    <div class="num">{{index + 1}}</div>
                    <p>
                        <span class="s">{{list.time}}</span>
                        <span class="b">{{list.text}}</span>
                    </p>
                    <i class="arrow" v-if="index > 0">
                        <ArrowDownOutlined />
                    </i>
                </li>
            </ul>
        </div>
    </div>
</template>
<script setup>
    import { defineProps } from 'vue'
    import { ArrowDownOutlined } from '@ant-design/icons-vue'

    const props = defineProps({
        list : {
            type : Array,
            default : ()=>{
                return [];
            }
        },
        step : {
            type : Number,
            default : ()=>{
                return 1;
            }
        }
    })
</script>
<style type="scss" scoped>
    .step-box-list{
        position:relative;
        display:flex;
        align-items:stretch;
        &> .num{
            display:flex;
            justify-content:center;
            align-items:center;
            width:20rem;
            font-size:16rem;
            font-weight:bold;
            background:gray;
        }
        &> p{
            flex:1;
            padding:20rem 10rem;
            margin:0;
            font-size:16rem;
            line-height:1;
            background:#ededed;
            &> .s{
                display:block;
                padding:0 0 5rem 0;
                font-size:12rem;
            }
        }
        &+ .step-box-list{
            margin-top:30rem;
        }
        &.active{
            &> .num{
                background:orange;
            }
        }
    }

    .arrow{
        position:absolute;
        /* top:-10rem; */
        left:50%;
        display:flex;
        align-items:center;
        justify-content:center;
        width:30rem;
        height:30rem;
        font-size:25rem;
        transform:translate(-50%,-100%);
    }
</style>