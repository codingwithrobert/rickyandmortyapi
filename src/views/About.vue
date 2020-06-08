<template>
  <div class="about">
    <vue-headful title="About" />
    <h2>This Website was created by Robert Hernandez</h2>
    <figure>
      <img :src="urlImage" alt="Eddy Murphy" />
    </figure>

    <a href="https://instagram.com/dimelorobert">
      <i class="fab fa-instagram"></i>
    </a>
    <p></p>
    <p>Resources that I used to create this website</p>
    <p>
      <a href="https://rickandmortyapi.com/">Rick And Morty API</a>
    </p>

    <p>
      <a href="https://www.npmjs.com/package/axios">Axios</a>
    </p>
    <p>
      <a href="https://www.npmjs.com/package/vue-headful">Vue-Headful</a>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      urlImage: 'https://bit.ly/3cGIaLK'
    };
  }
};
</script>

<style scoped>
.about {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
h2 {
  font-size: 2rem;
  margin-bottom: 5rem;
}
img {
  width: 20rem;
  border-radius: 50%;
  border: 2px solid black;
  box-shadow: 0 0 10px #f8fc57ff, 0 0 30px #66cc99ff;
}
.fa-instagram {
  font-size: 3.5rem;
  margin: 1rem;
}
p {
  margin: 0.5rem;
}
</style>
