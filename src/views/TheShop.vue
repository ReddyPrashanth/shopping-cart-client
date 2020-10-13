<template>
    <div class="bg-gray-200 flex px-16 py-2">
        <div class="w-1/5 mr-2 bg-white shadow-lg rounded divide-y">
            <h2 class="font-semibold text-lg px-2 py-3">Filters</h2>
            <checkbox-filter :filters="categories" name="Categories"></checkbox-filter>
            <checkbox-filter :filters="brands" name="Brands"></checkbox-filter>
            <checkbox-filter :filters="gender" name="Gender"></checkbox-filter>
            <checkbox-filter :filters="ratings" name="Customer Ratings"></checkbox-filter>
            <checkbox-filter :filters="discounts" name="Discount"></checkbox-filter>
        </div>
        <div class="w-4/5 bg-white shadow-lg rounded p-2">
            <h2>Product List</h2>
        </div>
    </div>
</template>
<script>
import CheckboxFilter from './../components/products/CheckboxFilter.vue'
export default {
    components: {
        CheckboxFilter
    },
    data() {
        return {
            brands: ['Adidas','Puma','Nike','Reebok','Jack & jones','Tommy Hilfiger'],
            ratings: ['4 star & above', '3 start & above', '2 start & above', '1 start & above'],
            discounts: ['70% & more', '60% & more', '50% & more', '40% & more', '30% & more', '30% & below'],
            gender: ['Men', 'Women'],
            categories: ['Clothing', 'Electronics', 'Shoes', 'Watches', 'TVs & Appliances', 'Home & Furniture', 'Accesories']
        }
    }
}
</script>