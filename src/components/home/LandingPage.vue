<template>
    <div class="bg-gray-200 flex items-center justify-around">
        <div class="my-16 w-1/3 text-center">
            <h3 class="sm:font-semibold sm:text-lg mb-3 text-sm">Shopping cart application using Vue Js 3. You can use below link to visit our shopping page.</h3>
            <router-link :to="{name: 'Shop', params: {category: 'electronics'}}" class="bg-gray-200 p-1 sm:py-2 sm:px-4 rounded sm:font-semibold border-black border-2 hover:bg-gray-900 hover:text-white">Shop</router-link>
        </div>
        <div class="my-16">
            <svg class="h-32 w-32 sm:h-64 sm:w-64 fill-current" viewBox="0 0 24 24">
                <path d="M10 19.5c0 .829-.672 1.5-1.5 1.5s-1.5-.671-1.5-1.5c0-.828.672-1.5 1.5-1.5s1.5.672 1.5 1.5zm3.5-1.5c-.828 0-1.5.671-1.5 1.5s.672 1.5 1.5 1.5 1.5-.671 1.5-1.5c0-.828-.672-1.5-1.5-1.5zm1.336-5l1.977-7h-16.813l2.938 7h11.898zm4.969-10l-3.432 12h-12.597l.839 2h13.239l3.474-12h1.929l.743-2h-4.195z"/>
            </svg>
        </div>
    </div>
</template>