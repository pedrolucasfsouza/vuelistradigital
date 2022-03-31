<template>
  <HeaderVue />
  <div class="contentApp">
    <div id="app">
      <BreadCrumb />
      <ContentItems />
    </div>
  </div>
  <Footer />
</template>

<script>
import HeaderVue from "./components/Header.vue";
import BreadCrumb from "./components/BreadCrumb.vue";
import ContentItems from "./components/ContentItems.vue";
import Footer from "./components/Footer.vue";

export default {
  name: "App",
  components: {
    HeaderVue,
    BreadCrumb,
    ContentItems,
    Footer,
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,400;0,500;0,600;0,700;0,800;0,900;1,100&display=swap");

html,
body {
  font-family: "Roboto", sans-serif;
  margin: 0px;
  background: #ebeef2;
}
p,
h1,
h2 {
  color: #444444;
}
#app {
  margin: 0;
  padding: 0;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
}
.contentApp {
  padding: 0px 10%;
  box-sizing: border-box;
}
</style>
