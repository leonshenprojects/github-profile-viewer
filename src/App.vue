<template>
	<div id="app">
		<header class="header">
			<div class="header__logo"><span>Github Profile Viewer</span></div>
		</header>

		<main class="main">
			<router-view />
		</main>
	</div>
</template>

<script>
	import router from './router';
	import { mapGetters, mapMutations, mapState } from 'vuex';

	export default {
		name: 'App',
		computed: {
			...mapGetters(['hasNoData']),
			...mapState(['currentPage']),
		},
		methods: {
			...mapMutations(['setCurrentPage', 'setShowStep']),
		},
		watch: {
			$route(to) {
				if (to.name === '/') {
					this.setCurrentPage('/');
					return;
				}

				this.setCurrentPage(to.name);
			},
		},
		created() {
			if (this.$route.name === '/') {
				this.setCurrentPage('/');
				return;
			}

			if (this.hasNoData) {
				router.push('/');
			}
		},
	};
</script>

<style lang="scss">
	@import './static/css/_mediaqueries.scss';
	@import './static/css/_variables.scss';

	html,
	body {
		height: 100%;
	}

	#app {
		font-family: Avenir, Helvetica, Arial, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		display: flex;
		flex-direction: column;
		height: 100%;
		color: $black;
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

	.fade-enter-active,
	.fade-leave-active {
		transition: opacity 0.8s;
	}

	.fade-enter,
	.fade-leave-to {
		opacity: 0;
	}
</style>
