<template>
  <div class="hello">
    <h1>Vue composition API</h1>
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

    <csm-universal-select
      :placeholder="'Can\'t see me'"
      @csmUniversalSelectChange="onChange">
      <csm-universal-select-group :name="'Object-based/no .prop'" slot="content">
        <template v-for="(item, i) in items">
          <csm-universal-select-item
            :key="i"
            :value="item"
            :label="item.value"
          ></csm-universal-select-item>
        </template>
      </csm-universal-select-group>
      <csm-universal-select-group :name="'Object-based/with .prop'" slot="content">
        <template v-for="(item, i) in items">
          <csm-universal-select-item
              :key="i"
              :value.prop="item"
              :label="item.value"
          ></csm-universal-select-item>
        </template>
      </csm-universal-select-group>
      <csm-universal-select-group :name="'Object-based/stringified'" slot="content">
        <template v-for="(item, i) in items">
          <csm-universal-select-item
              :key="i"
              :value="JSON.stringify(item)"
              :label="item.value"
          ></csm-universal-select-item>
        </template>
      </csm-universal-select-group>
      <csm-universal-select-group :name="'Primitive-based/no .prop'" slot="content">
        <template v-for="(item, i) in items">
          <csm-universal-select-item
            :key="i"
            :value="item.id"
            :label="item.value"
          ></csm-universal-select-item>
        </template>
      </csm-universal-select-group>
      <csm-universal-select-group :name="'Primitive-based/with .prop'" slot="content">
        <template v-for="(item, i) in items">
          <csm-universal-select-item
              :key="i"
              :value.prop="item.id"
              :label="item.value"
          ></csm-universal-select-item>
        </template>
      </csm-universal-select-group>

      <div slot="content">
        <h2>Raw items:</h2>
        <ul>
          <template v-for="(item, i) in items">
            <li :key="i" :value="item" :valueprop.prop="item">{{ item }}</li>
          </template>
        </ul>
      </div>
    </csm-universal-select>

    <div>Selected item is {{ selectedItem }}</div>
  </div>
</template>

<script lang="js">
import { ref } from '@vue/composition-api';

export default {
  setup() {
    const isModalOpen = ref(false);
    const isComplexModalOpen = ref(false);
    const isPanelOpen = ref(false);
    const items = ref([
      { id: 0, value: 'val 0' },
      { id: 1, value: 'val 1' },
      { id: 2, value: 'val 2' },
      { id: 3, value: 'val 3' },
      { id: 4, value: 'val 4' },
    ]);
    const selectedItem = ref(items.value[2]);

    function openModal() {
      isModalOpen.value = true;
    }

    function openComplexModal() {
      isComplexModalOpen.value = true;
    }

    function openPanel() {
      isPanelOpen.value = true;
    }

    function dismiss() {
      isModalOpen.value = false;
      isComplexModalOpen.value = false;
      isPanelOpen.value = false;
    }

    function onChange(item) {
      console.log('onChange triggered!', item);
      console.log('selectedItem?', selectedItem.value);
    }

    return {
      openModal,
      isModalOpen,
      openComplexModal,
      isComplexModalOpen,
      openPanel,
      isPanelOpen,
      dismiss,
      onChange,
      modalContents: {
        title: 'A "complex" modal in Vue',
        content: 'With nice content',
        footer: 'Close me plz',
      },
      items,
      selectedItem,
    }
  }
}
</script>

<style scoped lang="css">
m-button {
  margin: 1em;
}
</style>
