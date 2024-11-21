<template>
    <div id="header" :class="[type]">
        <div class="header-wrapper">
            <div class="header-area-left">
                <LeftOutlined />
                <StarOutlined v-if="type == 'type4' && !like" @click='starIconClick' />
                <StarFilled :style='starFilledStyle' v-if="type == 'type4' && like" @click='starIconClick' />
            </div>
            <div class="header-area-center">
                <slot name="title" v-if="type == 'type2'"></slot>
            </div>
            <div class="header-area-right">
                <RedoOutlined />
                 <a-button type="link">계속하기</a-button>
            </div>
        </div>
    </div>
</template>
<script>
    import {onMounted} from 'vue'
    import {LeftOutlined,StarOutlined,StarFilled,RedoOutlined} from '@ant-design/icons-vue'
    export default {
        name : "HeaderVue",
        props : {
            value : {
                type : Object,
                default : ()=>{
                    return {
                        like : false,
                    }
                }
            },
            headerData : {
                type : Object,
                default : ()=>{
                    return {
                        like : false,
                    }
                }
            },
            type : {
                type : String,
                default : ()=>{
                    return "type2";
                }
            },
        },
        components : {
            "LeftOutlined" : LeftOutlined,
            "StarOutlined" : StarOutlined,
            "StarFilled" : StarFilled,
            "RedoOutlined" : RedoOutlined,
        },
        computed : {
            starFilledStyle(){
                const style = {
                    color : 'yellow'
                }
                return style;
            }
        },
        data(){return{
            like  : false,
        }},
        setup(){
            onMounted(()=>{
            })
        },
        created(){},
        mounted(){},
        methods : {
            starIconClick(){
                const value = !this.like;
                console.log("this.like : ",this.like)
                console.log("value : ",value)
                const data = {like:value}
                this.$emit("headerChangeEv",data)
            }
        },
        watch : {
            value : {
                immediate : true,
                deep : true,
                handler : function(n,o){
                    console.log("value(n) : ",n)
                    console.log("value(o) : ",o)
                    this.like = n.like
                }
            },
        }
    }
</script>
<style type="scss" scoped>
    #header{
        background:gray;
        .header-wrapper{
            display:flex;

            font-size:20rem;
            font-weight:bold;
            &> .header-area-left{
                background:red;
            }
            &> .header-area-center{
                flex:1;
                background:blue;
            }
            &> .header-area-right{
                .css-dev-only-do-not-override-1p3hq3p.ant-btn.ant-btn-link{
                    color:#000;
                }
            }
        }
    }
</style>
