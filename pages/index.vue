<template>
  <div class="container">
    <pre>{{ data }}</pre>
  </div>
</template>

<script>
export default {
  async asyncData({ $woocomerceApi }) {
    try {
      const { data } = await $woocomerceApi.get('products')

      return {
        data
      }
    } catch (err) {
      console.log(err)
    }
  }
}
</script>

<style>
</style>
