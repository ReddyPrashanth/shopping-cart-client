<template>
    <header class="bg-gray-900 text-white sm:flex sm:justify-between px-4 py-3">
        <div class="flex items-center justify-between">
            <div class="px-2">
                <router-link class="text-xl font-semibold flex items-center" :to="{name:'App'}">
                    <svg class="h-6 w-6 fill-current text-white mr-2" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
                    </svg>
                    <h2>SHOPPING CART</h2>
                </router-link>
            </div>
            <div class="sm:hidden">
                <button @click="isOpen = !isOpen">
                    <svg class="h-4 w-4 fill-current text-gray-500 focus:text-white focus:outline-none hover:text-white" viewBox="0 -53 384 384" xmlns="http://www.w3.org/2000/svg">
                        <path d="m368 154.667969h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 32h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/><path d="m368 277.332031h-352c-8.832031 0-16-7.167969-16-16s7.167969-16 16-16h352c8.832031 0 16 7.167969 16 16s-7.167969 16-16 16zm0 0"/>
                    </svg>
                </button>
            </div>
        </div>
        <div :class="isOpen ? 'block' : 'hidden'" class="pt-2 pb-2 sm:flex sm:items-center sm:pb-0 sm:pt-0"> 
            <router-link :to="{name:'Home'}" class="block px-2 py-1 mr-1 sm:px-4 text-sm hover:bg-gray-600 rounded font-semibold">Home</router-link>
            <router-link :to="{name: 'Shop', params: {category: 'laptops'}}" class="block px-2 py-1 mr-1 sm:px-4 text-sm hover:bg-gray-600 rounded font-semibold">Shop</router-link>
            <router-link :to="{name: 'Cart'}" class="block px-2 py-1 mr-1 sm:px-4 text-sm hover:bg-gray-600 rounded font-semibold">Cart <span v-if="quantity > 0" class="text-xs font-semibold inline-block px-1 rounded-full text-pink-500 bg-pink-200 last:mr-0 mr-1">{{quantity}}</span></router-link>
            <router-link :to="{name: 'Login'}" class="block px-2 py-1 mr-1 sm:px-4 text-sm hover:bg-gray-600 rounded font-semibold">Login</router-link>
        </div>
    </header>
</template>
<script>
import {mapGetters} from 'vuex';
export default {
    data(){
        return {
            isOpen: false
        }
    },
    computed: {
        ...mapGetters({
            quantity: 'cart/quantity'
        })
    }
}
</script>