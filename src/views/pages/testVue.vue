<template>
    <div>textfield : {{textField}}    </div>
    <input v-model="textField" @input='inputEv' :style="inputStyle" />
    <div>
        <div>childValue : {{childValue}}</div>
        <testComponent v-model:value="childValue" @input="childInputEv" />
    </div>
    <div class="dummy-box-area-rec"><MapPin icon="yellow" :photo="photo" /></div>
    <div class="dummy-box-area-rec"><MapPin icon="people" pinColor="blue" /></div>
    <div class="dummy-box-area-rec"><MapPin icon="house" /></div>
    <div class="dummy-box-area-rec">
        <MapPin type="pie" v-model:popShow="popShow" :per="5" icon="people">
            <a href="tel:01099999999">010-0000-0000</a>번호로 연락 주세요
        </MapPin>
        <a-button @click="popEv">팝업</a-button>
    </div>
    <div class="dummy-box-area-rec"><MapPin type="pie" :per="30" icon="people" /><div>per="30"</div></div>
    <div class="dummy-box-area-rec"><MapPin type="pie" :per="35" icon="house" /><div>per="35"</div></div>
    <div class="dummy-box-area-rec"><MapPin type="pie" :per="70" icon="house" /><div>per="70"</div></div>
    <div class="dummy-box-area-rec"><MapPin type="pie" :per="90" icon="none" /><div>per="90"</div></div>
    <div class="dummy-box-area-rec"><MapPin type="pie" :per="100" icon="house" /><div>per="100"</div></div>
</template>
<script setup>
    import { ref, computed } from 'vue'
    import testComponent from './testComponent'
    const textField = ref("텍스트 필드 입니다.");
    const childValue = ref("부모에서 값 전달");
    const childInputEv = (val)=>{
         childValue.value = val;
    }
    const inputEv = ($ev)=>{
      textField.value = $ev.target.value  
    }
    const inputStyle = computed(()=>{
        const style = {color : 'red'};
        return style
    })
    const popShow = ref(true);
    const popEv = ()=>{
        popShow.value = true;
    }
    const photo = ref({
        src : require('../../assets/img/dummy-profile01.jpeg'),
        alt : '홍길동님의 프로필 사진입니다'
    })
</script>
<!--
<script>
    import { ref,onMounted,computed, watch } from 'vue'
    import { useStore } from 'vuex'
    import testComponent from './testComponent'
    export default {
        name : "testVue",
        props : {
            id : {
                type : String,
                default : ()=>{
                    return "exid";
                }
            }
        },
        components : {
            testComponent
        },
        setup(){

            const cildValue = ref("부모에서 값 전달")


            const textField = ref("아아아아아아아아");
            const inputEv = ($ev)=>{
                textField.value = $ev.target.value
            }
            const inputStyle = computed(()=>{
                const style = {};
                style.color = "red";
                console.log("style : ",style)
                return style;
            })
            const stroe = useStore();
            console.log("useStore : ",stroe)
            console.log("useStore.state.pageStatus : ",stroe.state.pageStatus)

            onMounted(()=>{

            })
            watch(textField,(n)=>{
                console.log("watch n : ",n)
            })

            const childInputEv = (val)=>{
                console.log("val : ",val);
                cildValue.value = val;
            }
            return {
                textField,
                inputEv,
                inputStyle,
                cildValue,
                childInputEv
            }
        },
    }
</script>
-->
<style type="scss" scoped>
    .dummy-box-area-rec{
        display:inline-flex;
        flex-direction:column;
        align-content:center;
    }
</style>