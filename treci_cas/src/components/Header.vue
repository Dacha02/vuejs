<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <router-link class="navbar-brand" v-bind:to="meni[0].url">{{
      meni[0].naziv
    }}</router-link>
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNav"
      aria-controls="navbarNav"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item" v-for="(item, index) in meni" :key="index">
          <router-link class="nav-link" v-bind:to="item.url">{{
            item.naziv
          }}</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script>
export default {
  data() {
    return {
      meni: [
        { url: "/", naziv: "Pocetna" },
        { url: "/users", naziv: "Korsnici" },
        { url: "/users-table", naziv: "Korisnici u tabeli" },
      ],
    };
  },
};
</script>
