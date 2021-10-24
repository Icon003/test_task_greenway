<template>
	<tr class="app-table__tr" @click="callback($event)">
		<slot></slot>
	</tr>
</template>

<script>
export default {
	methods: {
		callback(e) {
			this.$emit("click", e)
		}
	}
};
</script>

<style>
	.app-table__tr {
		border-bottom: 1px solid var(--table-border-color);

		cursor: pointer;
	}

</style>
