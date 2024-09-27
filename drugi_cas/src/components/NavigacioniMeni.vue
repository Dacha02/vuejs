<template>
  <div>
    <ul>
      <!-- <li><a href="/">Home</a></li>
      <li><a href="/about">About</a></li>
      <li><a href="/proizvodi">Proizvodi</a></li> -->
      <!-- <li v-for="stavka in meni">
        <a :href="stavka.ruta">{{ stavka.naziv }}</a>
      </li> -->
      <li v-for="stavka in meni" :key="index">
        <RouterLink :to="stavka.ruta">{{ stavka.naziv }}</RouterLink>
      </li>
    </ul>
  </div>
</template>
<script>
import { RouterLink } from "vue-router";

export default {
  data() {
    return {
      meni: [
        {
          ruta: "/",
          naziv: "Home",
        },
        {
          ruta: "/about",
          naziv: "About",
        },
        {
          ruta: "/proizvodi",
          naziv: "Proizvodi",
        },
      ],
    };
  },
  components: { RouterLink },
};
</script>
<style>
ul {
  display: flex;
  list-style-type: none;
  width: 100%;
  gap: 2em;
  background-color: beige;
}

li a {
  color: black;
  text-decoration: none;
}

li a:hover {
  color: lightblue;
}
</style>
