<template>
	<table class="app-table">
		<thead class="app-table__thead">
			<slot name="thead"></slot>
		</thead>
		<tbody class="app-table__tbody">
			<slot name="tbody"></slot>
		</tbody>
	</table>
</template>

<script>
export default {};
</script>

<style>
	.app-table {
		width: 100%;

		border-collapse: collapse;
	}
	.app-table__thead {
	}
	.app-table__tbody {
	}

</style>
