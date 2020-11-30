<template>
    <the-header></the-header>
    <menu-items :categories="categories"></menu-items>
    <router-view/>
    <the-footer></the-footer>
</template>
<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheFooter from './components/layouts/TheFooter.vue'
import MenuItems from './components/home/MenuItems.vue'
import {mapGetters} from 'vuex'
export default {
  components: {
    TheHeader,
    TheFooter,
    MenuItems
  },
  computed: {
    ...mapGetters([
      'categories'
    ])
  },
  async created(){
    this.$store.dispatch('cart/createCartId');
    this.$store.dispatch('categories');
    this.$store.dispatch('featuredProducts');
  }
}
</script>
<style>
</style>
