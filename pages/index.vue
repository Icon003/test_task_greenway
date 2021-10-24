<template>
	<main class="main-page">
		<div class="main-page__container-table">
			<div class="main-page__container-title">
				<h1 class="main-page__title">Table of comments</h1>
			</div>
			<AppTable>
				<template v-slot:thead>
					<AppTableTr>
						<AppTableTh @click="changeSortingStatus">Id</AppTableTh>
						<AppTableTh>Name</AppTableTh>
						<AppTableTh>Email</AppTableTh>
					</AppTableTr>
				</template>
				<template v-slot:tbody>
					<AppTableTr
						v-for="comment of filteredComments"
						:key="comment.id"
						@click="$router.push(`/${comment.id}`)"
					>
						<AppTableTd width="10%">{{ comment.id }}</AppTableTd>
						<AppTableTd width="45%">{{ comment.name }}</AppTableTd>
						<AppTableTd width="45%">{{ comment.email }}</AppTableTd>
					</AppTableTr>
				</template>
			</AppTable>
		</div>
		<div class="main-page__container-pagination">
			<AppPaginations
				:totalPages="totalPages"
				:currentPage="currentPage"
				:maxVisibleButtons="5"
				@changePage="changeCurrentPage"
			/>
		</div>
	</main>
</template>

<script>
import AppTable from "@/components/AppTable";
import AppTableTr from "@/components/AppTableTr";
import AppTableTh from "@/components/AppTableTh";
import AppTableTd from "@/components/AppTableTd";
import AppPaginations from "@/components/AppPaginations";

export default {
	components: {
		AppTable,
		AppTableTr,
		AppTableTh,
		AppTableTd,
		AppPaginations
	},
	async fetch() {
		// Вызываем метод для получения комментариев
		await this.getComments();
	},
	data() {
		return {
			currentPage: 1,
			limit: 10,
			comments: [],
			sortingStatus: false,
			totalPages: 0,
			isLoading: true,
		};
	},
	methods: {
		// Метод получения комментариев
		async getComments() {
			try {
				const response = await this.$axios.get(
					"api/comments",
					{
						params: {
							_page: this.currentPage,
							_limit: this.limit
						}
					}
				);
				// Вычисляем колличество страниц на основе заголовка x-total-count
				this.totalPages = Math.ceil(
					response.headers["x-total-count"] / this.limit
				);

				this.comments = response?.data;
			} catch (error) {
				console.error(error);
			}
		},
		// Метод изменения статуса сортировки
		changeSortingStatus() {
			this.sortingStatus = !this.sortingStatus;
		},
		// Метод изменения текущей страницы
		async changeCurrentPage(page) {
			this.currentPage = page;

			// Вызываем метод для получения комментариев
			await this.getComments();
		}
	},
	computed: {
		// Вычисляемое свойство отфильтрованных комментариев
		filteredComments() {
			let copy = JSON.parse(JSON.stringify(this.comments));
			let result = copy.sort((a, b) => {
				return this.sortingStatus === false ? a.id - b.id : b.id - a.id;
			});
			return result;
		}
	}
};
</script>

<style scoped>
.main-page {
	width: 100%;
	height: 100%;
	padding-top: 60px;
	padding-bottom: 60px;
}
.main-page__container-table {
	margin-bottom: 20px;
	padding: 30px;

	border: 1px solid var(--container-border-color);
	border-radius: 20px;
	background-color: var(--container-background-color);
}
.main-page__container-title {
	margin-bottom: 30px;
}
.main-page__title {
	font-family: "Gotham Pro";
	font-size: 32px;
	font-weight: 800;

	color: var(--text-color);
}
.main-page__container-pagination {
	display: flex;

	justify-content: flex-end;

	border: 1px solid var(--container-border-color);
	border-radius: 20px;
	background-color: var(--container-background-color);
}

</style>
