<template>
    <div class="my-6">
        <div class="flex flex-wrap">
            <the-rating :rating="rating"></the-rating>
            <p class="font-bold ml-2">{{review.title}}</p>
        </div>
        <p class="text-gray-700 text-sm mb-2">Reviewed in United States on {{isoDateFormat}}</p>
        <p>{{review.description}}</p>
        <div class="flex flex-wrap my-2 divide-x divide-gray-400">
            <div><button class="bg-gray-100 border border-gray-500 text-sm rounded px-2 mr-4">Helpful</button></div>
            <div v-if="showComments"><button @click="getComments" class="text-gray-700 px-2 mx-2 text-sm hover:text-blue-500 hover:underline">{{review.comments_count}} comments</button></div>
            <div v-else><a class="text-gray-700 px-2 mx-2 text-sm">Comment</a></div>
            <div><a class="text-gray-700 px-2 mx-2 text-sm">Report Abuse</a></div>
        </div>
        <div v-if="showComments && show" class="mt-4">
            <div v-if="hide">
                <textarea name="comment" rows="3" class="w-full border border-gray-500 rounded"></textarea>
            </div>
            <div class="flex flex-wrap">
                <div class="w-1/2">
                    <p class="text-gray-500">Showing {{review.comments_count}} comments</p>
                </div>
                <div class="w-1/2">
                    <button v-if="hide" class="bg-gray-100 border border-gray-500 text-sm rounded p-1 m-1 float-right">Post a comment</button>
                    <button @click="hide = !hide" class="bg-gray-100 border border-gray-500 text-sm rounded p-1 m-1 float-right">{{hide ? 'Cancel' : 'Comment'}}</button>
                </div>
            </div>
            <hr>
            <div v-for="comment in comments" :key="comment.id">
                <div class="mx-8 my-2">
                    <div class="flex text-sm">
                        <p class="text-blue-500 mb-1 mr-4">{{comment.user.name}}</p>
                        <p class="text-gray-500">5 months ago</p>
                    </div>
                    <p class="mb-4">{{comment.description}}</p>
                    <hr>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import TheRating from '../products/TheRating.vue';
import Client from '../../clients/AxiosClient';
export default {
  components: { TheRating },
    props: {
        review: {
            type: Object
        },
        showComments: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            hide: false,
            show: false,
            comments: []
        }
    },
    computed: {
        isoDateFormat(){
            return new Date(this.review.created_at).toLocaleString();
        },
        rating() {
            return Number.parseInt(this.review.rating);
        }
    },
    methods: {
        async getComments(){
            this.show = !this.show;
            if(this.review && this.review.comments_count > 0 && this.comments.length == 0){
                const response = await Client.get(`/reviews/${this.review.id}/comments`);
                this.comments = response.data.data
            }
        }
    }
}
</script>