<template>
	<div class="app">
		<div class="app__wrapper">
			<Nuxt />
		</div>
	</div>
</template>

<script>
export default {

}
</script>

<style>
	* {
		box-sizing: border-box;
		margin: 0;
		padding: 0;
	}
	.app {
		width: 100%;
		height: 100vh;
	}
	.app__wrapper {
		width: 100%;
		max-width: 1440px;
		height: 100%;
		margin: 0 auto;
	}

</style>
