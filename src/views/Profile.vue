<template>
<div class="Profile">
    <p class="Profile__text">
        Profile page!
    </p>
</div>
</template>

<script>
    import router from './../router';
	import { mapGetters } from 'vuex';

    export default {
        name: 'Profile',
        components: {
        },
        computed: {
			...mapGetters([
                'nextPage',
			]),
        },
        methods: {
            handleClick() {
                router.push(this.nextPage);
            },
        },
    }
</script>

<style lang="scss" scoped>
    @import './../static/css/_mediaqueries.scss';

    .Profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        max-width: 500px;
        margin: auto;
        padding-top: 5px;

		@media #{$tablet-up} {
			padding-top: 20px;
		}
    }

    .Profile__text {
        text-align: center;
    }
</style>
