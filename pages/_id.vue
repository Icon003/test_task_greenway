<template>
	<main class="item-page">
		<div class="item-page__content">
			<div class="item-page__container-controlls">
				<div class="item-page__container-button">
					<button class="item-page__button item-page__button--icon item-page__button--back-arrow" @click="backMainPage"></button>
				</div>
			</div>
			<div class="item-page__container-comment">
				<AppComment :name="comment.name" :email="comment.email" :text="comment.body"/>
			</div>
		</div>
	</main>
</template>

<script>
import AppComment from '@/components/AppComment'

export default {
	components: {
		AppComment
	},
	async asyncData({params, $axios}) {
		// Получаем данные комментария по id
		const response = await $axios.get(`api/comments/${params.id}`)
		return {
			comment: response?.data
		}
	},
	methods: {
		// Метод для возврата на главную страницу
		backMainPage() {
			this.$router.push('/')
		}
	}
}
</script>

<style>
	.item-page {
		display: flex;

		justify-content: center;

		width: 100%;
		height: 100%;
		padding-top: 60px;
		padding-bottom: 60px;
	}
	.item-page__content {
		width: 100%;
	}
	.item-page__container-controlls {
		margin-bottom: 12px;
	}
	.item-page__container-button {
	}
	.item-page__button {
		width: 36px;
		height: 36px;

		cursor: pointer;
	}
	.item-page__button--icon {
		background: none;
		background-color: var(--text-color);

		mask-position: center;
		mask-repeat: no-repeat;
		mask-size: cover;
	}
	.item-page__button--back-arrow {
		mask-image: url("@/assets/icons/back-arrow.svg");
	}
	.item-page__container-title {
		margin-bottom: 1em;

		font-size: 32px;
	}
	.item-page__title {
		font-family: "Gotham Pro";
		font-size: inherit;
		font-weight: 600;

		color: var(--text-color);
	}
	.item-page__container-comment {
		padding: 30px;

		border: 1px solid var(--container-border-color);
		border-radius: 20px;
		background-color: var(--container-background-color);
	}

</style>
