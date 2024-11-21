<template>
    <div id="header" :class="[type]" :style="headerWrapperStyle" v-if="headerShow">
        <div class="header-wrapper">
            <!-- left area -->
            <div class="header-area-left">
                <LeftOutlined v-if="type == 'type1' || type == 'type2' || type == 'type4' || type == 'type6'" @click="backBtnEvent" />
                <StarOutlined v-if="type == 'type3' && !like" @click='starIconClick' />
                <StarFilled :style='starFilledStyle' v-if="type == 'type3' && like" @click='starIconClick' />
                <MenuOutlined v-if="type == 'type5'" @click="menuIconClickEv" />
            </div>
            <!-- center area -->
            <div class="header-area-center" :style="headerAreaCenterStyle" v-if="type == 'type1' || type == 'type2' || type == 'type3' || type == 'type5'">
                <slot name="title"></slot>
            </div>
            <!-- right area -->
            <div class="header-area-right">
                <RedoOutlined v-if="type == 'type3'" />
                 <a-button type="link" v-if="type == 'type2'" @click="clickNextEvent">계속하기</a-button>
                 <WechatOutlined v-if="type == 'type6'" @click="groupClicEv2" />
                 <AliwangwangOutlined v-if="type == 'type6'" @click="groupClicEv1" />
                 <div class="alert-icon-wrapper" v-if="type == 'type5' || type == 'type6'">
                    <BellFilled @click="alertIconClick" />
                    <span class="num">{{valueAlert}}</span>
                </div>
            </div>
            <!-- header pop up -->
            <div class="header-pop" v-if="popShow">
                <slot name="headerPop">
                    <div v-if="type == 'type2'">
                        <MaxInput v-model:value="inputVal" :maxlength="maxlength" :placeholder="maxInputPlaceholder" @input="maxInputEvent" @enterEv="maxInputEnterEvent" />
                        <div class="header-pop-s-tit">안심존 실행 시간을 설정해 주세요</div>
                        <a-time-picker v-model:value="toTime" /> - <a-time-picker v-model:value="fromTime" />
                    </div>
                </slot>
            </div>
        </div>
    </div>
</template>
<script>
    import {ref,onMounted} from 'vue'
    import {LeftOutlined,StarOutlined,StarFilled,RedoOutlined,MenuOutlined,BellFilled,AliwangwangOutlined,WechatOutlined} from '@ant-design/icons-vue'
    export default {
        name : "HeaderVue",
        props : {
            value : {
                type : Object,
                default : ()=>{
                    return {
                        headerShow : true,
                        like : false,
                        alert : 0,
                        popShow : false,
                        inputVal : "",
                        maxlength : 10,
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
        },
        components : {
            "LeftOutlined" : LeftOutlined,
            "StarOutlined" : StarOutlined,
            "StarFilled" : StarFilled,
            "RedoOutlined" : RedoOutlined,
            "MenuOutlined" : MenuOutlined,
            "BellFilled" : BellFilled,
            "AliwangwangOutlined" : AliwangwangOutlined,
            "WechatOutlined" : WechatOutlined,
        },
        computed : {
            headerWrapperStyle(){
                const style = {};
                if(this.type === 'type4' || this.type === 'type5' || this.type === 'type6'){
                    style.height = 0;
                }
                return style
            },
            starFilledStyle(){
                const style = {
                    color : 'yellow'
                }
                return style;
            },
            headerAreaCenterStyle(){
                const style = {};
                if(this.type === 'type3' || this.type === 'type5'){
                    style.textAlign = "center"
                }
                return style
            }
        },
        data(){return{
            headerShow : true,
            type : "type1",
            like  : false,
            valueAlert : 0,
            headerPopTextField : "",
            popShow : false,
            maxlength : 20,
            inputVal : "asdf",
            toTime : "",
            fromTime : "",
            maxInputPlaceholder : "안심존 이름을 입력해 주세요!!!!",
            pickerTime : "",
        }},
        setup(){
            const timeType = ref("");
            onMounted(()=>{
            })
            return timeType;
        },
        created(){},
        mounted(){},
        methods : {
            backBtnEvent(){
                this.$router.go(-1);
            },
            starIconClick(){
                const value = !this.like;
                const data = {like:value}
                this.$emit("headerChangeEv",data)
            },
            // 계속하기 클릭 이벤트
            clickNextEvent(){
                this.$emit("clickNextEvent");
            },
            // 햄버거 메뉴 클릭
            menuIconClickEv(){
            },
            // 알림 아이콘 클릭
            alertIconClick(){
                this.$emit("alertIconClick")
            },
            // 그룹아이콘 클릭1
            groupClicEv1(){
                this.$emit("groupClicEv1");
            },
            // 그룹아이콘 클릭2
            groupClicEv2(){
                this.$emit("groupClicEv2")
            },
            // maxInput enter event
            maxInputEnterEvent(value){
                this.$emit("maxInputEnterEvent",value);
            },
            // maxInput input event
            maxInputEvent($event){
                this.inputVal = $event.target.value;
                this.$emit("maxInputEvent",this.inputVal)
            },
            pickerTimeOnChange(val){
                console.log("pickerTimeOnChange : ",val)
            },
            pickerTimeOnOk(val){
                console.log("pickerTimeOnOk : ",val)
            },
        },
        watch : {
            value : {
                immediate : true,
                deep : true,
                handler : function(n){
                    console.log("n.headerShow : ",n.headerShow)
                    this.headerShow = n.headerShow
                    this.type = n.type;
                    this.like = n.like;
                    this.valueAlert = n.alert;
                    this.popShow = n.popShow;
                    this.inputVal = n.inputVal;
                    this.maxlength = n.maxlength;
                }
            },
        }
    }
</script>
<style type="scss" scoped>
    #header{
        position:relative;
        z-index:100;
        background:#fff;
        &.type6{

            .header-wrapper{
                justify-content:space-between;
            }
        }
        &.type5{

            .header-wrapper{
                justify-content:space-between;
                &> .header-area-left{
                    position:relative;
                    z-index:5;
                }
                &> .header-area-center{
                    position:absolute;
                    top:0;
                    right:0;
                    bottom:0;
                    left:0;
                    justify-content:center;
                }
                &> .header-area-right{
                    position:relative;
                    z-index:5;
                }
            }
        }
        .header-wrapper{
            position:relative;
            display:flex;
            align-items:flex-start;
            /* height: 30rem; */
            font-size:20rem;
            font-weight:bold;
            &> .header-area-left{
                position:relative;
                z-index:5;
                display:flex;
                align-items:center;
                height: 30rem;
            }
            &> .header-area-center{
                flex:1;
                display:flex;
                align-items:center;
                height: 30rem;
            }
            &> .header-area-right{
                position:relative;
                z-index:5;
                display:flex;
                align-items:center;
                height: 30rem;
                .css-dev-only-do-not-override-1p3hq3p.ant-btn.ant-btn-link{
                    color:#000;
                }
            }
        }
    }
    .alert-icon-wrapper{
        position:realtive;
        &> .num{
            position:absolute;
            top:0;
            right:0;
            display:flex;
            align-items:center;
            justify-content:center;
            width:10rem;
            height:10rem;
            font-size:8rem;
            line-height:1;
            font-weight:bold;
            color:#fff;
            border-radius:5rem;
            background:red;
        }
    }
    .header-pop{
        position:absolute;
        bottom:0;
        left:0;
        right:0;
        transform:translate(0,100%);
        background:#fff;
    }
    .header-pop-s-tit{
        font-size:12rem;
    }
</style>
