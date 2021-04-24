<template>
    <transition name="fade">
        <div v-if="show" class="Intro">
            <p class="Intro__text">
                Fill in your details and we'll show you some information about your Github profile.
            </p>

            <Navigation />
        </div>
    </transition>
</template>

<script>
    import router from './../router';
	import { mapGetters, mapMutations, mapState } from 'vuex';
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
            ...mapState([
                'show',
            ]),
        },
        methods: {
            ...mapMutations([
                'setShow',
            ]),
            handleClick() {
                router.push(this.nextPage);
            },
        },
        mounted() {
            this.setShow(true);
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
