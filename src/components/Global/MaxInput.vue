<template>
    <div class="maxInput-wrapper">
        <a-input v-model:value="textField" :maxlength="maxlength" :placeholder="placeholder" @input="inputEv" @keydown.enter="enterEv" />
        <div class="textFieldMixmunNumBox">{{textField.length}}/{{maxlength}}</div>    
    </div>
</template>
<script setup>
    import { ref,defineProps,defineEmits,defineModel } from 'vue'
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
        }
    })
    const emit = defineEmits(["inputEv","enterEv"])
    const model = defineModel("value")
    const placeholder = ref(props.placeholder)
    const maxlength = ref(props.maxlength)
    const textField = ref(props.value);

    const inputEv = ()=>{
        emit("emit",textField.value)
        model.value = textField.value
    }
    
    const enterEv = ()=>{
        emit("enterEv",textField.value)
        model.value = textField.value
    }
</script>
<style type="scss" scoped>

    .textFieldMixmunNumBox{
        font-size:12rem;
        color:#ccc;
        text-align:right;
    }
</style>