<template>
    <button class="icon-button" :disabled="props.disabled" @click.stop="click">
        <PhoneFilled v-if="props.icon === 'phone'" />
        <MessageFilled v-if="props.icon === 'text'" />
    </button>
</template>
<script setup>
    import { defineProps,defineEmits } from 'vue'
    import { PhoneFilled,MessageFilled } from '@ant-design/icons-vue';

    const props = defineProps({
        icon : {
            type : String,
            default : ()=>{
                return "phone"
            }
        },
        disabled : {
            type : Boolean,
            default : ()=>{
                return false;
            }
        }
    })
    const emits = defineEmits(['click'])

    const click = ()=>{
        emits("click",props.icon);
    }
</script>
<style type="scss" scoped>
    .icon-button{
        font-size:30rem;
        border:none;
        outline:none;
        background:transparent;
        &[disabled]{
            color:#ccc;
        }
        &+ .icon-button{
            margin-left:10rem;
        }
    }
</style>