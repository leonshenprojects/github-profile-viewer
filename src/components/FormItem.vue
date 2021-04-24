<template>
    <div class="FormItem">
        <label
			v-if="!!label"
			class="FormItem__label"
			:for="labelFor"
		>
            {{ label }}
		</label>

		<div class="FormItem__content">
			<slot />
		</div>

        <div
            v-if="error"
            class="FormItem__error"
        >
            <p> {{ error }} </p>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'FormItem',
        props: {
			error: {
				type: String,
				default: '',
			},
			label: {
				type: String,
				default: '',
			},
			labelFor: {
				type: String,
				default: '',
			},
        }
    }
</script>


<style lang="scss">
    @import './../static/css/_mediaqueries.scss';
    @import './../static/css/_variables.scss';

	.FormItem + .FormItem {
		margin-top: 25px;
		
		@media #{$tablet-up} {
			margin-top: 40px;
		}
	}
	
	.FormItem__label {
		display: block;
		margin-bottom: 10px;
		font-size: 16px;
        font-weight: 600;
		line-height: 18px;
		color: $black;
	}
	
	.FormItem__content {
		margin-bottom: 15px;
		font-size: 16px;
		line-height: 27px;
	}

    .FormItem__error {
        color: red;
    }
</style>