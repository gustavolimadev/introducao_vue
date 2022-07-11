<template>
  <div>
    <h1 class="centralizado">{{ titulo }}</h1>

    <input
      type="search"
      class="filtro"
      placeholder="filtre por parte do titulo"
      v-on:input="filtro = $event.target.value"
    />
    <p v-show="mensagem" class="centralizado msg-not">{{ mensagem }}</p>
    <ul class="lista-fotos">
      <li class="lista-fotos-item" v-for="foto of fotosComFiltro">
        <meu-painel :titulo="foto.titulo">
          <imagem-responsiva
            v-meu-transform:scale.animate="1.2"
            :url="foto.url"
            :titulo="foto.titulo"
          ></imagem-responsiva>
          <router-link :to="{ name: 'altera', params: { id: foto._id } }">
            <meu-botao tipo="button" rotulo="ALTERAR" />
          </router-link>
          <meu-botao
            tipo="button"
            rotulo="REMOVER"
            @botaoAtivado="remove(foto)"
            :confirmacao="true"
            estilo="perigo"
          />
        </meu-painel>
      </li>
    </ul>
  </div>
</template>

<script>
import Painel from "../shared/painel/Painel.vue";
import imagemResponsiva from "../shared/imagem-responsiva/imagemResponsiva.vue";
import Botao from "../shared/botao/Botao.vue";
import FotoService from "../../directives/domain/foto/FotoService";
export default {
  components: {
    "meu-painel": Painel,
    "imagem-responsiva": imagemResponsiva,
    "meu-botao": Botao
  },

  data() {
    return {
      titulo: "Alurapic",
      fotos: [],
      filtro: "",
      mensagem: ""
    };
  },

  computed: {
    fotosComFiltro() {
      if (this.filtro) {
        let exp = new RegExp(this.filtro.trim(), "i");
        return this.fotos.filter(foto => exp.test(foto.titulo));
      } else {
        return this.fotos;
      }
    }
  },

  methods: {
    remove(foto) {
      this.service.apaga(foto._id).then(
        () => {
          let indice = this.fotos.indexOf(foto); // acha a posição da foto na lista
          this.fotos.splice(indice, 1); // a instrução altera o array
          this.mensagem = "Foto removida com sucesso";
        },
        err => {
          this.mensagem = "Não foi possível remover a foto";
          console.log(err);
        }
      );
    }
  },

  created() {
    this.service = new FotoService(this.$resource);

    this.service.lista().then(
      fotos => (this.fotos = fotos),
      err => (this.mensagem = err.message)
    );
  }
};
</script>

<style>
body {
  margin: 0 auto;
  width: auto;
}

.lista-fotos {
  list-style: none;
  margin: 2rem auto;
  text-align: center;
}

.lista-fotos .lista-fotos-item {
  display: inline-block;
}

.filtro {
  display: block;
  width: 300px;
  margin: 0 auto;
  padding: 5px;
  border-radius: 5px;
}

.msg-not {
  color: black;
  background-color: white;
  font-size: 1rem;
}
</style>
