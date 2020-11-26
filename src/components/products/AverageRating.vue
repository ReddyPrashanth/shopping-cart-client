<template>
    <div class="w-1/6 text-blue-400">{{index}} star</div>
    <div class="w-2/3 mx-auto">
        <base-progressbar :percentage="percentage"></base-progressbar>
    </div>
    <div class="w-1/6 text-blue-400 mx-auto text-center">{{percentage}}%</div>
</template>
<script>
import BaseProgressbar from '../UI/BaseProgressbar.vue'
export default {
    components: {
        BaseProgressbar
    },
    props: ['percentage', 'index']
}
</script>