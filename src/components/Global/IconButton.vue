<template>
    <button class="icon-button" :disabled="props.disabled" @click.stop="click">
        <PhoneFilled v-if="props.icon === 'phone'" />
        <MessageFilled v-if="props.icon === 'text'" />
        <ShareAltOutlined v-if="props.icon === 'sharing'" />
        <MinusCircleOutlined v-if="props.icon === 'minus'" />
        <PartitionOutlined v-if="props.icon === 'group'" />
    </button>
</template>
<script setup>
    import { defineProps,defineEmits } from 'vue'
    import { PhoneFilled,MessageFilled,ShareAltOutlined,MinusCircleOutlined,PartitionOutlined } from '@ant-design/icons-vue';

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
        console.log("===========")
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