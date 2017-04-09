<template>
  <!-- /src/App.vue -->
  <div id="app">
    <img src="./assets/logo.png">
    <button v-on:click="toggleCropper">Toggle</button>
    <div style="height: 200px; width: 200px;" v-if="showCropper">
      <img v-cropper="cropOptions" src="./assets/images/sample.png" alt="jQuery Meme" sytle="height: 200px;">
    </div>
    <img v-snippet="{a:12,b:33}"
      src="./assets/images/sample.png"
      style="width:200px; height: 200px;"></img>
    <router-view></router-view>
  </div>
</template>

<script>
  import Cropper from "./directives/Cropper"
  import Snippet from "./directives/Snippet"

  export default {
    name: 'app',
    // 下面这个 directives ，必须用 {}，不能用[]。
    directives: {
      Cropper,
      Snippet
    },
    data() {
      return {
        cropOptions: {
          viewMode: 3,
          zoomable: true
        },
        showCropper: true
      }
    },
    methods: {
      toggleCropper: function () {
        this.cropOptions.zoomable = !this.cropOptions.zoomable
        this.showCropper = !this.showCropper
      }
    }
  }

</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

</style>
