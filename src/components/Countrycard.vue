<template>
    <v-card class="mx-auto" max-width="250px">
      <v-img
        :src="flag"
        height="150px"
        width="250px"
      ></v-img>
      <v-card-actions>
        <v-spacer>
          <div class="titlbold">
            {{ name }}
            <router-link to="/about">О нас</router-link>
            </div>
        </v-spacer>
        <v-btn icon @click="showModal">
          <v-icon>mdi-pencil-box-outline</v-icon>
        </v-btn>
      </v-card-actions>

      <v-card-text class="text--primary">
        <v-simple-table dense>
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
</template>

<script>
export default {
  name: 'Countrycard',
  props: ['flag', 'name', 'capital', 'region', 'population', 'hide'],
  data() {
    return {
    }
  },
  methods: {
    showModal() {
       this.$store.dispatch('SETMODALDATA', {
        name: this.name, 
        capital: this.capital, 
        region: this.region,
        population: this.population
        })
      this.$store.dispatch('SETDIALOG', true)
    },
    saveCountryItem() {
      this.$store.dispatch('UPDATECOUNTRY', this.formUpdate)
      this.formUpdate = {
        name: '',
        capital: '',
        region: '',
        population: '',
      }
      this.dialog = false
    },
  },
}
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
