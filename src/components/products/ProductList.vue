<template>
    <div>
        <h2 class="text-lg mb-4 sm:text-2xl text-center font-semibold">{{title}}</h2>
        <div class="flex flex-wrap">
            <div v-for="i in 8" :key="i" class="w-full" :class="classes">
                <base-card></base-card>
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
    props: ['classes','title']
}
</script>