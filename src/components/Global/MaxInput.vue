<template>
    <div class="maxInput-wrapper">
        <a-input v-model:value="textField" :maxlength="maxlength" :placeholder="placeholder" @input="inputEv" @keydown.enter="enterEv" />
        <div class="textFieldMixmunNumBox">{{textField.length}}/{{maxlength}}</div>    
    </div>
</template>
<script>
    export default {
        name : "MaxInput",
        props : {
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
        },
        components : {},
        computed : {},
        data(){return{
            textField : "",
        }},
        created(){},
        mounted(){},
        methods : {
            enterEv(){
                this.$emit("enterEv",this.textField)
            },
            inputEv(){
                this.$emit("imput")
            }
        },
        watch : {
            value : {
                immediate : true,
                handler : function(n,o){
                    if(n !== o){
                        this.textField = n;
                    }
                }
            }
        },
    }
</script>
<style type="scss" scoped>

    .textFieldMixmunNumBox{
        font-size:12rem;
        color:#ccc;
        text-align:right;
    }
</style>