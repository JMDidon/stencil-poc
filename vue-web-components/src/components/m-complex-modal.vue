<template>
  <dialog class="m-complex-modal" :open="open">
    <div class="m-complex-modal__content">
      <h1>{{ contents.title }}</h1>
      <p>{{ contents.content }}</p>
      <footer>
        <p>{{ contents.footer }}</p>
        <m-button v-on:click="close()">Close</m-button>
      </footer>
    </div>
  </dialog>
</template>

<script lang="ts">
import { Component, Prop, Vue } from 'vue-property-decorator';
import MButton from './m-button.vue';

export type MComplexModalContents = {
  title: string,
  content: string,
  footer: string,
};

@Component({
  components: {
    MButton,
  },
  props: {
    open: {
      default: false,
    },
    contents: {
      default: {
        title: '',
        content: '',
        footer: '',
      }
    }
  }
})
export default class MComplexModal extends Vue {
  @Prop() open: boolean = false;
  @Prop() contents: MComplexModalContents = {
    title: '',
    content: '',
    footer: '',
  };

  close() {
    this.$emit('dismiss');
    this.open = false;
  }
}
</script>

<style lang="scss">
  .m-complex-modal {
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
