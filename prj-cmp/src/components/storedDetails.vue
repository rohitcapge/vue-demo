<template>
  <ul>
    <stored-detail-list
      v-for="detail in storedDetails"
      :key="detail.id"
      :id="detail.id"
      :title="detail.title"
      :description="detail.description"
      :link="detail.link"
    ></stored-detail-list>
  </ul>
</template>

<script>
import storedDetailList from '../components/storedDetailList.vue';

export default {
  components: { storedDetailList },
  inject: ['storedDetails'],
};
</script>

<style>
ul {
  list-style: none;
  margin: 0px;
}
</style>