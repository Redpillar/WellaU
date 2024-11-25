<template>
    <div>textfield : {{textField}}    </div>
    <input v-model="textField" @input='inputEv' :style="inputStyle" />
    <div>
        <div>childValue : {{childValue}}</div>
        <testComponent v-model:value="childValue" @input="childInputEv" />
    </div>
    <MapPin icon="yellow" :photo="photo" />
    <MapPin icon="people" />
    <MapPin icon="house" />
    <div style="display:inline-flex; flex-direction:column">
        <MapPin type="pie" v-model:popShow="popShow" :per="5" icon="people">
            <a href="tel:01099999999">010-0000-0000</a>번호로 연락 주세요
        </MapPin>
        <a-button @click="popEv">팝업</a-button>
    </div>
    <MapPin type="pie" :per="30" icon="people" />
    <MapPin type="pie" :per="40" icon="house" />
    <MapPin type="pie" :per="70" icon="house" />
    <MapPin type="pie" :per="90" icon="none" />
    <MapPin type="pie" :per="100" icon="house" />
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
</style>