<template>
    <div class="relative pt-1">
        <div class="overflow-hidden h-4 mb-4 text-xs flex rounded" :class="classes">
            <div v-bind:style="{width: percentage+'%'}" class="shadow-none flex flex-col text-center whitespace-nowrap text-white justify-center bg-yellow-500"></div>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        percentage: {
            type: Number,
            default: 0
        },
        classes: {
            type: String,
            default: 'bg-gray-300'
        }
    }
}
</script>