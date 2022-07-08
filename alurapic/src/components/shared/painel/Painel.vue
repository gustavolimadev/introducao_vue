<template>
  <div class="painel">
    <h2 class="painel-titulo" @dblclick="visivel = !visivel">
      <!--@ é equivalente a v-on:-->
      {{ titulo }}
    </h2>
    <transition name="painel-fade">
      <div class="painel-conteudo" v-show="visivel">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  props: ["titulo"],

  data() {
    return {
      visivel: true
    };
  }
};
</script>

<style scoped>
/* estilo do painel */

.painel {
  display: inline-block;
  margin: 5px;
  width: 200px;
  height: 100%;
  vertical-align: top;
  text-align: center;
  border-radius: 20px;
}

.painel .painel-titulo {
  color: white;
  font-size: 14px;
  text-align: center;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background: rgb(2, 133, 177);
  margin: 0;
  padding: 10px;
  text-transform: uppercase;
}

@media screen and (min-width: 800px) {
  .corpo {
    width: 750px;
    margin: 0 auto;
  }
}

.painel-fade-enter,
.painel-fade-leave-active {
  opacity: 0;
}

.painel-fade-enter-active,
.painel-fade-leave-active {
  transition: opacity 0.5s;
}

.painel-conteudo {
  overflow: hidden;
}
</style>
