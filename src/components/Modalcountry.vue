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
                <v-text-field
                  label="Наименование страны*"
                  v-model="MODAL.name"
                  disabled
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Столица"
                  v-model="MODAL.capital"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Регион"
                  v-model="MODAL.region"
                  required
                ></v-text-field>
              </v-col>
              <v-col cols="12">
                <v-text-field
                  label="Население*"
                  v-model="MODAL.population"
                  required
                ></v-text-field>
              </v-col>
            </v-row>
          </v-container>
          <small>*поля обязательные для заполнения</small>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="blue darken-1" text @click="dialogHide">Закрыть</v-btn>
          <v-btn color="blue darken-1" text @click="saveCountryItem"
            >Сохранить</v-btn
          >
        </v-card-actions>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'Modalcountry',
  methods: {
    saveCountryItem() {
      this.$store.dispatch('UPDATECOUNTRY', {
        name: this.MODAL.name,
        capital: this.MODAL.capital,
        region: this.MODAL.region,
        population: this.MODAL.population,
      })
      this.$store.dispatch('SETDIALOG', false)
    },
    dialogHide() {
      this.$store.dispatch('SETDIALOG', false)
    },
  },
  computed: {
    ...mapGetters(['DIALOG', 'MODAL']),
  },
}
</script>
