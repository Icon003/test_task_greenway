<template>
	<td class="app-table__td" :style="`width: ${width}`">
		<slot></slot>
	</td>
</template>

<script>
export default {
	props: {
		width: {
			type: String,
			require: false,
			default: 'auto'
		}
	}
};
</script>

<style scoped>
.app-table__td {
	padding-top: 12px;
	padding-right: 12px;
	padding-bottom: 12px;
	padding-left: 12px;

	font-family: "Gotham Pro";
	font-size: 16px;
	font-weight: 400;

	color: var(--text-color);
}

</style>
