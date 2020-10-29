<template>
  <div class="container">
    <h2>Hola</h2>
  </div>
</template>

<script>
export default {


 mounted() {
   this.callAjax();
 },

 methods: {
      callAjax() {
          this.$axios
          .get("/wc/v3/products", {
              headers: {
                  ConsumerKey: 'ck_8bd545d57f4348acefef0918836cffeb655c6d13',
                  ConsumerSecret: 'cs_beaddd1e13bb282402a2203627bd9abb64bab003'
                }
          })
          .then((response) => {
          
              console.log(response)
            
          })
          .catch((error) => console.log(error));
      }
   }
}
</script>

<style>

</style>
