<template>
    <the-header></the-header>
    <menu-items></menu-items>
    <router-view/>
    <the-footer></the-footer>
</template>
<script>
import TheHeader from './components/layouts/TheHeader.vue'
import TheFooter from './components/layouts/TheFooter.vue'
import MenuItems from './components/home/MenuItems.vue'
export default {
  components: {
    TheHeader,
    TheFooter,
    MenuItems
  }
}
</script>
<style>
</style>
