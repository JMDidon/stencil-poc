<template>
  <div class="hello">
    <h1>A nice Vue app</h1>
    <m-button v-on:click="openModal">Open modal</m-button>
    <m-button v-on:click="openComplexModal">Open complex modal</m-button>
    <m-button v-on:click="openPanel">Open panel</m-button>
    <m-modal :open="isModalOpen" @dismiss="dismiss"></m-modal>

    <!--
      There is a little trick here in order to pass objects to children components.
      Whenever the property isn't a string (as it is the case with `open`),
      you will have to add `.prop` at the end of the binding.
    -->
    <m-complex-modal :open="isComplexModalOpen" :contents.prop="modalContents" @dismiss="dismiss"></m-complex-modal>

    <m-panel :open="isPanelOpen" @dismiss="dismiss"></m-panel>
  </div>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import MButton from './m-button.vue';
  import MComplexModal from './m-complex-modal.vue';
  import MModal from './m-modal.vue';
  import MPanel from './m-panel.vue';

  @Component({
    data: () => {
      return {
        modalContents: {
          title: 'A "complex" modal in Vue',
          content: 'With nice content',
          footer: 'Close me plz',
        },
      };
    },
    components: {
      MButton,
      MComplexModal,
      MModal,
      MPanel,
    },
  })
  export default class HelloWorld extends Vue {
    isModalOpen: boolean = false;
    isComplexModalOpen: boolean = false;
    isPanelOpen: boolean = false;
    modalContents = {};

    openModal() {
      this.isModalOpen = true;
    }

    openComplexModal() {
      this.isComplexModalOpen = true;
    }

    openPanel() {
      this.isPanelOpen = true;
    }

    dismiss() {
      this.isModalOpen = false;
      this.isComplexModalOpen = false;
      this.isPanelOpen = false;
    }
  }
</script>

<style scoped lang="scss">
  m-button {
    margin: 1em;
  }
</style>
