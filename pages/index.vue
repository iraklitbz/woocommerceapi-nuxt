<template>
<div class="app">
     <Header/>



     

<section class="diagonal-section bg-contrast-lower">
  <div class="container max-width-adaptive-sm padding-y-xxl">
    <div class="text-center">
      <div class="text-sm opacity-60% margin-bottom-xxs">This is a Label</div>

      <div class="text-component margin-bottom-sm">
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam vero aliquam, natus quae architecto hic quod!</p>
      </div>
  
      <div class="flex flex-wrap flex-center gap-sm">
        <a href="#0" class="btn btn--primary">Download</a>
        <a href="#0" class="color-inherit">Learn more</a>
      </div>
    </div>
  </div>
</section>





  <div class="container  max-width-adaptive-lg">
    <section class="position-relative z-index-1 padding-y-lg">
  <div class="container max-width-adaptive-lg">
    <div class="grid gap-md items-center">
      <div class="col-6@md">
        <div class="text-component">
          <p class="text-sm color-contrast-medium">This is a Label</p>
          <h1>Lorem ipsum dolor sit.</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa, rem neque doloribus impedit explicabo minus laborum cupiditate atque esse consectetur.</p>
        </div>

        <div class="margin-top-sm">
          <div class="flex flex-wrap gap-sm items-center">
            <a href="#0" class="btn btn--primary">Download</a>
            <a href="#0" class="color-inherit">Learn more</a>
          </div>
        </div>
      </div>

      <div class="col-6@md">

        

<div class="diamond-grid">
  <div class="diamond-grid__inner">
    <a class="diamond-grid__item diamond-grid__item--link bg-contrast-lower shadow-md" href="#0">
      <img class="diamond-grid__img" src="https://picsum.photos/300/300" alt="Image description">

      <svg class="diamond-grid__icon icon icon--xl color-bg" viewBox="0 0 64 64"><path fill="var(--color-bg)" d="M0,32S14.327,13,32,13,64,32,64,32,49.673,51,32,51,0,32,0,32Z"/><circle fill="var(--color-contrast-higher)" cx="32" cy="32" r="14"/></svg>
    </a>

    <a class="diamond-grid__item diamond-grid__item--link bg-contrast-lower shadow-md" href="#0">
      <img class="diamond-grid__img" src="https://picsum.photos/300/300" alt="Image description">

      <svg class="diamond-grid__icon icon icon--xl color-bg" viewBox="0 0 64 64"><path fill="var(--color-bg)" d="M0,32S14.327,13,32,13,64,32,64,32,49.673,51,32,51,0,32,0,32Z"/><circle fill="var(--color-contrast-higher)" cx="32" cy="32" r="14"/></svg>
    </a>

    <a class="diamond-grid__item diamond-grid__item--link bg-contrast-lower shadow-md" href="#0">
      <img class="diamond-grid__img" src="https://picsum.photos/300/300" alt="Image description">

      <svg class="diamond-grid__icon icon icon--xl color-bg" viewBox="0 0 64 64"><path fill="var(--color-bg)" d="M0,32S14.327,13,32,13,64,32,64,32,49.673,51,32,51,0,32,0,32Z"/><circle fill="var(--color-contrast-higher)" cx="32" cy="32" r="14"/></svg>
    </a>

    <a class="diamond-grid__item diamond-grid__item--link bg-contrast-lower shadow-md" href="#0">
      <img class="diamond-grid__img" src="https://picsum.photos/300/300" alt="Image description">

      <svg class="diamond-grid__icon icon icon--xl color-bg" viewBox="0 0 64 64"><path fill="var(--color-bg)" d="M0,32S14.327,13,32,13,64,32,64,32,49.673,51,32,51,0,32,0,32Z"/><circle fill="var(--color-contrast-higher)" cx="32" cy="32" r="14"/></svg>
    </a>
  </div>
</div>


      </div>
    </div>
  </div>
</section>
    

    </div>
    <section class="feature-v10 ">
  <div class="padding-y-xl padding-top-xxl@md padding-bottom-0@md">
    <div class="container max-width-adaptive-lg">
      <div class="grid">
        <img class="block width-100% object-cover col-6@md" src="https://picsum.photos/500/300" alt="Image description">

        <div class="bg-contrast-lower col-6@md">
          <div class="text-component v-space-md height-100% flex flex-column padding-md">
            <h2>Kitchen</h2>
            <p class="margin-top-auto"><a href="#0" class="feature-v10__link"><i>Shop Now</i></a></p>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="bg-contrast-higher padding-y-xl padding-bottom-xxl@md padding-top-0@md">
    <div class="container max-width-adaptive-lg">
      <div class="grid">
        <img class="block width-100% object-cover col-6@md order-2@md" src="https://picsum.photos/500/300" alt="Image description">

        <div class="bg-contrast-high col-6@md order-1@md">
          <div class="text-component color-bg v-space-md height-100% flex flex-column padding-md">
            <h2 class="color-inherit">Bedroom</h2>
            <p class="margin-top-auto"><a href="#0" class="feature-v10__link"><i>Shop Now</i></a></p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

      <Footer/>
</div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'

export default {
  components: {
    Header,
    Footer
  },
  data(){
    return {
     
    }
  },
  mounted() {
   
  },
  destroyed() { // remove the JS code once the component has been destroyed
  
  },


}
</script>

<style lang="scss">

</style>
