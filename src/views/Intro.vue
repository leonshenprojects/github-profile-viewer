<template>
<div class="Intro">
    <p class="Intro__text">
        Fill in your details and we'll show you some information about your Github profile.
    </p>

    <Navigation />
    
</div>
</template>

<script>
    import router from './../router';
	import { mapGetters } from 'vuex';
    import Navigation from './part/Navigation';

    export default {
        name: 'Intro',
        components: {
            Navigation,
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

    .Intro {
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

    .Intro__text {
        text-align: center;
    }

    .Intro__button {
        margin-top: 30px;
    }
</style>
