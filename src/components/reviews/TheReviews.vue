<template>
    <div>
        <the-review v-for="review in reviews" :key="review.id" :review="review" :showComments="showComments"></the-review>
    </div>
</template>
<script>
import TheReview from './TheReview.vue'
export default {
    props: {
        reviews: {
            type: Array
        },
        showComments: {
            type: Boolean,
            defult:false
        }
    },
    components: {
        TheReview
    }
}
</script>