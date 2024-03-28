<template>
  <div class="proizvod">
    <p>{{ proizvod.naziv }}</p>
    <p>{{ proizvod.opis }}</p>
    <p>{{ proizvod.cena }}</p>
    <img :src="getImagePath(proizvod.slika)" /> {{ proizvod.slika }}
  </div>
</template>
<script>
export default {
  props: {
    proizvod: {
      required: true,
    },
  },
  methods: {
    getImagePath(naziv_slike) {
      return `./public/${naziv_slike}`;
    },
  },
};
</script>
<style lang=""></style>
