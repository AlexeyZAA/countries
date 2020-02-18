<template>
	<v-row justify="center">
		<v-dialog v-model="DIALOG" persistent max-width="600px">
			<v-card>
				<v-card-title>
					<span class="headline">Изменение информации о стране</span>
				</v-card-title>
				<v-card-text>
					<v-container>
						<v-row>
							<v-col cols="12">
								<v-text-field label="Наименование страны*" v-model="MODAL.name" disabled></v-text-field>
							</v-col>
							<v-col cols="12">
								<ValidationProvider name="MODAL.capital" rules="required">
									<div slot-scope="{ errors }">
										<v-text-field label="Столица*" v-model="MODAL.capital"></v-text-field>
										<p>
											<span class="danger">{{ errors[0] }}</span>
										</p>
									</div>
								</ValidationProvider>
							</v-col>
							<v-col cols="12">
								<ValidationProvider name="MODAL.region" rules="required">
									<div slot-scope="{ errors }">
										<v-text-field label="Регион" v-model="MODAL.region"></v-text-field>
										<p>
											<span class="danger">{{ errors[0] }}</span>
										</p>
									</div>
								</ValidationProvider>
							</v-col>
							<v-col cols="12">
								<ValidationProvider name="MODAL.population" rules="required">
									<div slot-scope="{ errors }">
										<v-text-field label="Население" v-model="MODAL.population"></v-text-field>
										<p>
											<span class="danger">{{ errors[0] }}</span>
										</p>
									</div>
								</ValidationProvider>
							</v-col>
						</v-row>
					</v-container>
					<small>*поля обязательные для заполнения</small>
				</v-card-text>
				<v-card-actions>
					<v-spacer></v-spacer>
					<v-btn color="blue darken-1" text @click="dialogHide">Закрыть</v-btn>
					<v-btn color="blue darken-1" text @click="saveCountryItem" :disabled="isFormValid">Сохранить</v-btn>
				</v-card-actions>
			</v-card>
		</v-dialog>
	</v-row>
</template>

<script>
import { mapGetters } from "vuex";
import { ValidationProvider } from "vee-validate";

export default {
	name: "Modalcountry",
	components: {
		ValidationProvider
	},
	data() {
		return {};
	},
	methods: {
		saveCountryItem() {
			this.$store.dispatch("UPDATECOUNTRY", {
				name: this.MODAL.name,
				capital: this.MODAL.capital,
				region: this.MODAL.region,
				population: this.MODAL.population
			});
			this.$store.dispatch("SETDIALOG", false);
		},
		dialogHide() {
			this.$store.dispatch("SETDIALOG", false);
		}
	},
	computed: {
		...mapGetters(["DIALOG", "MODAL"]),
		isFormValid() {
			if (this.MODAL.capital && this.MODAL.region && this.MODAL.population) {
				return false;
			} else {
				return true;
			}
		}
	}
};
</script>

<style lang="scss">
@import "@/styles/_app.scss";
.danger {
	color: $danger;
}
</style>
