<template>
  <section class="container">
    <h1 v-if="error.statusCode === 403">Error 403 -No authorised</h1>
    <h1 v-if="error.statusCode === 404">Error 404 - Page not found</h1>
    <h1 v-else>An error occurred</h1>
    <nuxt-link to="/dashboard">Return to dashboard</nuxt-link>
  </section>
</template>
<script>
export default {
  props: ['error'],
}
</script>
