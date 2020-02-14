<template>
  <v-container class="mx-auto" max-width="80%">
    <v-card>
      <v-img
        :src="flag"
        class="white--text"
        gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
        height="160px"
        width="100%"
      ></v-img>
      <v-card-actions>
        <v-spacer>
          <div class="titlbold">{{ name }}</div>
        </v-spacer>
        <v-btn icon @click="showModal(name, capital, region, population)">
          <v-icon>mdi-pencil-box-outline</v-icon>
        </v-btn>
      </v-card-actions>

      <v-card-text class="text--primary">
        <v-simple-table>
          <tbody>
            <tr>
              <td class="titlbold">Столица</td>
              <td>{{ capital }}</td>
            </tr>
            <tr>
              <td class="titlbold">Регион</td>
              <td>{{ region }}</td>
            </tr>
            <tr>
              <td class="titlbold">Население</td>
              <td>{{ population }}</td>
            </tr>
          </tbody>
        </v-simple-table>
      </v-card-text>
    </v-card>
    <v-card>
      <template>
        <v-row justify="center">
          <v-dialog v-model="dialog" persistent max-width="600px">
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
                        v-model="formUpdate.name"
                        disabled
                        required
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Столица" v-model="formUpdate.capital" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Регион" v-model="formUpdate.region" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Население*" v-model="formUpdate.population" required></v-text-field>
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
    </v-card>
  </v-container>
</template>

<script>
export default {
  name: "Countrycard",
  props: ["flag", "name", "capital", "region", "population"],
  data() {
    return {
      dialog: false,
      formUpdate: {
        name: "",
        capital: "",
        region: "",
        population: ""
      }
    };
  },
  methods: {
    showModal(name, capital, region, population) {
      this.dialog = true;
      this.formUpdate.name = name;
      this.formUpdate.capital = capital;
      this.formUpdate.region = region;
      this.formUpdate.population = population;
    },
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

<style scoped>
.headLeft {
  display: inline-block;
  left: 10px;
  position: absolute;
}
.titlbold {
  font-weight: bold;
}
</style>
