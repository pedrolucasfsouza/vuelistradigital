<template>
  <div class="container">
    <ul class="breadcrumb">
      <li><a href="#">Home</a></li>
      <li><a href="#">Veículos</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "BreadCrumb",
  components: {},
};
</script>

<style scoped>
.container {
  margin-top: 40px;
  width: 100%;
  display: flex;
  justify-content: flex;
}
.breadcrumb {
  padding: 0px;
}

ul.breadcrumb li {
  display: inline;
  font-size: 18px;
  border: solid 1px #7d28f7;
  border-radius: 4px;
  margin: 2px;
  padding: 5px 10px 5px 10px;
  background: white;
}

ul.breadcrumb li a {
  text-decoration: none;
  color: #444444;
  font-size: 14px;
}

ul.breadcrumb li a:hover {
  text-decoration: underline;
}
</style>
