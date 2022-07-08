<template>
  <nav>
    <ul>
      <li v-for="rota in rotas">
        <router-link :to="rota.path ? rota.path : '/'" class="router">
          {{ rota.titulo }}
        </router-link>
      </li>
    </ul>
  </nav>
</template>
<script>
export default {
  props: {
    rotas: {
      type: Array,
      required: true
    }
  }
};
</script>
<style scoped>
ul {
  display: flex;
  flex-direction: row;
  justify-content: center;
  text-align: justify;
  list-style: none;
  background-color: rgb(238, 155, 0);
  margin: 0;
}

ul li {
  margin: 1rem;
}

.router {
  text-decoration: none;
  font-weight: bold;
  font-size: 20px;
  color: white;
}
</style>
