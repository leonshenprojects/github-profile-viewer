<template>
    <div class="Navigation">
        <div class="Navigation__buttons">
            <button
                v-if="previousPage"
                class="Navigation__button Navigation__button--back"
                @click="handleBack"
            >
                Back
            </button>

            <button
                v-if="nextPage"
                class="Navigation__button"
                :disabled="disableNextButton"
                :type="nextButtonType"
                @click="handleNext"
            >
                {{ nextButtonLabel }}
            </button>
        </div>
    </div>
</template>

<script>
    import router from '../../router';
	import { mapGetters, mapMutations, mapState } from 'vuex';
	
	export default {
		props: {
			nextButtonType: {
				type: String,
                default: 'button',
			},
		},
        computed: {
			...mapGetters([
                'hasErrors',
                'nextPage',
                'previousPage',
			]),
            ...mapState([
                'currentPage',
            ]),
            disableNextButton() {
                if (this.currentPage === '/') {
                    return false;
                }

                return this.hasErrors;
            },
            nextButtonLabel() {
                switch (this.currentPage) {
                    case '/':
                        return 'Let\'s go!';
                    case 'confirmation':
                        return 'Submit';
                    default:
                        return 'Next';
                }
            },
        },
        methods: {
            ...mapMutations([
                'setShow',
            ]),
            handleBack() {
                this.setShow(false);
                setTimeout(() => {
                    router.push(this.previousPage);
                }, 800);
            },
            async handleNext() {
                if (this.$parent.$refs.form && !this.$parent.$refs.form.reportValidity()) {
                    return;
                }

                if (this.currentPage === 'confirmation') {
                    const isSuccess = await this.$store.dispatch('fetchProfile');

                    if (isSuccess) {
                        this.setShow(false);
                        setTimeout(() => {
                            router.push(this.nextPage);
                        }, 800);

                        return
                    }

                    this.setShow(false);
                    setTimeout(() => {
                        router.push('details');
                    }, 800);
                    
                    return;
                }

                this.setShow(false);
                setTimeout(() => {
                    router.push(this.nextPage);
                }, 800);
            },
        },
    }
</script>

<style lang="scss">
    @import './../../static/css/_mediaqueries.scss';
    @import './../../static/css/_variables.scss';

    .Navigation {
        display: flex;
        justify-content: center;
        flex: 1;
        padding-top: 40px;

		@media #{$tablet-up} {
			height: 200px;
		}
    }

    .Navigation__buttons {
        position: relative;
    }

    .Navigation__button {
        background-color: lightblue;
    }

    .Navigation__button--back {
        position: absolute;
        top: 0;
        right: 110%;
    }
</style>
