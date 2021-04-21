<template>
  <div class="Intro">
    <img alt="Vue logo" src="../assets/logo.png">
  </div>
</template>

<script>
	import { mapMutations } from 'vuex';

    export default {
        name: 'Intro',
        components: {
        },
        methods: {
            ...mapMutations([
                'setcurrentPage',
            ]),
        },
        created() {
            this.setcurrentPage('intro');
        },
    }
</script>
