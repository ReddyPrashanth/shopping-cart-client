<template>
    <div>
        <p class="font-bold text-lg mb-2">Cutomer Ratings</p>
        <div class="flex flex-wrap mb-2 my-6">
            <div class="w-1/3">
                <the-rating classes="h-6 w-6" :rating="rating"></the-rating>
            </div>
            <div class="w-2/3">
                {{rating}} out of 5
            </div>
        </div>
        <p class="text-gray-600 text-sm mb-2">1,998 global ratings</p>
        <div class="flex flex-wrap">
            <average-rating :percentage="79" :index="5"></average-rating>
        </div>
        <div class="flex flex-wrap">
            <average-rating :percentage="14" :index="4"></average-rating>
        </div>
        <div class="flex flex-wrap">
            <average-rating :percentage="4" :index="3"></average-rating>
        </div>
        <div class="flex flex-wrap">
            <average-rating :percentage="1" :index="2"></average-rating>
        </div>
        <div class="flex flex-wrap">
            <average-rating :percentage="2" :index="1"></average-rating>
        </div>
    </div>
</template>
<script>
import AverageRating from '../products/AverageRating'
import TheRating from '../products/TheRating'
export default {
    components: {
        AverageRating,
        TheRating
    },
    props: {
        rating: {
            type: Number,
            default: 0
        },
    }
}
</script>