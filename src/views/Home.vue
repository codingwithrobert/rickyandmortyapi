<template>
  <div class="home">
    <vue-headful title="Home" />
    <!-- logo -->
    <figure class="logo">
      <img
        class="logo"
        src="../assets/images/RickMortyLogo.png"
        alt="Rick and Morty logo"
      />
    </figure>

    <!-- search id -->
    <div class="center">
      <label class="label" for="byId">Search</label>
      <input
        type="number"
        v-model="id"
        id="byId"
        min="1"
        placeholder="insert your character id"
      />
      <button @click="searchChar(id)">Existence is Pain</button>
    </div>

    <div v-if="idChar.id" class="column">
      <button class="reset" @click="(idChar = {}), (id = null)">
        ⬅️ Go Back
      </button>
      <CharById :char="idChar"></CharById>
    </div>

    <div v-else>
      <!--SEARCHING -->

      <form id="search">
        <!-- search name -->
        <label class="center" for="byName">Name character:</label>
        <div class="container-searchname center">
          <input
            v-model="search.name"
            id="byName"
            type="search"
            placeholder="Search..."
          />
        </div>

        <!-- Filtros -->
        <div class="container-checkbox">
          <!-- Generos -->
          <p>
            Gender:
            <input
              type="checkbox"
              id="male"
              value="male"
              v-model="search.gender"
            />
            <label for="male">Male</label>
            <input
              type="checkbox"
              id="female"
              value="female"
              v-model="search.gender"
            />
            <label for="female">Female</label>
            <input
              type="checkbox"
              id="genderless"
              value="genderless"
              v-model="search.gender"
            />
            <label for="genderless">Genderless</label>
            <input
              type="checkbox"
              id="genderUnknown"
              value="unknown"
              v-model="search.gender"
            />
            <label for="genderUnknown">Unknown</label>
          </p>

          <!-- status -->
          <p>
            Status:
            <input
              type="checkbox"
              id="alive"
              value="alive"
              v-model="search.status"
            />
            <label for="alive">Alive</label>
            <input
              type="checkbox"
              id="dead"
              value="dead"
              v-model="search.status"
            />
            <label for="dead">Dead</label>
            <input
              type="checkbox"
              id="statusUnknown"
              value="unknown"
              v-model="search.status"
            />
            <label for="statusUnknown">Unknown</label>
          </p>

          <!-- specie -->
          <p>
            Species:
            <input
              type="checkbox"
              id="human"
              value="human"
              v-model="search.species"
            />
            <label for="human">Human</label>
            <input
              type="checkbox"
              id="alien"
              value="alien"
              v-model="search.species"
            />
            <label for="alien">Alien</label>
            <input
              type="checkbox"
              id="animal"
              value="animal"
              v-model="search.species"
            />
            <label for="animal">Animal</label>
          </p>
        </div>
        <div class="containe-button center">
          <button
            class="reset"
            @click="
              search = {
                gender: [],
                status: [],
                species: []
              }
            "
          >
            Reset Values
          </button>
        </div>
      </form>
      <CharCard :chars="filterChars"></CharCard>
    </div>
  </div>
</template>

<script>
// Importamos modulos y componentes requeridos
import CharCard from '@/components/CharCard.vue';
import CharById from '@/components/CharById.vue';
import api from '@/api/';

export default {
  name: 'Home',
  components: {
    CharCard,
    CharById
  },
  data() {
    return {
      chars: [],
      idChar: {},
      search: {
        gender: [],
        status: [],
        species: []
      },
      id: null
    };
  },
  computed: {
    filterChars() {
      let result = this.chars;

      /* By name */
      if (this.search.name) {
        result = result.filter(char =>
          char.name.toLowerCase().includes(this.search.name.toLowerCase())
        );
      }

      /* By gender */
      if (this.search.gender.length) {
        console.log(this.search.gender);
        result = result.filter(char =>
          this.search.gender.includes(char.gender.toLowerCase())
        );
      }

      /* By status */
      if (this.search.status.length) {
        console.log(this.search.status);
        result = result.filter(char =>
          this.search.status.includes(char.status.toLowerCase())
        );
      }

      /* By species */
      if (this.search.species.length) {
        console.log(this.search.species);
        result = result.filter(char =>
          this.search.species.includes(char.species.toLowerCase())
        );
      }

      return result;
    }
  },
  methods: {
    searchChar(id) {
      if (id > 0) {
        api.getChar(id).then(res => (this.idChar = res.data));
      }
    }
  },
  created() {
    api.getAll().then(res => (this.chars = res.data.results));
  }
};
</script>
<style scoped>
#byId {
  outline: none;
  background-color: #dfe;
  border: 0;
  border-top-left-radius: 0.3rem;
  border-bottom-left-radius: 0.3rem;
  height: 2rem;
  width: 40rem;
  margin-left: 0.6rem;
}
#byName {
  outline: none;
  background-color: #dfe;
  border: 0;
  border-radius: 0.3rem;
  height: 2rem;
  width: 41rem;
  margin-left: 0.6rem;
}
.center {
  display: flex;
  justify-content: center;
}
.column{
  display: flex;
  flex-direction: column;
}
p,
form {
  margin: 1.5rem;
  font-size: 1.2rem;
}
.label {
  font-size: 1.5rem;
}
.container-checkbox {
  display: flex;
  justify-content: center;
}
button {
  height: 2rem;
  border-top-right-radius: 0.3rem;
  border-bottom-right-radius: 0.3rem;
  border: 0;
  background-color: #08aeea;
  background-image: linear-gradient(0deg, #08aeea 0%, #2af598 100%);
  color: white;
  outline: none;
}
</style>
