<template>
    <div class="Confirmation">
        <form
            class="Confirmation__form"
            ref="form"
            @submit.prevent
        >
            <FormItem
                label-for="email"
                label="Email"
            >
                <FormInput
                    id="email"
                    v-model="email"
                    type="email"
                    :required="true"
                />      
            </FormItem>
                <FormCheckbox
                    v-model="agreeWithTerms"
                    text="I agree with all terms and services."
                    :required="true"
                />
            <FormItem>

            </FormItem>

            <Navigation nextButtonType="submit" />
        </form>
    </div>
</template>

<script>
	import { mapGetters, mapMutations, mapState } from 'vuex';
    import FormCheckbox from './../components/FormCheckbox';
    import FormInput from './../components/FormInput';
    import FormItem from './../components/FormItem';
    import Navigation from './part/Navigation';

    export default {
        name: 'Confirmation',
        components: {
            FormCheckbox,
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
            ]),
            agreeWithTerms: {
                get() {
                    return this.data.agreeWithTerms;
                },
                set(value) {
                    this.updateData({
                        ...this.data,
                        agreeWithTerms: value,
                    })
                },
            },
            email: {
                get() {
                    return this.data.email;
                },
                set(value) {
                    this.updateData({
                        ...this.data,
                        email: value,
                    })
                },
            },
        },
        methods: {
            ...mapMutations([
                'updateData',
            ]),
        },
    }
</script>

<style lang="scss" scoped>
    @import './../static/css/_mediaqueries.scss';

    .Confirmation {
        max-width: 500px;
        margin: auto;
        padding-top: 5px;

		@media #{$tablet-up} {
			padding-top: 20px;
		}
    }
</style>