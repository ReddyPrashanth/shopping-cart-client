<template>
    <div class="bg-gray-100"> 
        <landing-page></landing-page>
        <product-list></product-list>
    </div>
</template>
<script>
import LandingPage from './../components/home/LandingPage.vue'
import ProductList from './../components/products/ProductList.vue'
export default {
    components: {
        LandingPage,
        ProductList
    }
}
</script>