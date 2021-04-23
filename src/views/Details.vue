<template>
  <div class="Details">
        <FormItem
            label-for="firstName"
            label="First Name"
            :state="!hasErrorForField('firstName')"
            :error="getErrorForField('firstName')"
        >
            <FormInput
                id="firstName"
                v-model="firstName"
                :state="!hasErrorForField('firstName')"
                @input="clearError('firstName')"
            />      
        </FormItem>

        <FormItem
            label-for="lastName"
            label="Last Name"
            :state="!hasErrorForField('lastName')"
            :error="getErrorForField('lastName')"
        >
            <FormInput
                id="lastName"
                v-model="lastName"
                :state="!hasErrorForField('lastName')"
                @input="clearError('lastName')"
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
                :state="!hasErrorForField('username')"
                @input="clearError('username')"
            />      
        </FormItem>
  </div>
</template>

<script>
	import { mapGetters, mapMutations, mapState } from 'vuex';
    import FormInput from './../components/FormInput';
    import FormItem from './../components/FormItem';

    export default {
        name: 'Details',
        components: {
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
                'updateData',
            ]),
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