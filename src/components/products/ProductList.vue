<template>
    <div class="px-16 py-4">
        <h2 class="text-lg mb-4 sm:text-2xl text-center font-semibold">Featured Products</h2>
        <div class="flex flex-wrap">
            <div v-for="i in 8" :key="i" class="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4">
                <base-card></base-card>
            </div>
        </div>
        <div class="text-center mt-3">
            <button class="btn sm:font-semibold">More Products</button>
        </div>
    </div>
</template>

<script>
import BaseCard from './../UI/BaseCard.vue'
export default {
    components: {
        BaseCard
    }
}
</script>