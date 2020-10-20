<template>
    <div class="px-32 flex items-center justify-center">
        <base-dropdown v-for="item in items" :key="item.id" :name="item.name" :categories="item.sub_categories"></base-dropdown>
    </div>
</template>
<script>
import BaseDropdown from './../UI/BaseDropdown.vue'
import data from './../../json/data.json'
export default {
    components: {
        BaseDropdown
    },
    data() {
        return {
            items: data
        }
    }
}
</script>