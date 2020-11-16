<template>
    <div>
        <h2 class="text-lg mb-4 sm:text-2xl text-center font-semibold">{{title}}</h2>
        <div class="flex flex-wrap">
            <div v-for="product in products" :key="product.id" class="w-full" :class="classes">
                <base-card :product="product"></base-card>
            </div>
        </div>
    </div>
</template>

<script>
import BaseCard from './../UI/BaseCard.vue'
export default {
    components: {
        BaseCard
    },
    props: ['classes','title','products']
}
</script>