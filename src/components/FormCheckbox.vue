<template>
	<div class="FormCheckbox">
		<input
			class="FormCheckbox__input"
			type="checkbox"
			:id="id"
			:name="name"
			:checked="checked"
            :required="required"
			@change="$emit('change', $event.target.checked)"
		/>
		
		<label
			class="FormCheckbox__label"
			:for="id"
		>
			{{ text }}
		</label>
	</div>
</template>

<script>
	export default {
		model: {
			prop: 'checked',
			event: 'change',
		},
		props: {
			id: {
				type: String,
				default: function() {
					return `v-form-checkbox-${this._uid}`;
				},
			},
			name: {
				type: String,
			},
			text: {
				type: String,
			},
			checked: {
				type: Boolean,
				default: false,
			},
			required: {
				type: Boolean,
			},
		},
	};
</script>

<style lang="scss" scoped>
	.FormCheckbox {
		display: flex;
	}
	
	.FormCheckbox__label {
		cursor: pointer;
		padding-left: 12px;
		font-size: 14px;
		font-weight: bold;
		line-height: 20px;
	}

    .FormCheckbox__input {
        margin-top: 3px;
    }
</style>