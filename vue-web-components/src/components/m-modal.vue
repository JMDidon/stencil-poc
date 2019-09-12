<template>
  <dialog class="m-modal" :open="open">
    <div class="m-modal__content">
      <p>Da modal</p>
      <m-button v-on:click="close()">Close</m-button>
    </div>
  </dialog>
</template>

<script lang="ts">
  import { Component, Prop, Vue } from 'vue-property-decorator';
  import MButton from './m-button.vue';

  @Component({
    components: {
      MButton,
    },
    props: {
      open: {
        default: false,
      },
    }
  })
  export default class MModal extends Vue {
    @Prop() open: boolean = false;

    close() {
      this.$emit('dismiss');
      this.open = false;
    }
  }
</script>

<style lang="scss">
  .m-modal {
    border: 1px solid #666;
    border-radius: $unit / 2;
    box-shadow: 0 2px 10px 1px #666;

    &__content {
      display: flex;
      flex-flow: column wrap;
      justify-content: center;
      align-items: center;
      height: 10 * $unit;
      min-width: 10 * $unit;
    }
  }
</style>
