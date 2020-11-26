<template>
    <div class="flex">
        <button type="button" v-for="i in rating" :key="i">
            <svg class="block h-3 w-3 text-yellow-500" :class="classes" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        </button>
        <button type="button" v-for="i in unrated" :key="i">
            <svg class="block text-gray-400" :class="classes" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"/></svg>
        </button>
    </div>
</template>
<script>
export default {
    props: {
        rating: {
            type: Number,
            default: 0
        },
        classes: {
            type: String,
            default: 'h-3 w-3'
        }
    },
    computed: {
        unrated(){
            return 5 - this.rating;
        }
    }
}
</script>