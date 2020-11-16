<template>
    <div class="my-2 text-center">
        <div class="border border-gray-400 rounded divide-x inline-flex">
            <button :disabled="isFirst" :class="{'cursor-not-allowed opacity-50': isFirst}" @click="paginate()" class="px-3 py-2 hover:bg-gray-200">First</button>
            <button :disabled="hasPrev" :class="{'cursor-not-allowed opacity-50': hasPrev}" @click="paginate(current_page-1)" class="px-3 py-2 hover:bg-gray-200">Previous</button>
            <button v-for="i in total_pages" :key="i" @click="paginate(i)" class="px-3 py-2 hover:bg-gray-200">{{i}}</button>
            <button :disabled="hasNext" :class="{'cursor-not-allowed opacity-50': hasNext}" @click="paginate(current_page+1)" class="px-3 py-2 hover:bg-gray-200">Next</button>
            <button :disabled="isLast" :class="{'cursor-not-allowed opacity-50': isLast}" @click="paginate(last_page)" class="px-3 py-2 hover:bg-gray-200">Last</button>
        </div>
    </div>
</template>
<script>
import {mapGetters} from 'vuex'
export default {
   computed: {
       isFirst(){
           return this.current_page==1;
       },
       isLast() {
           return this.current_page === this.last_page;
       },
       hasNext() {
           return this.next == null;
       },
       hasPrev() {
           return this.prev == null;
       },
       ...mapGetters({
           next: 'products/next',
           prev: 'products/prev',
           current_page: 'products/currentPage',
           last_page: 'products/lastPage',
           total: 'products/total',
           total_pages: 'products/totalPages'
       })
   },
    methods: {
        paginate(page=1){
            const category = this.$route.params.category;
            this.$router.push({name: 'Shop', params:{category}, query: {page:page}})
        }
    }
}
</script>