<template>
  <h1>Stranica za proizvode</h1>
  <ProizvodiSekcija :proizvodi="proizvodi" />
</template>
<script>
import ProizvodiSekcija from "@/components/ProizvodiSekcija.vue";

export default {
  components: { ProizvodiSekcija },
  data() {
    return {
      proizvodi: [
        {
          naziv: "Naziv proizvoda 1",
          opis: "Opis proizvoda 1",
          cena: 1500,
          slika: "./logo.svg",
        },
        {
          naziv: "Naziv proizvoda 2",
          opis: "Opis proizvoda 2",
          cena: 1300,
          slika: "./slika2.jpeg",
        },
        {
          naziv: "Naziv proizvoda 3",
          opis: "Opis proizvoda 3",
          cena: 1000,
          slika: "./logo.svg",
        },
      ],
    };
  },
};
</script>
<style></style>
