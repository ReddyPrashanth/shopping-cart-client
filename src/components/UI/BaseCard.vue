<template>
    <div class="bg-white rounded overflow-hidden shadow-lg m-1">
        <router-link :to="{name:'Product',params:{id:product.id}}">
            <img class="w-full" src="./../../assets/images/macbook.jpeg" alt="Sunset in the mountains">
        </router-link>
        <div class="px-4">
            <div class="font-semibold text-xl mb-2">{{product.name}}</div>
            <p class="text-gray-700 text-base">
                {{description}}
            </p> 
        </div>
        <div class="flex items-center justify-between px-4 py-3">
            <p>${{product.price}}</p>
            <div>
                <the-rating :rating="rating"></the-rating>
            </div>
        </div>
    </div>
</template>
<script>
import TheRating from './../products/TheRating.vue'
export default {
    components: {
        TheRating
    },
    props: ['product'],
    computed: {
        description() {
            if(this.product.description.length <= 100){
                return this.product.description;
            }
            return this.product.description.slice(0,100)+'...';
        },
        rating(){
            return Number.parseInt(this.product.rating);
        }
    },
}
</script>