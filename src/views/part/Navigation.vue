<template>
	<div class="Navigation">
		<div class="Navigation__buttons">
			<button
				@click="handleBack"
				class="Navigation__backButton"
				v-if="previousPage"
			>
				Back
			</button>

			<button
				:disabled="disableNextButton"
				:type="nextButtonType"
				@click="handleNext"
				class="Navigation__nextButton"
				v-if="nextPage"
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
			...mapGetters(['hasErrors', 'nextPage', 'previousPage']),
			...mapState(['currentPage']),
			disableNextButton() {
				if (this.currentPage === '/') {
					return false;
				}

				return this.hasErrors;
			},
			nextButtonLabel() {
				switch (this.currentPage) {
					case '/':
						return "Let's go!";
					case 'confirmation':
						return 'Submit';
					default:
						return 'Next';
				}
			},
		},
		methods: {
			...mapMutations(['setShowStep']),
			handleBack() {
				this.setShowStep(false);
				setTimeout(() => {
					router.push(this.previousPage);
				}, 800);
			},
			async handleNext() {
				if (
					this.$parent.$refs.form &&
					!this.$parent.$refs.form.reportValidity()
				) {
					return;
				}

				if (this.currentPage === 'confirmation') {
					await this.handleSubmit();

					return;
				}

				this.setShowStep(false);
				setTimeout(() => {
					router.push(this.nextPage);
				}, 800);
			},
			async handleSubmit() {
				const isSuccess = await this.$store.dispatch('fetchProfile');

				if (isSuccess) {
					this.setShowStep(false);
					setTimeout(() => {
						router.push(this.nextPage);
					}, 800);

					return;
				}

				this.setShowStep(false);
				setTimeout(() => {
					router.push('details');
				}, 800);
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import './../../static/css/_mediaqueries.scss';
	@import './../../static/css/_variables.scss';

	.Navigation {
		display: flex;
		justify-content: center;
		flex: 1;
		padding-top: 40px;
		padding-bottom: 60px;

		@media #{$tablet-up} {
			padding-bottom: 80px;
		}
	}

	.Navigation__buttons {
		position: relative;
	}

	.Navigation__nextButton {
		background-color: $lightBlue;
	}

	.Navigation__backButton {
		position: absolute;
		top: 0;
		right: 110%;
		background-color: transparent;
	}
</style>
