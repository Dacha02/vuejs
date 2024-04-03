<template>
  <h1>Stranica za korisnike</h1>

  <div v-if="!users.length" class="spinner-border" role="status"></div>

  <ul>
    <li v-for="user in users" :key="user.id">
      {{ user.name }} {{ user.createdAt }}
    </li>
  </ul>
</template>
<script>
import axios from "axios";

export default {
  data() {
    return {
      users: [],
    };
  },
  methods: {
    async getUsersFromAPI() {
      try {
        // const response = await fetch(
        //   "https://660d89bc6ddfa2943b34abe7.mockapi.io/users/Users"
        // );
        axios
          .get("https://660d89bc6ddfa2943b34abe7.mockapi.io/users/Users")
          .then((responseData) => {
            this.users = responseData.data;
          });
        //this.users = await response.json();

        console.log("Korisnici, ", this.users);
      } catch (error) {
        console.log(error);
      }
    },
  },

  mounted() {
    setTimeout(this.getUsersFromAPI, 1000);
  },
};
</script>
<style lang=""></style>
