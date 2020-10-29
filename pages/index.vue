<template>
  <div class="container  max-width-adaptive-md">
   <div class="grid-switch js-grid-switch" data-gs-item-class-1="col-12 col-4@md" data-gs-item-class-2="col-12" data-gs-content-class-1="card-v10--state-1" data-gs-content-class-2="card-v10--state-2">
  <div class="margin-bottom-sm text-right display@md no-js:is-hidden">
    <div class="btns btns--radio js-grid-switch__controller">
      <div>
        <input type="radio" name="radio-view-option" id="radio-grid" value="1" checked>
        <label class="btns__btn btns__btn--icon" for="radio-grid">
          <svg class="icon icon--xs" viewBox="0 0 16 16">
            <title>Grid</title>
            <g>
              <path d="M6,0H1C0.4,0,0,0.4,0,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1C7,0.4,6.6,0,6,0z"></path>
              <path d="M15,0h-5C9.4,0,9,0.4,9,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1V1C16,0.4,15.6,0,15,0z"></path>
              <path d="M6,9H1c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C7,9.4,6.6,9,6,9z"></path>
              <path d="M15,9h-5c-0.6,0-1,0.4-1,1v5c0,0.6,0.4,1,1,1h5c0.6,0,1-0.4,1-1v-5C16,9.4,15.6,9,15,9z"></path>
            </g>
          </svg>
        </label>
      </div>

      <div>
        <input type="radio" name="radio-view-option" id="radio-list" value="2">
        <label class="btns__btn btns__btn--icon" for="radio-list">
          <svg class="icon icon--xs" viewBox="0 0 16 16">
            <title>List</title>
            <g>
              <rect width="16" height="3"></rect>
              <rect y="6" width="16" height="3"></rect>
              <rect y="12" width="16" height="3"></rect>
            </g>
          </svg>
        </label>
      </div>
    </div>
  </div>

  <ul class="grid gap-md">
    <!-- AQUI -->
    <li v-for="(item, key) in data" :key="key">
      {{ item.name }}
    </li>

    <li class="js-grid-switch__item">

      <div class="card-v10 card-v10--state-1 height-100% js-grid-switch__content">
        <a class="card-v10__img-link radius-lg shadow-lg" href="#0">
          <img src="https://picsum.photos/300/200" alt="Image description">
        </a>

        <div class="card-v10__content-wrapper">
          <div class="card-v10__content bg shadow-xs radius-lg">
            <div class="card-v10__body">
              <p class="card-v10__label text-uppercase color-primary letter-spacing-md">Category</p>

              <div class="text-component">
                <h1 class="card-v10__title"><a class="color-contrast-higher" href="#0">The quick brown fox jumps over the lazy dog</a></h1>
                <p class="card-v10__excerpt color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <footer class="card-v10__footer">
              <ul class="card-v10__social-list">
                <li class="card-v10__social-item">
                  <button class="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Like this content along with 120 other people">
                    <svg class="icon" viewBox="0 0 12 12">
                      <g>
                        <path d="M11.045,2.011a3.345,3.345,0,0,0-4.792,0c-.075.075-.15.225-.225.3-.075-.074-.15-.224-.225-.3a3.345,3.345,0,0,0-4.792,0,3.345,3.345,0,0,0,0,4.792l5.017,4.718L11.045,6.8A3.484,3.484,0,0,0,11.045,2.011Z"></path>
                      </g>
                    </svg>

                    <span>120</span>
                  </button>
                </li>

                <li class="card-v10__social-item">
                  <button class="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Comment">
                    <svg class="icon" viewBox="0 0 12 12">
                      <g>
                        <path d="M6,0C2.691,0,0,2.362,0,5.267s2.691,5.266,6,5.266a6.8,6.8,0,0,0,1.036-.079l2.725,1.485A.505.505,0,0,0,10,12a.5.5,0,0,0,.5-.5V8.711A4.893,4.893,0,0,0,12,5.267C12,2.362,9.309,0,6,0Z"></path>
                      </g>
                    </svg>

                    <span>Comment</span>
                  </button>
                </li>

                <li class="card-v10__social-item">
                  <button class="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Share">
                    <svg class="icon" viewBox="0 0 12 12">
                      <g>
                        <path d="M6,4C2.975,4,0,5.8,0,11,1.575,8.45,3.6,8,6,8v3l6-5L6,1Z"></path>
                      </g>
                    </svg>

                    <span>Share</span>
                  </button>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </li>

    <li class="js-grid-switch__item">

      <div class="card-v10 card-v10--state-1 height-100% js-grid-switch__content">
        <a class="card-v10__img-link radius-lg shadow-lg" href="#0">
          <img src="https://picsum.photos/300/200" alt="Image description">
        </a>

        <div class="card-v10__content-wrapper">
          <div class="card-v10__content bg shadow-xs radius-lg">
            <div class="card-v10__body">
              <p class="card-v10__label text-uppercase color-primary letter-spacing-md">Category</p>

              <div class="text-component">
                <h1 class="card-v10__title"><a class="color-contrast-higher" href="#0">Almost before we knew it, we had left the ground</a></h1>
                <p class="card-v10__excerpt color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <footer class="card-v10__footer">
              <ul class="card-v10__social-list">
                <li class="card-v10__social-item">
                  <button class="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Like this content along with 140 other people">
                    <svg class="icon" viewBox="0 0 12 12">
                      <g>
                        <path d="M11.045,2.011a3.345,3.345,0,0,0-4.792,0c-.075.075-.15.225-.225.3-.075-.074-.15-.224-.225-.3a3.345,3.345,0,0,0-4.792,0,3.345,3.345,0,0,0,0,4.792l5.017,4.718L11.045,6.8A3.484,3.484,0,0,0,11.045,2.011Z"></path>
                      </g>
                    </svg>

                    <span>140</span>
                  </button>
                </li>

                <li class="card-v10__social-item">
                  <button class="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Comment">
                    <svg class="icon" viewBox="0 0 12 12">
                      <g>
                        <path d="M6,0C2.691,0,0,2.362,0,5.267s2.691,5.266,6,5.266a6.8,6.8,0,0,0,1.036-.079l2.725,1.485A.505.505,0,0,0,10,12a.5.5,0,0,0,.5-.5V8.711A4.893,4.893,0,0,0,12,5.267C12,2.362,9.309,0,6,0Z"></path>
                      </g>
                    </svg>

                    <span>Comment</span>
                  </button>
                </li>

                <li class="card-v10__social-item">
                  <button class="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Share">
                    <svg class="icon" viewBox="0 0 12 12">
                      <g>
                        <path d="M6,4C2.975,4,0,5.8,0,11,1.575,8.45,3.6,8,6,8v3l6-5L6,1Z"></path>
                      </g>
                    </svg>

                    <span>Share</span>
                  </button>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </li>

    <li class="js-grid-switch__item">

      <div class="card-v10 card-v10--state-1 height-100% js-grid-switch__content">
        <a class="card-v10__img-link radius-lg shadow-lg" href="#0">
          <img src="https://picsum.photos/300/200" alt="Image description">
        </a>

        <div class="card-v10__content-wrapper">
          <div class="card-v10__content bg shadow-xs radius-lg">
            <div class="card-v10__body">
              <p class="card-v10__label text-uppercase color-primary letter-spacing-md">Category</p>

              <div class="text-component">
                <h1 class="card-v10__title"><a class="color-contrast-higher" href="#0">The spectacle before us was indeed sublime</a></h1>
                <p class="card-v10__excerpt color-contrast-medium">Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
              </div>
            </div>

            <footer class="card-v10__footer">
              <ul class="card-v10__social-list">
                <li class="card-v10__social-item">
                  <button class="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Like this content along with 12K other people">
                    <svg class="icon" viewBox="0 0 12 12">
                      <g>
                        <path d="M11.045,2.011a3.345,3.345,0,0,0-4.792,0c-.075.075-.15.225-.225.3-.075-.074-.15-.224-.225-.3a3.345,3.345,0,0,0-4.792,0,3.345,3.345,0,0,0,0,4.792l5.017,4.718L11.045,6.8A3.484,3.484,0,0,0,11.045,2.011Z"></path>
                      </g>
                    </svg>

                    <span>12K</span>
                  </button>
                </li>

                <li class="card-v10__social-item">
                  <button class="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Comment">
                    <svg class="icon" viewBox="0 0 12 12">
                      <g>
                        <path d="M6,0C2.691,0,0,2.362,0,5.267s2.691,5.266,6,5.266a6.8,6.8,0,0,0,1.036-.079l2.725,1.485A.505.505,0,0,0,10,12a.5.5,0,0,0,.5-.5V8.711A4.893,4.893,0,0,0,12,5.267C12,2.362,9.309,0,6,0Z"></path>
                      </g>
                    </svg>

                    <span>Comment</span>
                  </button>
                </li>

                <li class="card-v10__social-item">
                  <button class="reset card-v10__social-btn radius-md js-tab-focus" aria-label="Share">
                    <svg class="icon" viewBox="0 0 12 12">
                      <g>
                        <path d="M6,4C2.975,4,0,5.8,0,11,1.575,8.45,3.6,8,6,8v3l6-5L6,1Z"></path>
                      </g>
                    </svg>

                    <span>Share</span>
                  </button>
                </li>
              </ul>
            </footer>
          </div>
        </div>
      </div>
    </li>
  </ul>
</div>
  </div>
</template>

<script>
import { gridSwitch } from './../plugins/GridSwitch.js'

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
  },
  mounted() {
    gridSwitch()
  },
  destroyed() { // remove the JS code once the component has been destroyed
    gridSwitch()
  }
}
</script>

<style lang="scss">
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
