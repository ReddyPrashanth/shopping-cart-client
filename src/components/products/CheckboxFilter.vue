<template>
    <div class="px-2 py-3">
        <div class="flex items-center justify-between pb-2">
            <p class="font-medium">{{name}}</p>
            <div class="cursor-pointer" @click="isOpen = !isOpen">
                <svg v-if="!isOpen" class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path d="M600.002 210.605L421.285 389.336L0 810.559l178.721 178.836l421.281-421.341l421.281 421.341L1200 810.559L778.733 389.336L600.002 210.605z" fill="#626262"/></svg>
                <svg v-else class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true" focusable="false" width="1em" height="1em" style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);" preserveAspectRatio="xMidYMid meet" viewBox="0 0 1200 1200"><path d="M600.006 989.352l178.709-178.709L1200 389.357l-178.732-178.709L600.006 631.91L178.721 210.648L0 389.369l421.262 421.262l178.721 178.721h.023z" fill="#626262"/></svg>
            </div>
        </div>
        <div v-if="isOpen">
            <label v-for="filter in filters" :key="filter" class="block">
                <input class="mr-3 leading-tight" type="checkbox">
                <span class="text-sm">
                    {{filter}}
                </span>
            </label>
        </div>
    </div>
</template>
<script>
export default {
    props: ['filters', 'name'],
    data() {
        return {
            isOpen: true
        }
    },
}
</script>