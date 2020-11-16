<template>
    <div class="px-32 flex items-center justify-center">
        <base-dropdown v-for="item in categories" :key="item.id" :name="item.name" :categories="item.sub_categories"></base-dropdown>
    </div>
</template>
<script>
import BaseDropdown from './../UI/BaseDropdown.vue'
export default {
    components: {
        BaseDropdown
    },
    props: ['categories']
}
</script>