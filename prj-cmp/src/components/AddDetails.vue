<template>
  <base-dialog v-if="isFormInvalid" @closeDialog='closeDialog'>
    <template #header>Error</template>
    <template> form is invalid </template>
    <template #action>
      <base-button @click="closeDialog()">Okay</base-button>
    </template>
  </base-dialog>
  <base-card-layout>
    <form @submit.prevent="submitData">
      <div>
        <label> Title</label>
        <input v-model="inputTitle" />
      </div>
      <div>
        <label> Description</label>
        <textarea v-model="inputDescription" />
      </div>
      <div>
        <label> Enter Url</label>
        <input v-model="inputUrl" />
      </div>
      <base-button type="submit">Add Details</base-button>
    </form>
  </base-card-layout>
</template>

<script>
import BaseButton from './UI/BaseButton.vue';
export default {
  components: { BaseButton },
  inject: ['addDetailList'],
  data() {
    return {
      inputTitle: '',
      inputDescription: '',
      inputUrl: '',
      isFormInvalid: false,
    };
  },
  methods: {
    submitData() {
      const detail = {
        id: new Date().toISOString(),
        title: this.inputTitle,
        description: this.inputDescription,
        url: this.inputUrl,
      };
      if (
        this.inputTitle.length > 0 &&
        this.inputDescription.length > 0 &&
        this.inputUrl.length > 0
      ) {
        this.isFormInvalid = false;
        this.addDetailList(detail);
      } else {
        this.isFormInvalid = true;
      }
    },
    closeDialog(){
      this.isFormInvalid = false
    }
  },
};
</script>

<style>
</style>