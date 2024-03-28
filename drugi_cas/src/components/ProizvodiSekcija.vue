<template>
  <h1>Sekcija za proizvode</h1>

  <div class="svi_proizvodi">
    <Proizvod v-for="proizvod in proizvodi" :proizvod="proizvod" />
  </div>
</template>
<script>
import Proizvod from "./Proizvod.vue";
export default {
  components: {
    Proizvod,
  },
  props: {
    proizvodi: {
      required: true,
    },
  },
};
</script>
<style>
div {
  border: 1px solid black;
}
.svi_proizvodi {
  display: flex;
  justify-content: space-around;
}
</style>
