<template>
  <div class="container-id">
    <div class="byId">
      <img :src="char.image" :alt="char.name" />
      <h2>{{ char.name }}</h2>
      <h3>Id: {{ char.id }}</h3>
      <p :class="{ green: char.status === 'Alive', red: char.status === 'Dead' }">{{ char.status }}</p>
      <p>Specie: {{ char.species }} - {{ char.gender }}</p>
      <p v-if="char.origin.url">
        Origin:
        <a :href="char.origin.url">{{ char.origin.name }}</a>
      </p>
      <p v-else>Origin: {{ char.origin.name }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CharCard',
  props: {
    char: Object
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style scoped>
.container-id {
  display: flex;
  justify-content: center;
}
.byId {
  width: 20rem;
  min-width: fit-content;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid black;
  display: inline-block;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
}

.green {
  color: green;
}

.red {
  color: red;
}

.card > * {
  margin: 1rem;
}

.green {
  color: rgb(0, 99, 0);
}

.red {
  color: rgb(160, 0, 0);
}

a {
  color: rgb(34, 53, 116);
}

img {
  min-width: 5rem;
  object-fit: contain;
  margin-bottom: 1rem;
  border-radius: 50%;
  border: 2px solid black;
}
</style>
