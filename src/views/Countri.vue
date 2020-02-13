<template>
  <v-app>
    <v-app-bar app>
      <div class="headLeft"><h1>Страны мира</h1></div>
      <div class="headRight">
        <a href="https://restcountries.eu/">https://restcountries.eu/</a>
      </div>
    </v-app-bar>
    <v-content>
      <v-container fluid>
          <v-data-iterator
            v-if="$store.getters.COUNTRI"
            :items="COUNTRI"
            :items-per-page.sync="itemsPerPage"
            :page="page"
            :sort-by="sortBy.toLowerCase()"
            :sort-desc="sortDesc"
            hide-default-footer
          >
            <template v-slot:default="props">
              <v-row>
                <v-col
                  v-for="item in props.items"
                  :key="item.сountriname"
                  :cols="3"
                >
                  <v-card class="mx-auto" max-width="80%">
                    <v-img
                      :src="item.flag"
                      class="white--text"
                      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                      height="160px"
                      width="100%"
                    >
                    </v-img>
                    <v-card-actions>
                      <v-spacer
                        ><div class="titlbold">{{ item.name }}</div></v-spacer
                      >
                      <v-btn icon @click="showModal(item.name)">
                        <v-icon>mdi-pencil-box-outline</v-icon>
                      </v-btn>
                    </v-card-actions>
                    <v-card-text class="text--primary">
                      <v-simple-table>
                        <tbody>
                          <tr>
                            <td class="titlbold">Столица</td>
                            <td>{{ item.capital }}</td>
                          </tr>
                          <tr>
                            <td class="titlbold">Регион</td>
                            <td>{{ item.region }}</td>
                          </tr>
                          <tr>
                            <td class="titlbold">Население</td>
                            <td>{{ item.population }}</td>
                          </tr>
                        </tbody>
                      </v-simple-table>
                    </v-card-text>
                  </v-card>
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
                <span
                  class="mr-4
                grey--text"
                >
                  Страница {{ page }} из {{ numberOfPages }}
                </span>
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
                      <v-text-field label="Наименование страны*" :value="formUpdate.countriname" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Столица" v-model="formUpdate.capital" required></v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Регион" v-model="formUpdate.region" required> </v-text-field>
                    </v-col>
                    <v-col cols="12">
                      <v-text-field label="Население*" v-model="formUpdate.popul" required></v-text-field>
                    </v-col>
                  </v-row>
                </v-container>
                <small>*поля обязательные для заполнения</small>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="blue darken-1" text @click="dialog = false"
                  >Закрыть</v-btn
                >
                <v-btn color="blue darken-1" text @click="saveCountriItem"
                  >Сохранить</v-btn
                >
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-row>
      </template>
    </v-content>
    <v-footer app>
      Тестовое задание
    </v-footer>
  </v-app>
</template>

<script>
/*
var data = [
  {
    сountriname: 'Favorite road trips1',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3
  },
  {
    сountriname: 'Best airlines2',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3
  },
  {
    сountriname: 'Favorite road trips3',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3
  },
  {
    сountriname: 'Best airlines4',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3
  },
  {
    сountriname: 'Favorite road trips5',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3
  },
  {
    сountriname: 'Best airlines6',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3
  },
  {
    сountriname: 'Favorite road trips7',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3
  },
  {
    сountriname: 'Best airlines8',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3
  },
  {
    сountriname: 'Favorite road trips9',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3
  },
  {
    сountriname: 'Best airlines99',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3
  },
  {
    сountriname: 'Favorite road trips8',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3
  },
  {
    titсountrinamele: 'Best airlines7',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3
  },
  {
    tiсountrinametle: 'Favorite road trips6',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3
  },
  {
    сountriname: 'Best airlines5',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3
  },
  {
    сountriname: 'Favorite road trips4',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3
  },
  {
    сountriname: 'Best airlines3',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3
  }
]
*/
import { mapGetters } from 'vuex'
import axios from 'axios'

export default {
  name: 'Countri',
  components: {},
  data () {
    return {
      itemsPerPageArray: [4, 8, 12],
      sortDesc: false,
      page: 1,
      itemsPerPage: 8,
      sortBy: 'countriname',
      keys: ['Countriname', 'capital', 'region', 'population'],
      dialog: false,
      formUpdate: {
        countriname: '',
        capital: '',
        region: '',
        popul: ''
      }
    }
  },
  methods: {
    showModal (name) {
      this.dialog = true
      this.formUpdate.countriname = name
      },
    saveCountriItem () {
      alert('Сохранено')
      this.formUpdate = {
        countriname: '',
        capital: '',
        region: '',
        popul: ''
      }
      this.dialog = false
    },
    getParam () {
      const patch = 'https://restcountries.eu/rest/v2/regionalbloc/eu'
      axios
        .get(patch)
        .then(response => {
          this.$store.dispatch('SETCOUNTRI', response.data)
        })
        .catch(e => {
          console.log(e)
        })
    },
    nextPage () {
      if (this.page + 1 <= this.numberOfPages) this.page += 1
    },
    formerPage () {
      if (this.page - 1 >= 1) this.page -= 1
    },
    updateItemsPerPage (number) {
      this.itemsPerPage = number
    }
  },
  mounted () {
    this.getParam()
  },
  created () {},
  computed: {
    ...mapGetters(['COUNTRI']),
    numberOfPages () {
      return Math.ceil(this.COUNTRI.length / this.itemsPerPage)
    },
    filteredKeys () {
      return this.keys.filter(key => key !== `Name`)
    }
  }
}
</script>

<style scoped>
.headLeft {
  display: inline-block;
  left: 10px;
  position: absolute;
}
.headRight {
  display: inline-block;
  right: 10px;
  position: absolute;
}
.titlbold {
  font-weight: bold;
}
</style>
