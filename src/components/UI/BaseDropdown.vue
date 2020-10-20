<template>
    <div class="dropdown inline-block relative p-2">
        <button class="pr-2 rounded inline-flex items-center focus:outline-none">
        <span class="mr-1">{{name}}</span>
        <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/> </svg>
        </button>
        <ul class="dropdown-menu absolute hidden text-gray-700 border border-gray-400 rounded mt-1">
            <li v-for="category in categories" :key="category.id"><router-link class="bg-white hover:bg-gray-400 pl-2 py-2 pr-8 block whitespace-no-wrap" :to="{name: 'Shop', params: {category: category.tag}}">{{category.name}}</router-link></li>
        </ul>
    </div>
</template>
<script>
export default {
    props: ['name', 'categories'],
    data() {
        return {
            isOpen: false
        }
    }
}
</script>