<template>
  <div class="corpo">
    <meu-menu :rotas="routes" />
    <transition name="pagina">
      <router-view></router-view>
    </transition>
  </div>
</template>

<script>
import { routes } from "./routes";
import Menu from "./components/shared/menu/Menu.vue";
export default {
  components: {
    "meu-menu": Menu
  },

  data() {
    return {
      routes
    };
  }
};
</script>

<style>
body {
  margin: 0 auto;
  width: auto;
}
.corpo {
  font-family: Helvetica, sans-serif;
  width: auto;
  margin: 0 auto;
  padding: 0;
}

.centralizado {
  text-align: center;
  font-size: 32px;
  color: white;
  background-color: orange;
  margin-top: 0;
  padding: 0.35em;
}

.pagina-enter,
.pagina-leave-active {
  opacity: 0;
}

.pagina-enter-active,
.pagina-leave-active {
  transition: opacity 0.5s;
}
</style>
