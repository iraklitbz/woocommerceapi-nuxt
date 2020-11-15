<template>
<div class="app">
     <Header/>

  <div class="container  max-width-adaptive-lg">



  <div class="main-products-box tabs js-tabs">
    <Aside />

<div class="js-tabs__panels main-product-content">
    <section id="monPanel" class="padding-top-md js-tabs__panel">
        <ul class="grid gap-md product-grid">
          <!-- AQUI -->
          <li class="col-4@md" v-for="(item, key) in products" :key="key">
            <div class="card-v10 card-v10--state-1 height-100%">
              <a class="card-v10__img-link radius-lg shadow-lg" href="#0">
                <img src="https://picsum.photos/300/200" alt="Image description">
              </a>

              <div class="card-v10__content-wrapper">
                <div class="card-v10__content bg shadow-xs radius-lg">
                  <div class="card-v10__body">
                    <p class="card-v10__label text-uppercase color-primary letter-spacing-md">{{ item.price + ' €' }}</p>

                    <div class="text-component">
                      <h1 class="card-v10__title"><a class="color-contrast-higher" href="#0"> {{ item.name }}</a></h1>
                      <p class="card-v10__excerpt color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                    </div>
                  </div>

                  <footer class="card-v10__footer">
                    <ul class="card-v10__social-list">
                      <li class="card-v10__social-item">
                        <a class="reset card-v10__social-btn radius-md" aria-label="rest product" @click="updateDay(item.id, 'subtract')">
                          <svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M5 11H19V13H5z"/></svg>
                        </a>
                      </li>

                      <li class="card-v10__social-item">
                          <span class="quanty">{{productsQuantity[item.id].quantity}}</span>
                      </li>

                      <li class="card-v10__social-item">
                        <a class="reset card-v10__social-btn radius-md" aria-label="add more product" @click="updateDay(item.id, 'add')">
                          <svg class="icon" width="24" height="24" viewBox="0 0 24 24"><path d="M19 11L13 11 13 5 11 5 11 11 5 11 5 13 11 13 11 19 13 19 13 13 19 13z"/></svg>
                        </a>
                      </li>
                    </ul>
                  </footer>
                </div>
              </div>
            </div>
          </li>

        </ul>
    </section>
    <section id="thuPanel" class="padding-top-md js-tabs__panel"></section>
    <section id="wedPanel" class="padding-top-md js-tabs__panel"></section>
    <section id="tuePanel" class="padding-top-md js-tabs__panel"></section>
    <section id="friPanel" class="padding-top-md js-tabs__panel"></section>
    <section id="satPanel" class="padding-top-md js-tabs__panel"></section>
    <section id="sunPanel" class="padding-top-md js-tabs__panel"></section>
</div>
    </div>

  </div>
    <Footer/>
  </div>
</template>

<script>
import { mapMutations } from 'vuex'

import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Aside from '~/components/Aside.vue'
import { gridSwitch } from './../plugins/GridSwitch.js';
import { tabsJS } from './../plugins/tabs.js'

export default {
  components: {
    Header,
    Footer,
    Aside
  },
  data(){
    return {
      products: [],
      productsQuantity: {}
    }
  },
  async asyncData({ $woocomerceApi }) {
    try {
      const productsQuantity = {}
      const result = await $woocomerceApi.get('products');

      result.data.forEach((item) => {
        productsQuantity[item.id] = {
          name: item.name,
          time: null,
          price: parseFloat(item.price, 10),
          quantity: 0,
          total: 0
        }
      })

      return {
        productsQuantity,
        products: result.data,
      }
    } catch (err) {
      console.log(err)
    }
  },
  mounted() {
    gridSwitch()
    tabsJS()
  },
  destroyed() {
    gridSwitch(this.products)
  },
  methods: {
    updateDay(id, operation) {
      if (this.$store.state.cart[this.$store.state.currentDay]) {
        const product = this.productsQuantity[id]

        switch(operation) {
          case 'add':
            product.quantity++
            break
          case 'subtract':
            product.quantity--
            break
        }

        product.total = product.quantity * product.price

        this.$store.commit('upadateDay', this.productsQuantity)
      } else {
        alert('Please select a day')
      }
    }
  }
}
</script>

<style lang="scss">
.card-v10__label {
  font-size: var(--text-sm);
  font-weight: bold;
}
.card-v10__social-item {
  .icon {
    font-size: 16px;
  }
}
.quanty {
  display: block;
  text-align: center;
}
.grid-switch {
  .btns {
    --btns-button-radius: var(--radius-md);
    --btns-button-padding-x: var(--space-xs);
    --btns-button-padding-y: var(--space-xs);
  }
}

// if JS = enabled
.js {
  .grid-switch {
    opacity: 0;
    transition: opacity .5s;
  }

  .grid-switch--is-visible {
    opacity: 1;
  }
}
</style>
