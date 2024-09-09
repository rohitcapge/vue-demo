<template>
  <teleport to="body">
    <dialog open>
      <base-card-layout>
        <header>
          <slot name="header">
            <h3>{{ title }}</h3>
          </slot>
        </header>
        <section>
          <slot></slot>
          <slot name="action">
            <base-button @click="$emit('close-dialog')">Close</base-button>
          </slot>
        </section>
      </base-card-layout>
    </dialog>
  </teleport>
</template>

<script>
import BaseButton from './BaseButton.vue';
export default {
  components: { BaseButton },
  props: ['title'],
  emits: ['close-dialog'],
};
</script>

<style>
</style>