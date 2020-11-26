<template>
    <div class="my-2 text-center">
        <div class="border border-gray-400 rounded divide-x inline-flex">
            <button :disabled="hasPrev" :class="{'cursor-not-allowed opacity-50': hasPrev}" @click="paginate(current_page-1)" class="px-3 py-2 hover:bg-gray-200">Previous</button>
            <button :disabled="hasNext" :class="{'cursor-not-allowed opacity-50': hasNext}" @click="paginate(current_page+1)" class="px-3 py-2 hover:bg-gray-200">Next</button>
        </div>
    </div>
</template>
<script>
export default {
    props: ['next','prev','current_page','action'],
    computed: {
        hasPrev() {
            return this.prev == null;
        },
        hasNext() {
            return this.next == null;
        }
    },
    methods: {
        paginate(page=1){
            if(this.action){
                const productId = this.$route.params.id;
                this.$store.dispatch(this.action, {productId, page});
            }
            console.log(this.prev);
            console.log(this.next);
            console.log(this.current_page);
        }
    }
}
</script>