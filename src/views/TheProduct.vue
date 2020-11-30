<template>
    <div v-if="product" class="flex flex-wrap py-2 px-4">
        <div class="md:w-1/2 flex content-center md:p-2">
            <div class="border-4 border-gray-300 mx-auto flex content-center md:mr-4 p-4">
                <img  src="../assets/images/macbook.jpeg" alt="Sunset in the mountains">
            </div>
        </div>
        <div class="md:w-1/2">
            <div class="mb-4">
                <h2 class="text-3xl font-semibold">{{product.name}}</h2>
                <p class="py-1">{{product.description}}</p>
            </div>
            <div class="mb-4">
                <p>Price: <span class="text-xl font-bold">${{product.price}}</span></p>
            </div>
            <div class="mb-4">
                <div class="pb-2">
                    <p v-if="product.count" class="text-green-500">In Stock.</p>
                    <p v-else class="text-red-700">Out Of Stock.</p>
                </div>
                <select v-model="quantity" class="border rounded border-gray-400 p-1">
                    <option v-for="i in product.count" :value="i" :key="i">{{i}}</option>
                </select>
            </div>
            <div class="mb-4">
                <p class="pb-2">size:</p>
                <div class="flex flex-wrap">
                    <button v-for="size in product.sizes" :key="size.id" class="mr-2 px-3 border-2">{{size.name}}</button>
                </div>
            </div>
            <div class="mb-4">
                <p class="pb-2">color: black</p>
                <div class="flex flex-wrap">
                    <button v-for="color in product.colors" :key="color.id" class="mr-2 mb-2 px-3 border-2">{{color.name}}</button>
                </div>
            </div>
            <div class="mb-4">
                <button @click="addToCart" class="px-2 rounded border-2 border-gray-900 hover:bg-gray-900 hover:text-white">Add to Cart</button>
            </div>
        </div>
    </div>
    <hr>
    <div class="px-4 my-4">
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/3">
                <customer-rating :rating="rating"></customer-rating>
            </div>
            <div class="md:w-2/3" v-if="reviews.length > 0">
                <p class="font-bold text-lg mb-2">Customer Reviews</p>
                <the-reviews :reviews="reviews"></the-reviews>
                <router-link :to="{name:'Reviews', params: {id:$route.params.id}}" class="text-blue-500 font-semibold text-sm hover:underline">See all reviews ></router-link>
            </div>
        </div>
    </div>
</template>

<script>
import {mapGetters} from 'vuex'
import CustomerRating from '../components/reviews/CustomerRating.vue';
import TheReviews from '../components/reviews/TheReviews.vue';
export default {
    components: {
        TheReviews,
        CustomerRating
    },
    data(){
        return {
            quantity: 1
        }
    },
    computed: {
        ...mapGetters({
            product: 'products/product',
            reviews: 'reviews/reviews'
        }),
        rating() {
            return this.product ? Number.parseInt(this.product.rating) : 0;
        }
    },
    methods: {
        addToCart() {
            const params = {
                product: this.product,
                quantity: this.quantity
            }
            this.$store.dispatch('cart/addToCart', params);
        }
    },
    created() {
        const productId = this.$route.params.id;
        this.$store.dispatch('products/product', productId);
        this.$store.dispatch('reviews/reviews', {productId, page:1});
    }
}
</script>