<template>
  <aside class="tools-aside-rail padding-top-md">
    <div class="tools-aside">
      <div class="tools-aside-panel">
      <h2>erf</h2>
      <ul class="day-week-buttons grid gap-xs js-tabs__controls" aria-label="Tabs Interface" >
        <li
          class="btn btn--subtle" 
          v-for="(item, key) in $store.state.days" 
          :key="key" 
          :class="{ active: item.name === activeDay}"
        >
          <a href="#monPanel" class="tabs__control js-tab-focus" aria-selected="true" @click="selectItem(item.name)">
            <span >{{item.name}}</span>
          </a>
          <div class="time-panel">
            <div class="select">
              <select class="select__input form-control" name="selectThis" @change="onChange($event)">
                <option v-for="(hour, key) in item.hours" :key="key" :value="hour">{{hour}}</option>
              </select>
              <svg class="icon select__icon" aria-hidden="true" viewBox="0 0 16 16">
                <g stroke-width="1" stroke="currentColor">
                  <polyline fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-miterlimit="10" points="15.5,4.5 8,12 0.5,4.5 "></polyline>
                </g>
              </svg>
            </div>
          </div>
        </li>
      </ul>
      </div>
      <button class="btn btn--primary btn--principal">BUY</button>
    </div>
    <pre>{{ $store.state.cart }}</pre>
  </aside>
</template>

<script>
export default {
  data() {
    return {
      activeDay: null
    }
  },
  mounted() {},
  destroyed() {},
  methods: {
    onChange(event) {
      this.$store.commit('setTimeDilevery', event.target.value)
      this.$store.dispatch('updateDeliveryTimeOnDay')
    },  
    selectItem(day) {
      this.activeDay = day
      this.$store.commit('setCurrentDay', day)
      this.$store.dispatch('createCartDay', day)
    }
  }
}
</script>
<style lang="scss">
.btn--principal {
  margin-top: var(--space-sm);
  width: 100%;
}
.time-panel {
  width: 100%;
  margin-top: 10px;
  background-color: #e6e6e6;
  display: none;
  input {
    width: 100%;
    border: none;
    box-shadow: none;;
    text-align: center;
    background-color: transparent;
    &:focus {
      background-color: #fff;
    }
    &:active {
      background-color: #fff;
    }
  }
}

.day-week-buttons {
  li.active {
    .time-panel {
      display: block;
    }
  }
  
  > * {
    padding: 0px;
    flex: 100%;
    display: flex;
    flex-direction: column;
     &:focus {
     border: none;
    }
    a {
      width: 100%;
   
      span {
        width: 100%;
      display: block;
      text-align: center;
      }
    }
  }
}
.tools-aside-rail {
  padding-right: var(--space-sm);
  max-width: 300px;
  width: 100%;
}
.tools-aside {
  position: sticky;
  top: 20px;
 
  
  .tools-aside-panel {
 padding: var(--space-sm);
  background-color: #f6f6f6;
  border-radius: 6px;
  }
}
.main-product-content {
width: calc(100% - 300px);
}

</style>


