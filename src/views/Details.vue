<template>
    <transition name="fade">
        <div v-if="show" class="Details">
            <form
                class="Details__form"
                ref="form"
                @submit.prevent
            >
                <FormItem
                    label-for="firstName"
                    label="First Name"
                >
                    <FormInput
                        id="firstName"
                        v-model="firstName"
                        :required="true"
                    />      
                </FormItem>

                <FormItem
                    label-for="lastName"
                    label="Last Name"
                >
                    <FormInput
                        id="lastName"
                        v-model="lastName"
                        :required="true"
                    />      
                </FormItem>

                <FormItem
                    label-for="username"
                    label="Github Username"
                    :state="!hasErrorForField('username')"
                    :error="getErrorForField('username')"
                >
                    <FormInput
                        id="username"
                        v-model="username"
                        :required="true"
                        :state="!hasErrorForField('username')"
                        @input="clearError('username')"
                    />      
                </FormItem>

                <Navigation />
            </form>
        </div>
    </transition>
</template>

<script>
	import { mapGetters, mapMutations, mapState } from 'vuex';
    import FormInput from './../components/FormInput';
    import FormItem from './../components/FormItem';
    import Navigation from './part/Navigation';

    export default {
        name: 'Details',
        components: {
            Navigation,
            FormInput,
            FormItem,
        },
        data() {
            return {
            };
        },
        computed: {
			...mapGetters([
                'getErrorForField',
                'hasErrorForField',
			]),
            ...mapState([
                'data',
                'show',
            ]),
            firstName: {
                get() {
                    return this.data.firstName;
                },
                set(value) {
                    this.updateData({
                        ...this.data,
                        firstName: value,
                    })
                },
            },
            lastName: {
                get() {
                    return this.data.lastName;
                },
                set(value) {
                    this.updateData({
                        ...this.data,
                        lastName: value,
                    })
                },
            },
            username: {
                get() {
                    return this.data.username;
                },
                set(value) {
                    this.updateData({
                        ...this.data,
                        username: value,
                    })
                },
            },
        },
        methods: {
            ...mapMutations([
                'clearError',
                'setShow',
                'updateData',
            ]),
        },
        mounted() {
            this.setShow(true);
        },
    }
</script>

<style lang="scss" scoped>
    @import './../static/css/_mediaqueries.scss';

    .Details {
        max-width: 500px;
        margin: auto;
        padding-top: 5px;

		@media #{$tablet-up} {
			padding-top: 20px;
		}
    }
</style>