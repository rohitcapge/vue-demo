<template>
  <li>
    <base-card-layout>
      <header>
        <h2>{{ title }}</h2>
        <base-button mode="flat" @click="removeDetail(id)">Delete</base-button>
      </header>
      <h3>{{ description }}</h3>
      <p>
        <a :href="link">{{ link }}</a>
      </p>
    </base-card-layout>
  </li>
</template>

<script>
export default {
  props: ['id', 'title', 'description', 'link'],
  inject: ['removeDetail'],
};
</script>

<style scoped>
li {
  margin: auto;
  max-width: 40rem;
}

header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h3 {
  font-size: 1.25rem;
  margin: 0.5rem 0;
}

p {
  margin: 0.5rem 0;
}

a {
  text-decoration: none;
  color: #ce5c00;
}

a:hover,
a:active {
  color: #c89300;
}
</style>