<template>
  <article>
    <header>
      <img class="foto" v-bind:src="this.foto" />
      <div class="cidade">
        <img v-bind:src="require('../assets/cidade.svg')" />
        <p>Belo Horizonte</p>
      </div>
    </header>
    <div class="content">
      <section class="title">
        <h2>{{ this.modelo + " " + this.titulo }}</h2>
        <p>{{ this.versao }}</p>
      </section>

      <section>
        <div className="item">
          <img v-bind:src="require('../assets/ICON_ANO.svg')" />
          <p>{{ this.ano }}</p>
        </div>
        <div className="item">
          <img v-bind:src="require('../assets/ICON_CAMBIO.svg')" />
          <p>{{ this.km }} Km</p>
        </div>
        <div className="item">
          <img v-bind:src="require('../assets/ICON_KM.svg')" />
          <p>{{ this.cambio }}</p>
        </div>
      </section>

      <div class="footer">
        <div class="Price">
          <h1>R$ 59.500</h1>
        </div>
        <div class="Like">
          <img v-bind:src="require('../assets/favorite.svg')" />
        </div>
      </div>
    </div>
  </article>
</template>

<script>
export default {
  name: "CardOi",
  components: {},
  props: ["titulo", "modelo", "versao", "ano", "km", "cambio", "foto"],
};
</script>

<style scoped>
* {
  border: 0;
  margin: 0;
}

header {
  width: 100%;
  position: relative;
}
.foto {
  width: 300px;
  height: 191px;
}
.title {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
}
h2 {
  margin: 0 0 0.5rem 0;
  font-size: 20px;
}
h1 {
}
h2:hover {
  text-decoration: underline;
  cursor: pointer;
}
article {
  height: 343px;
  width: 300px;
  border-radius: 8px;
  box-shadow: 0px 1px 3px 0px #00000040;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: white;
  margin: 20px 0px;
}

.content {
  display: flex;
  flex-direction: column;
  height: 150px;
  padding: 5px 10px;
}

.item {
  display: flex;
  justify-content: flex-start;
}
.item p {
  margin-left: 5px;
}

p {
  font-size: 14px;
}

.cidade {
  position: absolute;
  top: 150px;
  background: white;
  display: flex;
  align-content: center;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 26px;
  border-radius: 0 10px 10px 0;
}

section {
  padding: 0 0.3rem 0 0.3rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.2rem 0 0.2rem 0;
  height: 150px;
}
section img {
  width: 12px;
}

.footer {
  padding: 0 0.3rem 0 0.3rem;
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0 1rem 0;
}
</style>
