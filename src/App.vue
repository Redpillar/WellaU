<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <HelloWorld msg="Welcome to Your Vue.js App"/>
  <a-config-provider
    :theme="css"
  >
  </a-config-provider>
    <a-button type="primary">
      Primary Button
    </a-button>
    <a-button type="primary">Primary Button</a-button>
    <a-button>Default Button</a-button>
    <a-button type="dashed">Dashed Button</a-button>
    <a-button type="text">Text Button</a-button>
    <a-button type="link">Link Button</a-button>
    <a-radio :checked="checked">Radio</a-radio>



</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import './assets/css/common.css';

export default {
  name: 'App',
  components: {
    HelloWorld
  },
  data : ()=>{
    return {
      checked : true,
      css : {
        token: {
          Button: {
            colorPrimary : 'skyblue',
            borderRadius : 4,
            fontColor : 'red',
          },
          Radio : {
            colorPrimary : 'green',
          },
        },
      }
    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
