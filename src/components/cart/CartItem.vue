<template>
    <div class="w-2/3">
    <router-link :to="{name:'Product',params:{id:item.product.id}}" class="font-semibold text-lg hover:text-blue-500 hover:underline">{{item.product.name}}</router-link>
        <p>{{item.product.description}}</p>
        <div class="flex divide-x my-2">
            <div class="pr-2">
                <select v-model="selected" class="border-2 rounded" @change="updateCart">
                    <option v-for="i in item.product.count" :value="i" :key="i">{{i}}</option>
                </select>
            </div>
            <div class="px-2">
                <button @click="deleteItem" class="text-sm hover:text-red-500 hover:underline">delete</button>
            </div>
            <div class="px-2">
                <button v-if="!item.saved_for_later" @click="saveForLater" class="text-sm hover:text-blue-600 hover:underline">save for later</button>
                <button @click="moveToCart" v-else class="text-sm hover:text-blue-600 hover:underline">add to cart</button>
            </div>
        </div>
    </div>
    <div class="w-1/3">
        <p class="float-right">${{item.product.price}}</p>
    </div>
</template>
<script>
export default {
    props: ['item', 'action'],
    data() {
        return {
            selected: this.item.quantity
        }
    },
    methods: {
        updateCart() {
            this.$store.dispatch('cart/updateCart', {id: this.item.id, quantity: this.selected});
        },
        deleteItem() {
            this.$store.dispatch(this.action, this.item.id);
        },
        saveForLater() {
            this.$store.dispatch('cart/saveForLater', this.item.id);
        },
        moveToCart() {
            this.$store.dispatch('cart/moveToCart', this.item.id);
        }
    }
}
</script>