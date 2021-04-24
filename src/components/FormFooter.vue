<template>
    <div class="FormFooter">
        <div class="FormFooter__buttons">
            <button
                class="FormFooter__button FormFooter__button--back"
                @click="handleBack"
            >
                Back
            </button>

            <button
                class="FormFooter__button"
                type="submit"
                @click="handleNext"
            >
                {{ nextButtonLabel }}
            </button>
        </div>
    </div>
</template>

<script>
    import router from './../router';
	import { mapGetters, mapMutations, mapState } from 'vuex';
	
	export default {
		props: {
			form: {
				type: String,
			},
		},
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
                    case 'confirmation':
                        return 'Submit';
                    default:
                        return 'Next';
                }
            },
        },
        methods: {
            ...mapMutations([
                'clearErrors',
            ]),
            handleBack() {
                this.clearErrors();
                router.go(-1);
            },
            handleNext() {
                if (this.$parent.$refs.form && !this.$parent.$refs.form.reportValidity()) {
                    return;
                }

                router.push(this.nextPage);
            },
        },
    }
</script>

<style lang="scss">
    @import './../static/css/_mediaqueries.scss';
    @import './../static/css/_variables.scss';

    .FormFooter {
        display: flex;
        justify-content: center;
        flex: 1;
        padding-top: 40px;

		@media #{$tablet-up} {
			height: 200px;
		}
    }

    .FormFooter__buttons {
        position: relative;
    }

    .FormFooter__button {
        background-color: lightblue;
    }

    .FormFooter__button--back {
        position: absolute;
        top: 0;
        right: 110%;
    }
</style>
