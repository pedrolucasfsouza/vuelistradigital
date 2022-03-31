<template>
  <footer>
    <nav>
      <h1>Encontre seu Veículo</h1>
      <ul>
        <li>Encontre seu veículo</li>
        <li>Lojas</li>
        <li>Promoções</li>
        <li>Vantagens</li>
        <li>Garantia Mais</li>
      </ul>
    </nav>

    <nav>
      <h1>A Empresa</h1>
      <ul>
        <li>Sobre</li>
        <li>Delivery</li>
        <li>Aviso de Privacidade</li>
        <li>Blogs Seminovos</li>
      </ul>
    </nav>

    <nav>
      <h1>Atendimento</h1>
      <ul>
        <li>Perguntas Frequentes</li>
        <li>Fale Conosco</li>
        <li>Pós-vendas</li>
      </ul>
    </nav>

    <nav>
      <h1>Lojistas</h1>
      <ul>
        <li>Acesse Seminovos</li>
        <li>Atacado</li>
      </ul>
    </nav>

    <div class="navatendimento">
      <div class="atendimentotitle"><p>Atendimento ao Cliente</p></div>
      <div class="contentAtendimento">
        <button class="telefone">0800 000 000</button>
        <button class="wpp">
          <img v-bind:src="require('../assets/wpp.svg')" />
        </button>
      </div>
    </div>

    <div class="navatendimento">
      <div class="atendimentotitle"><h2>Siga a gente</h2></div>
      <div class="contentAtendimento">
        <button class="social">
          <img v-bind:src="require('../assets/fb.svg')" />
        </button>
        <button class="social">
          <img v-bind:src="require('../assets/insta1.svg')" />
        </button>
        <button class="social">
          <img v-bind:src="require('../assets/twitter.svg')" />
        </button>
        <button class="social">
          <img v-bind:src="require('../assets/in.svg')" />
        </button>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterVue",
  components: {},
};
</script>

<style scoped>
*,
body,
html {
  border: 0;
  margin: 0;
  width: 100%;
}
footer {
  background: rgba(52, 58, 64, 0.8);
  display: flex;
  padding: 30px 10%;
  box-sizing: border-box;
}
@media only screen and (max-width: 600px) {
  footer {
    flex-direction: column-reverse;
    align-items: center;
  }
}
nav {
  color: white;
  display: flex;
  width: 20%;
  flex-direction: column;
  justify-content: flex-start;
}
@media only screen and (max-width: 600px) {
  nav {
    display: none;
  }
}
nav ul {
  list-style: none;
  margin: 0px;
  padding: 0px;
}
nav li {
  line-height: 30px;
}
nav li:hover {
  text-decoration: underline;
  cursor: pointer;
}
nav h1 {
  color: #ffffff;
  font-size: 18px;
  line-height: 50px;
}

button {
  width: auto;
  height: 42.5px;
}
.telefone {
  background: #7d28f7;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.wpp {
  background: #4ac959;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  padding: 15px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 60px;
}
.wpp img {
  width: 24px;
}
.atendimentotitle {
  display: flex;
  width: 100%;
  line-height: 44.2px;
}
.navatendimento {
  width: 22%;
  margin: 0px 15px;
}
@media only screen and (max-width: 600px) {
  .navatendimento {
    width: 70%;
  }
  .atendimentotitle {
    text-align: center;
  }
  .wpp {
    margin-left: 10px;
  }
}
.atendimentotitle h2 {
  color: white;
  font-size: 20px;
  text-align: center;
}

.atendimentotitle p {
  color: white;
}
.contentAtendimento {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.social {
  background: #7d28f7;
  border-radius: 4px;
  color: white;
  font-weight: 600;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
}
</style>
