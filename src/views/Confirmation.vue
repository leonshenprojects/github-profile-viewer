<template>
  <div class="Confirmation">
    <h1>This is an confirmation page</h1>
  </div>
</template>

<script>
	import { mapMutations } from 'vuex';

    export default {
        name: 'Confirmation',
        components: {
        },
        methods: {
            ...mapMutations([
                'setcurrentPage',
            ]),
        },
        created() {
            this.setcurrentPage('confirmation');
        },
    }
</script>