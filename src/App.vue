<template>
  <div class="main" @mouseOvr="onMouseChild($event)" :class="getBgClass">
    <transition name="fade">
      <router-view />
    </transition>
  </div>
</template>

<script>
import {mapGetters} from 'vuex'

export default {
  // data() {
  //   return {
  //   }
  // },
  methods: {
    onMouseChild(value) {
      console.log(value);
    }
  },
  computed: mapGetters(['getBgClass']),
}
</script>>
