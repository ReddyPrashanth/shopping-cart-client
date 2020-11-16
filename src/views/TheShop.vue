<template>
    <div class="bg-gray-200 flex py-2">
        <div class="w-1/5 lg:w-1/4 xl:w-1/5 hidden lg:block mx-2 bg-white shadow-lg rounded divide-y">
            <h2 class="font-semibold text-lg px-2 py-3">Filters</h2>
            <checkbox-filter :filters="categories" name="Categories"></checkbox-filter>
            <checkbox-filter :filters="brands" name="Brands"></checkbox-filter>
            <checkbox-filter :filters="gender" name="Gender"></checkbox-filter>
            <checkbox-filter :filters="ratings" name="Customer Ratings"></checkbox-filter>
            <checkbox-filter :filters="discounts" name="Discount"></checkbox-filter>
        </div>
        <div class="w-full lg:w-3/4 xl:w-4/5 bg-white shadow-lg rounded p-2">
            <product-list :products="products" classes="md:w-1/2 xl:w-1/4" title="Products"></product-list>
            <base-paginator></base-paginator>
        </div>
    </div>
</template>
<script>
import CheckboxFilter from './../components/products/CheckboxFilter.vue'
import ProductList from './../components/products/ProductList.vue'
import BasePaginator from './../components/UI/BasePaginator.vue'
import {mapGetters} from 'vuex'
export default {
    components: {
        CheckboxFilter,
        ProductList,
        BasePaginator
    },
    data() {
        return {
            brands: ['Adidas','Puma','Nike','Reebok','Jack & jones','Tommy Hilfiger'],
            ratings: ['4 star & above', '3 start & above', '2 start & above', '1 start & above'],
            discounts: ['70% & more', '60% & more', '50% & more', '40% & more', '30% & more', '30% & below'],
            gender: ['Men', 'Women'],
            categories: ['Clothing', 'Electronics', 'Shoes', 'Watches', 'TVs & Appliances', 'Home & Furniture', 'Accesories']
        }
    },
    computed: {
        ...mapGetters({
            products: 'products/products'
        })
    },
    beforeRouteUpdate(to, from, next) {
        this.$store.dispatch('products/products', {category:to.params.category,page:to.query.page});
        next();
    },
    created() {
        this.$store.dispatch('products/products', {category:this.$route.params.category,page:this.$route.query.page});
    }
}
</script>