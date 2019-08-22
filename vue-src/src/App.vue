<template>
  <div id="app">
    <HelloWorld />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import HelloWorld from './components/HelloWorld.vue';

@Component({
  components: {
    HelloWorld,
  },
})
export default class App extends Vue {}
</script>

<style lang="scss">
  *, *::before, *::after {
    font-family: sans-serif;
    box-sizing: border-box;
  }
</style>
