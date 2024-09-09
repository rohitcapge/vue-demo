<template>
  <base-card-layout>
    <base-button
      @click="setShowComponent('stored-details')"
      :mode="getStoredDetailsMode"
      >Show Details</base-button
    >
    <base-button
      :mode="getAddDetailsMode"
      @click="setShowComponent('add-details')"
      >Add Details</base-button
    >
  </base-card-layout>
  <component :is="showComponent"></component>
</template>

<script>
import storedDetails from '../storedDetails.vue';
import AddDetails from '../AddDetails.vue';

export default {
  components: { storedDetails, AddDetails },
  data() {
    return {
      showComponent: 'stored-details',
      storedDetails: [
        {
          id: '1',
          title: 'Officatial Site',
          description: 'learn vue on the offical site',
          link: 'www.vue.org',
        },
        {
          id: '2',
          title: 'Google ',
          description: 'search anything on the google',
          link: 'www.google.com',
        },
      ],
    };
  },
  computed: {
    getStoredDetailsMode() {
      return this.showComponent === 'stored-details' ? '' : 'flat';
    },
    getAddDetailsMode() {
      return this.showComponent === 'add-details' ? '' : 'flat';
    },
  },
  provide() {
    return {
      storedDetails: this.storedDetails,
      addDetailList: this.addDetailList,
      removeDetail: this.removeDetail,
    };
  },
  methods: {
    setShowComponent(component) {
      this.showComponent = component;
    },
    addDetailList(detail) {
      // console.log(detail, "detail")
      this.storedDetails.unshift(detail);
      this.showComponent = 'stored-details';
    },
    removeDetail(id) {
      console.log(id,"id")
      const removedIndex = this.storedDetails.findIndex(
        (detail) => detail.id === id
      );
      this.storedDetails.splice(removedIndex, 1);
      console.log(removedIndex, this.storedDetails);
    },
  },
};
</script>

<style>
</style>