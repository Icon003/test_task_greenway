<template>
	<div class="app-comment">
		<div class="app-comment__header">
			<div class="app-comment__container-photo">
				<img v-if="imageSrc !== null" class="app-comment__photo" :src="imageSrc" :alt="`Фото пользователя ${name}`">
				<img v-else class="app-comment__photo" src="@/assets/image/cat.jpg" :alt="`Фото пользователя ${name}`">
			</div>
			<div class="app-comment__container-user-info">
				<span class="app-comment__name">{{name}}</span>
				<span class="app-comment__email">{{email}}</span>
			</div>
		</div>
		<div class="app-comment__body">
			<div class="app-comment__container-text">
				<p class="app-comment__text">{{text}}</p>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	props: {
		imageSrc: {
			type: String,
			require: false,
			default: null
		},
		name: {
			type: String,
			require: true
		},
		email: {
			type: String,
			require: true
		},
		text: {
			type: String,
			require: true
		},
	}
};
</script>

<style>
	.app-comment {
		width: 100%;
	}
	.app-comment__header {
	}
	.app-comment__container-photo {
		width: 150px;
		height: 150px;
		margin-bottom: 20px;

		border-radius: 100%;
	}
	.app-comment__photo {
		width: 100%;
		height: 100%;

		border-radius: inherit;

		object-fit: cover;
	}
	.app-comment__container-user-info {
	}
	.app-comment__name {
		display: block;

		margin-bottom: 0.2em;

		font-family: "Gotham Pro";
		font-size: 24px;
		font-weight: 500;

		color: var(--text-color);
	}
	.app-comment__email {
		display: block;

		margin-bottom: 1em;

		font-family: "Gotham Pro";
		font-size: 20px;
		font-weight: 400;

		color: var(--text-opacity-color);
	}
	.app-comment__body {
	}
	.app-comment__container-text {
	}
	.app-comment__text {
		font-family: "Gotham Pro";
		font-size: 16px;
		font-weight: 400;

		color: var(--text-color);
	}

</style>
