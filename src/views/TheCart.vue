<template>
    <div class="my-4 mx-16">
        <div class="flex flex-wrap">
            <div class="w-2/3 px-4">
                <h2 class="font-bold text-2xl mb-2">Shopping Cart</h2>
                <div v-if="items.length == 0" class="border border-black p-8 rounded text-center mb-2">
                    <p class="font-semibold text-lg">Your shopping cart is empty. </p>
                    <div class="my-4">
                        <router-link :to="{name: 'Shop', params: {category: 'laptops'}, query:{page:1}}" class="p-1 sm:py-2 sm:px-4 rounded sm:font-semibold border-black border hover:bg-gray-900 hover:text-white mr-2">Shop now</router-link>
                        <router-link :to="{name:'App'}" class="p-1 sm:py-2 sm:px-4 rounded sm:font-semibold border-black border hover:bg-gray-900 hover:text-white">Home</router-link>
                    </div>
                </div>
                <div class="flex flex-wrap my-4" v-for="item in items" :key="item.product.id">
                    <cart-item :item="item" :action="'cart/deleteItem'">></cart-item>
                </div>
                <hr>
            </div>
            <div class="w-1/3 px-2">
                <div class="border border-gray-500 p-2 text-sm text-center rounded">
                   <p v-if="(cartPrice - freeShipping) < 0" class="text-sm mb-2">Add <span class="text-red-600">${{freeShipping - cartPrice}}</span> of eligible items to your order to qualify for FREE Shipping.</p>
                   <p v-else class="text-sm mb-2">Your order qualifies for FREE Shipping. Choose this option at checkout</p>
                   <h1 class="mb-2"><span class="text-lg font-bold">Sub Total (</span>{{quantity}} item(s)<span class="text-lg font-bold">): ${{cartPrice}}</span></h1>
                   <button class="bg-yellow-600 w-full p-1 sm:py-2 sm:px-4 rounded text-sm border">Proceed to checkout</button>
                </div>
            </div>
        </div>
        <div v-if="savedItems.length > 0" class="flex">
            <div class="w-2/3 px-4">
                <h2 class="font-bold text-2xl my-2">Products saved for later</h2>
                <div class="flex flex-wrap my-4" v-for="item in savedItems" :key="item.product.id">
                    <cart-item :item="item" :action="'cart/deleteSavedItem'"></cart-item>
                </div>
            </div>
        </div>
        <div class="py-2">
            <product-list :products="featuredProducts" classes="sm:w-1/2 lg:w-1/3 xl:w-1/4" title="Featured Products"></product-list>
        </div>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import CartItem from '../components/cart/CartItem.vue'
import ProductList from '../components/products/ProductList'
export default {
    components: {
        CartItem,
        ProductList
    },
    computed: {
        ...mapGetters({
            items: 'cart/items',
            savedItems: 'cart/savedItems',
            quantity: 'cart/quantity',
            cartPrice: 'cart/cartPrice',
            featuredProducts:'featuredProducts',
            freeShipping: 'cart/freeShipping'
        })
    },
    created() {
        this.$store.dispatch('cart/savedItems');
    }    
}
</script>