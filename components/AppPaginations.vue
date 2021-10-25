<template>
	<ul class="app-pagination">
		<li class="app-pagination__item">
			<button class="app-pagination__button" @click="$emit('changePage', 1)">First</button>
		</li>
		<li class="app-pagination__item" v-for="page of resultPages" :key="page">
			<button
			:class="['app-pagination__button',{'app-pagination__button--active': page === currentPage}]"
			:disabled="page === currentPage"
			@click="$emit('changePage', page)">{{ page }}</button>
		</li>
		<li class="app-pagination__item">
			<button class="app-pagination__button" @click="$emit('changePage', totalPages)">Last</button>
		</li>
	</ul>
</template>

<script>
export default {
	name: "AppPagination",
	props: {
		totalPages: {
			type: Number,
		},
		currentPage: {
			type: Number,
		},
		maxVisibleButtons: {
			type: Number,
		}
	},
	computed: {
		// Вычисляемое своейство для расчёта кнопки стартовой страницы
		firstPage() {
			if (this.currentPage === 1) {
				return 1;
			} else if(this.currentPage === this.totalPages) {
				return this.totalPages - this.maxVisibleButtons + 1;
			} else {
				return this.currentPage - 1;
			}
		},
		// Вычисляемое своейство для расчёта кнопки стартовой страницы
		lastPage() {
			return Math.min(
				this.firstPage + this.maxVisibleButtons - 1,
				this.totalPages
			);
		},
		// Вычисляемое свойство для рассчёта видимых кнопок пагинации
		resultPages() {
			const range = [];

			for (let i = this.firstPage; i <= this.lastPage; i += 1) {
				range.push(i)
			}

			return range;
		},
	},
}
</script>

<style scoped>
	.app-pagination {
		display: flex;

		margin: -6px;
		padding: 30px;

		list-style-type: none;
	}
	.app-pagination__item {
		margin: 6px;
	}
	.app-pagination__button {
		padding-top: 8px;
		padding-right: 12px;
		padding-bottom: 8px;
		padding-left: 12px;

		font-family: "Gotham Pro";
		font-size: 16px;
		font-weight: 400;

		color: var(--button-pagination-text-color);
		border: none;
		border-radius: 8px;
		background-color: var(--button-pagination-background-color);

		cursor: pointer;
	}
	.app-pagination__button--active {
		color: var(--button-pagination-active-text-color);
		background-color: var(--button-pagination-active-background-color);
	}

</style>
