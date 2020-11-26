<template>
    <div class="my-4 mx-12" v-if="product">
        <div class="flex flex-wrap">
            <div class="w-full md:w-1/3">
                <customer-rating :rating="rating"></customer-rating>
            </div>
            <div class="w-full md:w-2/3 md:mt-12">
                <h3 class="font-bold text-lg mb-2">{{product.title}}</h3>
                <p class="mb-2">{{product.description}}</p>
                <p class="mb-2 text-lg font-semibold">Price: ${{product.price}}</p>
                <div>
                    <router-link tag="button" :to="{name:'Product', params: {id:$route.params.id}}" class="border border-gray-400 bg-gray-200 py-2 px-2 rounded mr-2">Buy Product</router-link>
                    <a class="border border-gray-400 bg-gray-200 py-2 px-2 rounded">Write a review</a>
                </div>
            </div>
        </div>
        <hr>
        <div class="mt-4" v-if="reviews.length > 0">
            <p class="font-bold text-lg">Customer Reviews</p>
            <the-reviews v-if="reviews.length > 0" :reviews="reviews" :showComments="true"></the-reviews>
        </div>
        <simple-paginator v-if="reviews.length > 0" :next="next" :prev="prev" :current_page="currentPage" :action="action"></simple-paginator>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
import CustomerRating from '../components/reviews/CustomerRating.vue'
import TheReviews from '../components/reviews/TheReviews'
import SimplePaginator from '../components/UI/SimplePaginator.vue'
export default {
    components: {
        CustomerRating,
        TheReviews,
        SimplePaginator
    },
    data(){
        return {
            action: 'reviews/reviews'
        }
    },
    computed: {
     ...mapGetters({
            product: 'products/product',
            reviews: 'reviews/reviews',
            currentPage: 'reviews/currentPage',
            next: 'reviews/next',
            prev: 'reviews/prev'
        }),
        rating() {
            return this.product ? Number.parseInt(this.product.rating) : 0;
        }
    }
}
</script>