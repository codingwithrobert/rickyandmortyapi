<template>
  <div class="container">
    <article class="card" v-for="char in chars" :key="char.id">
      <img :src="char.image" :alt="char.name" />
      <h2>{{ char.name }}</h2>
      <h3>Id: {{ char.id }}</h3>
      <p
        :class="{ green: char.status === 'Alive', red: char.status === 'Dead' }"
      >Status: {{ char.status }}</p>
      <p>Specie :{{ char.species }} - {{ char.gender }}</p>
      <p v-if="char.type">({{ char.type }})</p>
      <p v-if="char.origin.url">
        Origin:
        <a :href="char.origin.url">{{ char.origin.name }}</a>
      </p>
      <p v-else>Origin: {{ char.origin.name }}</p>
    </article>
  </div>
</template>

<script>
export default {
  name: 'CharCard',
  props: {
    chars: Array
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

.container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  grid-template-columns: 1fr;
}


.card {
  min-width: fit-content;
  max-width: 500px;
  padding: 1rem;
  border-radius: 1rem;
  border: 1px solid black;
  display: inline-block;
  color: black;
  margin: 1rem;
  text-align: center;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
}
h2,h3 {
  margin-bottom: 1rem;
}
p {
  margin-bottom: 1rem;
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
  border-radius: 1rem;
  border: 2px solid black;
}
</style>
