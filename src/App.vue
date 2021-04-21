<template>
    <div id="app">
        <header class="header">
            <div class="header__logo"><span>Github Profile Viewer</span></div>
        </header>

        <router-view/> 

        <footer v-if="showFooter">
            <button v-if="showBackButton" @click="handleBack">Back</button>
            <button @click="handleNext">{{ nextButtonLabel }}</button>
        </footer>
    </div>
</template>

<script>
    import router from './router';
	import { mapGetters } from 'vuex';
	
	export default {
        name: 'App',
        computed: {
			...mapGetters([
				'currentPage',
                'nextPage',
			]),
            nextButtonLabel() {
                switch (this.currentPage) {
                    case 'intro':
                        return 'Let\'s Go!';
                    case 'confirmation':
                        return 'Submit';
                    default:
                        return 'Next';
                }
            },
            showBackButton() {
                return this.currentPage !== 'intro';
            },
            showFooter() {
                return this.currentPage !== 'profile';
            },
        },
        methods: {
            handleBack() {
                router.go(-1);
            },
            handleNext() {
                router.push(this.nextPage);
            },
        }
    }
</script>

<style lang="scss">
    @import './static/css/_mediaqueries.scss';

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        color: #2c3e50;
    }

    .header {
        padding: 30px;
    }

    .header__logo {
        font-size: 20px;
        font-weight: 900;

		@media #{$tablet-up} {
			font-size: 40px;
		}
    }
</style>
