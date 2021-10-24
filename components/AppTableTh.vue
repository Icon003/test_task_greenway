<template>
	<th class="app-table__th" @click="callback($event)">
		<slot></slot>
	</th>
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

<style scoped>
.app-table__th {
	padding-top: 12px;
	padding-right: 12px;
	padding-bottom: 12px;
	padding-left: 12px;

	font-family: "Gotham Pro";
	font-size: 18px;
	font-weight: 800;

	color: var(--text-color);

	cursor: pointer;
	text-align: left;
}

</style>
