<template>
  <button class="m-button">
    <slot />
  </button>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({})
export default class MButton extends Vue {}
</script>

<style lang="scss">
  .m-button {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 3 * $unit;
    padding: .33 * $unit  $unit;
    background-color: #6666DD;
    color: #FAFAFA;
    border-radius: 3px;
    border: none;
  }
</style>
