<template>
    <div id="app">
        <header class="header">
            <div class="header__logo"><span>Github Profile Viewer</span></div>
        </header>

        <main class="main">
            <router-view/>
        </main>

        <footer
            v-if="showFooter"
            class="footer"
        >
            <div class="footer__buttons">
                <button
                    v-if="showBackButton" @click="handleBack"
                    class="footer__button footer__button--back"
                >
                    Back
                </button>

                <button
                    @click="handleNext"
                    class="footer__button"
                >
                    {{ nextButtonLabel }}
                </button>
            </div>
        </footer>
    </div>
</template>

<script>
    import router from './router';
	import { mapGetters, mapMutations, mapState } from 'vuex';
	
	export default {
        name: 'App',
        computed: {
			...mapGetters([
                'hasErrors',
                'nextPage',
			]),
            ...mapState([
                'currentPage',
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
            ...mapMutations([
                'validatePageData',
            ]),
            handleBack() {
                router.go(-1);
            },
            handleNext() {
                this.validatePageData();

                if (this.hasErrors) {
                    return;
                }

                router.push(this.nextPage);
            },
        }
    }
</script>

<style lang="scss">
    @import './static/css/_mediaqueries.scss';

    html, body {
        height: 100%;
    }

    #app {
        font-family: Avenir, Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        display: flex;
        flex-direction: column;
        height: 100%;
        color: #2c3e50;
    }

    .header {
        padding: 30px 0px;
    }

    .header__logo {
        display: flex;
        justify-content: center;
        font-size: 20px;
        font-weight: 900;

		@media #{$tablet-up} {
			font-size: 40px;
		}
    }

    .main {
        padding: 0px 20px;
    }

    .footer {
        display: flex;
        justify-content: center;
        flex: 1;
        padding-top: 40px;

		@media #{$tablet-up} {
			height: 200px;
		}
    }

    .footer__buttons {
        position: relative;
    }

    .footer__button {
        background-color: lightblue;
    }

    .footer__button--back {
        position: absolute;
        top: 0;
        right: 110%;
    }
</style>
