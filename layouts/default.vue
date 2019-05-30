<template>
  <div>
    <nav-bar />
    <main>
      <div class="container">
        <nuxt />
      </div>
    </main>
  </div>
</template>

<script>
  import NavBar from '@/components/Navbar';

  export default {
    components: {
      NavBar
    }
  }
</script>
