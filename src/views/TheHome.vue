<template>
    <div class="bg-gray-100"> 
        <landing-page></landing-page>
        <div class="py-4 px-4">
            <product-list :products="featuredProducts" classes="sm:w-1/2 lg:w-1/3 xl:w-1/4" title="Featured Products"></product-list>
            <div class="text-center mt-3">
                <router-link :to="{name: 'Shop', params: {category: 'laptops'}, query:{page:1}}" class="btn sm:font-semibold">More Products</router-link>
            </div>
        </div>
    </div>
</template>
<script>
import LandingPage from './../components/home/LandingPage.vue'
import ProductList from './../components/products/ProductList.vue'
import {mapGetters} from 'vuex'
export default {
    components: {
        LandingPage,
        ProductList,
    },
    computed: {
        ...mapGetters([
            'featuredProducts'
        ])
    }
}
</script>