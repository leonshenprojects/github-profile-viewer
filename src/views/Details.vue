<template>
  <div class="Details">
    <h1>This is an details page</h1>
  </div>
</template>

<script>
	import { mapMutations } from 'vuex';

    export default {
        name: 'Details',
        components: {
        },
        methods: {
            ...mapMutations([
                'setcurrentPage',
            ]),
        },
        created() {
            this.setcurrentPage('details');
        },
    }
</script>

<style lang="scss" scoped>
    @import './../static/css/_mediaqueries.scss';
</style>