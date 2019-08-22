<template>
  <div class="hello">
    <h1>A nice Vue app</h1>
    <m-button v-on:click="open">Open modal</m-button>
    <m-modal :open="isOpen" @dismiss="dismiss"></m-modal>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  isOpen: boolean = false;

  open() {
    this.isOpen = true;
  }

  dismiss() {
    this.isOpen = false;
  }
}
</script>

<style scoped lang="scss"></style>
