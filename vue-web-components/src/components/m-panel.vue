<template>
  <aside class="m-panel" v-bind:class="{ 'm-panel--open': open }">
    <aside class="m-panel__overlay" v-on:click="close()"></aside>
    <section class="m-panel__content">
      <div class="m-panel__main">
        <slot name="content"></slot>
      </div>
      <footer class="m-panel__footer">
        <m-button v-on:click="close()">Close !</m-button>
      </footer>
    </section>
  </aside>
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
  export default class MPanel extends Vue {
    @Prop() open: boolean = false;

    close() {
      this.$emit('dismiss');
      this.open = false;
    }
  }
</script>

<style lang="scss">
  .m-panel {
    $padding: 2 * $unit;

    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    pointer-events: none;

    &--open {
      pointer-events: initial;

      .m-panel__overlay {
        opacity: 1;
        pointer-events: initial;
      }

      .m-panel__content {
        transform: translateX(0);
      }
    }

    &__overlay {
      width: 100%;
      height: 100%;
      opacity: 0;
      z-index: 10;
      background-color: rgba(10, 20, 30, 0.66);
      opacity: 0;
      pointer-events: none;
      transition: opacity .2s ease-in-out;
    }

    &__content {
      position: absolute;
      display: flex;
      flex-flow: column wrap;
      top: 0;
      right: 0;
      width: 30 * $unit;
      height: 100%;
      background-color: white;
      z-index: 20;
      transform: translateX(100%);
      transition: transform .2s ease-in-out;
    }

    &__main {
      flex: 1;
      padding: 2 * $unit;
    }

    &__footer {
      display: flex;
      align-items: center;
      height: 5 * $unit;
      padding: 0 2 * $unit;
      border-top: 1px solid #666;
    }
  }
</style>
