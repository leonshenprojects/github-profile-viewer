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
                    v-if="showBackButton"
                    class="footer__button footer__button--back"
                    @click="handleBack"
                >
                    Back
                </button>

                <button
                    class="footer__button"
                    @click="handleNext"
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
                'hasNoData',
                'nextPage',
			]),
            ...mapState([
                'currentPage',
                'previousPage',
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
                'clearErrors',
                'setCurrentPage',
                'validatePageData',
            ]),
            handleBack() {
                this.clearErrors();
                router.go(-1);
            },
            handleNext() {
                this.validatePageData();

                if (this.hasErrors) {
                    return;
                }

                router.push(this.nextPage);
            },
        },
        watch: {
            '$route' (to) {
                this.setCurrentPage(to.name);
                this.clearErrors();
            }
        },
        created() {
            if (this.$route.name === 'intro') {
                this.setCurrentPage('intro');
                return;
            }

            if (this.hasNoData) {
                router.push('/');
            }
        },
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
