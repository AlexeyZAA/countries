<template>
  <v-app>
    <v-app-bar app>
      <div class="headLeft">
        <h1>Страны мира</h1>
      </div>
      <div class="headRight">
        <a href="https://restcountries.eu/">https://restcountries.eu/</a>
      </div>
    </v-app-bar>
    <v-content>
      <template>
        <v-container fluid>
          <v-data-iterator
            v-if="$store.getters.COUNTRY"
            :items="COUNTRY"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            hide-default-footer
          >
            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="item in props.items"
                  :key="item.name"
                  cols="12"
                  sm="6"
                  md="4"
                  lg="3"
                >
                  <Countrycard
                    :flag="item.flag"
                    :name="item.name"
                    :capital="item.capital"
                    :region="item.region"
                    :population="item.population"
                  />
                </v-col>
              </v-row>
            </template>
            <template v-slot:footer>
              <v-row class="mt-2" align="center" justify="center">
                <span class="grey--text">На странице</span>
                <v-menu offset-y>
                  <template v-slot:activator="{ on }">
                    <v-btn dark text color="primary" class="ml-2" v-on="on">
                      {{ itemsPerPage }}
                      <v-icon>mdi-chevron-down</v-icon>
                    </v-btn>
                  </template>
                  <v-list>
                    <v-list-item
                      v-for="(number, index) in itemsPerPageArray"
                      :key="index"
                      @click="updateItemsPerPage(number)"
                    >
                      <v-list-item-title>{{ number }}</v-list-item-title>
                    </v-list-item>
                  </v-list>
                </v-menu>
                <v-spacer></v-spacer>
                <span class="mr-4 grey--text"
                  >Страница {{ page }} из {{ numberOfPages }}</span
                >
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="mr-1"
                  @click="formerPage"
                >
                  <v-icon>mdi-chevron-left</v-icon>
                </v-btn>
                <v-btn
                  fab
                  dark
                  color="blue darken-3"
                  class="ml-1"
                  @click="nextPage"
                >
                  <v-icon>mdi-chevron-right</v-icon>
                </v-btn>
              </v-row>
            </template>
          </v-data-iterator>
        </v-container>
        <Modalcountry :dialog="dialog" />
      </template>
    </v-content>
    <v-footer app>Тестовое задание</v-footer>
    <Progress v-if="!$store.getters.COUNTRY"/>
  </v-app>
</template>

<script>
import { mapGetters } from 'vuex'
import axios from 'axios'
import Countrycard from '@/components/Countrycard.vue'
import Modalcountry from '@/components/Modalcountry.vue'
import Progress from '@/components/Progress.vue'

export default {
  name: 'Country',
  components: {
    Countrycard,
    Modalcountry,
    Progress,
  },
  data() {
    return {
      itemsPerPageArray: [8, 12],
      sortDesc: false,
      page: 1,
      itemsPerPage: 8,
      formUpdate: {
        name: '',
        capital: '',
        region: '',
        population: '',
      },
    }
  },
  methods: {
    getCountriesApi() {
      const patch = 'https://restcountries.eu/rest/v2/regionalbloc/eu'
      axios
        .get(patch)
        .then(response => {
          this.$store.dispatch('SETCOUNTRY', response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    nextPage() {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage() {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage(number) {
      this.itemsPerPage = number
    },
  },
  mounted() {
    this.getCountriesApi()
  },
  created() {},
  computed: {
    ...mapGetters(['COUNTRY']),
    numberOfPages() {
      return Math.ceil(this.COUNTRY.length / this.itemsPerPage)
    },
  },
}
</script>

<style scoped>
.headRight {
  display: inline-block;
  right: 10px;
  position: absolute;
}
</style>
