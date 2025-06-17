<template>
  <div>
    <h1>sample components about</h1>

    <!-- router-link: declarative navigation -->
    <router-link to="/">Go to Home</router-link>

    <!-- programmatic navigation -->
    <button @click="goToHome">Alternative way</button>
  </div>
</template>

<script>
export default {
  methods: {
    goToHome() {
      this.$router.push('/');
    }
  }
}
</script>
