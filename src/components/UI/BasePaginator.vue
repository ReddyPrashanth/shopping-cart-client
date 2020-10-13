<template>
    <div class="my-2 text-center">
        <div class="border border-gray-400 rounded divide-x inline-flex">
            <button disabled class="px-3 py-2 hover:bg-gray-200 cursor-not-allowed opacity-50">First</button>
            <button disabled class="px-3 py-2 hover:bg-gray-200">Previous</button>
            <button class="px-3 py-2 hover:bg-gray-200">1</button>
            <button class="px-3 py-2 hover:bg-gray-200">2</button>
            <button class="px-3 py-2 hover:bg-gray-200">....</button>
            <button class="px-3 py-2 hover:bg-gray-200">5</button>
            <button class="px-3 py-2 hover:bg-gray-200">6</button>
            <button class="px-3 py-2 hover:bg-gray-200">Next</button>
            <button disabled class="px-3 py-2 hover:bg-gray-200">Last</button>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            pagination: {
                current_page: 1,
                last_page: 10
            },
            pages: 10
        }
    },
    method: {
        paginate(){
            console.log('clicked');
        }
    }
}
</script>