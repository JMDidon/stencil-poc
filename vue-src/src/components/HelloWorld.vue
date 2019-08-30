<template>
  <div class="hello">
    <h1>A nice Vue app</h1>
    <m-button v-on:click="openModal">Open modal</m-button>
    <m-button v-on:click="openPanel">Open panel</m-button>
    <m-modal :open="isModalOpen" @dismiss="dismiss"></m-modal>
    <m-panel :open="isPanelOpen" @dismiss="dismiss"></m-panel>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Vue {
  isModalOpen: boolean = false;
  isPanelOpen: boolean = false;

  openModal() {
    this.isModalOpen = true;
  }

  openPanel() {
    this.isPanelOpen = true;
  }

  dismiss() {
    this.isModalOpen = false;
    this.isPanelOpen = false;
  }
}
</script>

<style scoped lang="scss">
  m-button {
    margin: 1em;
  }
</style>
