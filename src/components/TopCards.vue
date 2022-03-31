<template>
  <div class="container">
    <h1 class="pseudo_border">Veículos encontrados</h1>
    <nav>
      <h3>24 carros encontrados</h3>
      <div class="buttons">
        <button>
          <img v-bind:src="require('../assets/relevantes.svg')" /> Mais
          relevantes
        </button>
        <button><img v-bind:src="require('../assets/union.svg')" /></button>
        <button><img v-bind:src="require('../assets/groupby.svg')" /></button>
      </div>
    </nav>
  </div>
</template>

<script>
export default {
  name: "TopCards",
  components: {},
};
</script>

<style scoped>
.container {
  width: 100%;
  display: flex;
  justify-content: flex;
  flex-direction: column;
}
nav {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}
@media only screen and (max-width: 600px) {
  nav {
    flex-direction: column;
    margin-top: -12px;
  }
}
.buttons {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 250px;
  justify-content: space-between;
}
@media only screen and (max-width: 600px) {
  .buttons :nth-child(3) {
    display: none;
  }
  .buttons :nth-child(2) {
    margin-right: 10px;
  }
  .buttons {
    width: 100%;
    display: flex;
    flex-direction: row-reverse;
    justify-content: flex-end;
  }
}

button {
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
  color: #444444;
  padding: 10px;
  font-weight: 600;
  background: #ffffff;
}

button:hover {
  text-decoration: underline;
  cursor: pointer;
}
h1 {
  font-size: 32px;
}

h3 {
  font-weight: 400;
  font-size: 18px;
}

@media only screen and (max-width: 600px) {
  h1 {
    font-size: 18px;
    line-height: 1px;
  }
  h3 {
    font-size: 12px;
  }
}
.pseudo_border {
  position: relative;
  display: inline-block;
}
.pseudo_border:after {
  content: "";
  position: absolute;
  left: 0;
  right: 20;
  top: 100%;
  margin: 10px auto;
  width: 5%;
  height: 3px;
  background: #7d28f7;
}

@media only screen and (max-width: 600px) {
  .pseudo_border:after {
    display: none;
  }
}
</style>
