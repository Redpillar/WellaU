<template>
    <div class="maxInput-wrapper" :class="[{disabled:props.disabled}]">
        <a-input v-model:value="textField" class="wellau-input" :maxlength="maxlength" :placeholder="placeholder" @input="inputEv" @keydown.enter="enterEv" :disabled="props.disabled" ref="input" />
        <div class="textFieldMixmunNumBox">{{textField.length}}/{{maxlength}}</div>    
    </div>
</template>
<script setup>
    import { ref,defineProps,defineEmits,defineModel,defineExpose } from 'vue'
    const props = defineProps({
        value : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        maxlength : {
            type : Number,
            default : ()=>{
                return 10;
            }
        },
        placeholder : {
            type : String,
            default : ()=>{
                return "";
            }
        },
        disabled : {
            type : Boolean,
            default : ()=> false
        }
    })
    const emit = defineEmits(["inputEv","enterEv"])
    const model = defineModel("value")
    const placeholder = ref(props.placeholder)
    const maxlength = ref(props.maxlength)
    const textField = ref(props.value);
    const input = ref();

    const inputEv = ()=>{
        emit("emit",textField.value)
        model.value = textField.value
    }
    
    const enterEv = ()=>{
        emit("enterEv",textField.value)
        model.value = textField.value
    }
    const focus = ()=>{
        input.value.focus();
    }
    defineExpose({
        focus
    })
</script>
<style type="scss" scoped>
    .maxInput-wrapper{
        .textFieldMixmunNumBox{
            display:flex;
            align-items:center;
            justify-content:flex-end;
            height:16rem;
            padding:0;
            margin:6rem 0 6rem 0;
            font-family: "Noto Sans";
            font-size: 13px;
            font-style: normal;
            font-weight: 400;
            line-height: 140%; /* 18.2px */
            color:#333;
        }
        &.disabled{
            .textFieldMixmunNumBox{
                opacity:0.4;
            }
        }
    }
</style>