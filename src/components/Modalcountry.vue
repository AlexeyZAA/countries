<template>
      <v-row justify="center">
        <v-dialog v-if="dialog" persistent max-width="600px">
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
                      v-model="name"
                      disabled
                      required
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Столица" value=props.pcapital required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Регион" value="region" required></v-text-field>
                  </v-col>
                  <v-col cols="12">
                    <v-text-field label="Население*" value="population" required></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
              <small>*поля обязательные для заполнения</small>
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="dialog = false">Закрыть</v-btn>
              <v-btn color="blue darken-1" text @click="saveCountryItem">Сохранить</v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-row>
</template>

<script>
export default {
  name: "Modalcountry",
  props: ["dialog", "name", "capital", "region", "population"],
  data() {
    return {
    }
  },
  methods: {
    saveCountryItem() {
      this.$store.dispatch("UPDATECOUNTRY", this.formUpdate);
      this.formUpdate = {
        name: "",
        capital: "",
        region: "",
        population: ""
      };
      this.dialog = false;
    }
  }
};
</script>