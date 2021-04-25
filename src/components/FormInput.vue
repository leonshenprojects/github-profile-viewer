<template>
	<input
		class="FormInput"
		:class="{ 'is-invalid': state === false }"
		:id="id"
		:name="name"
		:value="value"
		:type="type"
		:required="required"
		@input="$emit('input', $event.target.value)"
	/>
</template>

<script>
	export default {
		model: {
			prop: 'value',
			event: 'input',
		},
		props: {
			id: {
				type: String,
				default: function() {
					return `v-form-input-${this._uid}`;
				},
			},
			name: {
				type: String,
			},
			value: {
				type: [String, Number],
				default: '',
			},
			type: {
				type: String,
				default: 'text',
			},
			required: {
				type: Boolean,
			},
			state: {
				type: Boolean,
				default: null,
			},
		},
	};
</script>

<style lang="scss" scoped>
	@import './../static/css/_variables.scss';

	.FormInput {
		width: 100%;
		padding-top: 11px;
		padding-bottom: 11px;
		font-size: 18px;
		line-height: 26px;
		border: 0;
		border-bottom: 2px solid $black;
		border-radius: 0;
		outline: none;

		&.is-invalid {
			border-color: $red;
		}
	}
</style>
