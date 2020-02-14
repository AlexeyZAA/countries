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
    <Modalcountry v-model="dialog" :name="formUpdate.name" :capital="formUpdate.capital" :region="formUpdate.region" :population="formUpdate.population" />
   </v-container>
</template>

<script>

import Modalcountry from "./Modalcountry.vue"
export default {
  name: "Countrycard",
    components: {
    Modalcountry
  },
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
    showModal(capital, region, population) {
      this.formUpdate.name = name
      this.formUpdate.capital = capital
      this.formUpdate.region = region
      this.formUpdate.population = population
      this.dialog = true
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
