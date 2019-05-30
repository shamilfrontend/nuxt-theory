<template>
  <header>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#">NuxtJS</a>
      <div class="collapse navbar-collapse">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <nuxt-link
              to="/"
              class="nav-link"
              active-class="active"
              exact
            >Home</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              to="/users"
              class="nav-link"
              active-class="active"
              no-prefetch
            >Users</nuxt-link>
          </li>
          <li class="nav-item">
            <nuxt-link
              to="/about"
              class="nav-link"
              active-class="active"
              no-prefetch
            >About</nuxt-link>
          </li>
          <li
            v-if="!isAuth"
            class="nav-item"
          >
            <nuxt-link
              to="/login"
              class="nav-link"
              active-class="active"
              no-prefetch
            >Login</nuxt-link>
          </li>
          <li
            v-if="isAuth"
            class="nav-item"
          >
            <a
              href="#"
              class="nav-link"
              @click.prevent="Logout"
            >Logout</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
</template>

<script>
  export default {
    name: "NavBar",

    computed: {
      isAuth() {
        return this.$store.getters['isAuth'];
      }
    },

    methods: {
      Logout() {
        this.$store.dispatch('Logout');
        this.$router.push('/login');
      }
    }
  }
</script>

<style scoped>

</style>
