<template>
<div class="Profile">
    <img class="Profile__avatar" :src="profile.avatar_url"/>

    <table class="Profile__data">
        <tr>
            <td>Name:</td>
            <td>{{ profile.name }}</td>
        </tr>

        <tr>
            <td>Username:</td>
            <td>{{ profile.login }}</td>
        </tr>

        <tr>
            <td>URL:</td>
            <td><a :href="profile.html_url" target="_blank">{{ profile.html_url }}</a></td>
        </tr>

        <tr v-if="profile.bio">
            <td>Bio:</td>
            <td>{{ profile.bio }}</td>
        </tr>
    </table>
</div>
</template>

<script>
    import router from './../router';
	import { mapGetters, mapState } from 'vuex';

    export default {
        name: 'Profile',
        components: {
        },
        computed: {
            ...mapState([
                'profile',
            ]),
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
        max-width: 500px;
        margin: auto;
        padding-top: 5px;

		@media #{$tablet-up} {
			padding-top: 20px;
		}
    }

    .Profile__data {
        margin-top: 20px;
        border-spacing: 1em 0.5em;

        a {
            word-break: break-all;
        }
    }

    .Profile__avatar {
        width: 70%;
        margin: auto;
    }
</style>
