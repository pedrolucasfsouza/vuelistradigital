<template>
  <main>
    <TopCards />

    <div v-for="(car, i) in filteredCars" :key="i">
      <div v-if="!isMobile()">
        <div v-if="i !== 6">
          <Card
            :foto="car.vco_veiculos_foto.url_medium"
            :modelo="car.marca_titulo"
            :titulo="car.modelo_titulo"
            :versao="car.int_versao"
            :ano="car.int_anomodelofabricacao"
            :km="car.int_quilometragem"
            :cambio="car.vco_cambio.titulo"
          />
        </div>

        <div v-if="i == 6">
          <img
            class="cardDesktop"
            v-bind:src="require('../assets/cardTroca.png')"
          />
        </div>
      </div>

      <div v-if="isMobile()">
        <div v-if="i !== 2">
          <Card
            :foto="car.vco_veiculos_foto.url_medium"
            :modelo="car.marca_titulo"
            :titulo="car.modelo_titulo"
            :versao="car.int_versao"
            :ano="car.int_anomodelofabricacao"
            :km="car.int_quilometragem"
            :cambio="car.vco_cambio.titulo"
          />
        </div>

        <div v-if="i == 1">
          <img v-bind:src="require('../assets/cardMobile.png')" />
        </div>
      </div>
    </div>

    <footer>
      <p>Você já viu {{ endIndex }} de 24 veículos</p>
      <button @click="more">
        Carregar Mais <img v-bind:src="require('../assets/more.svg')" />
      </button>
    </footer>
  </main>
</template>

<script>
import Card from "./CardCar.vue";
import { defineComponent, onMounted, ref, computed } from "vue";
import api from "@/services/api";
import TopCards from "./TopCards.vue";

export default defineComponent({
  data() {
    return {
      count: 8,
    };
  },
  name: "ContentItems",
  components: { Card, TopCards },
  setup() {
    const cars = ref([]);
    const endIndex = ref(8);
    const filteredCars = computed(() => cars.value.slice(0, endIndex.value));

    const more = () =>
      endIndex.value <= 23
        ? (endIndex.value = endIndex.value + 8)
        : endIndex.value;

    const isMobile = () => {
      if (
        /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
          navigator.userAgent
        )
      ) {
        return true;
      } else {
        return false;
      }
    };

    const fetchCars = async () =>
      api
        .get("/")
        .then((response) => (cars.value = response.data.resultados.data));

    onMounted(fetchCars);

    return { cars, filteredCars, more, endIndex, isMobile };
  },
});
</script>

<style scoped>
main {
  display: flex;
  width: 100%;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media only screen and (max-width: 600px) {
  main {
    display: flex;
    justify-content: center;
    align-content: center;
  }
}
footer {
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
}

footer p {
  font-weight: 600;
  font-size: 14px;
}

button {
  color: #7d28f7;
  text-decoration: none;
  display: flex;
  align-items: center;
  border: none;
  background: transparent;
  cursor: pointer;
}

.cardDesktop {
  margin-top: 15px;
}
</style>
