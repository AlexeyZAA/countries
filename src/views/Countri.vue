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
        <v-card class="mx-auto" max-width="80%">
          <v-container fluid>
            <v-row dense>
              <!-- перебор стран в картах -->
              <v-col
                v-for="countr in COUNTRI"
                :key="countr.title"
                :cols="countr.flex"
              >
                <v-card>
                  <v-img
                    :src="countr.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="100px"
                  >
                  </v-img>

                  <v-card-actions>
                    <v-spacer>Имя страны</v-spacer>

                    <v-btn icon>
                      <v-icon>mdi-pencil-box-outline</v-icon>
                    </v-btn>
                  </v-card-actions>

                  <v-card-text class="text--primary">
                    <div>Столица</div>
                    <div>Регион</div>
                    <div>Население</div>
                  </v-card-text>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </v-content>
    <v-container fluid>
      <v-data-iterator
      :items="items"
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
            :key="item.name"
            cols="12"
            sm="3"
            md="3"
            lg="3"
          >
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>
              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ item[key.toLowerCase()] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.name }}</v-card-title>
              <v-list dense>
                <v-list-item
                  v-for="(key, index) in filteredKeys"
                  :key="index"
                >
                  <v-list-item-content :class="{ 'blue--text': sortBy === key }">{{ key }}:</v-list-item-content>
                  <v-list-item-content class="align-end" :class="{ 'blue--text': sortBy === key }">{{ item[key.toLowerCase()] }}</v-list-item-content>
                </v-list-item>
              </v-list>
            </v-card>

          </v-col>
        </v-row>
      </template>

      <template v-slot:footer>
        <v-row class="mt-2" align="center" justify="center">
          <span class="grey--text">Количество на странице</span>
          <v-menu offset-y>
            <template v-slot:activator="{ on }">
              <v-btn
                dark
                text
                color="primary"
                class="ml-2"
                v-on="on"
              >
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
    <v-footer app>
      Тестовое задание
    </v-footer>
  </v-app>
</template>

<script>
var data = [
  {
    сountriname: 'Favorite road trips',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3,
  },
  {
    сountriname: 'Best airlines',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3,
  },
  {
    сountriname: 'Favorite road trips',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3,
  },
  {
    сountriname: 'Best airlines',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3,
  },
  {
    сountriname: 'Favorite road trips',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3,
  },
  {
    сountriname: 'Best airlines',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3,
  },
  {
    сountriname: 'Favorite road trips',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3,
  },
  {
    сountriname: 'Best airlines',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3,
  },
  {
    сountriname: 'Favorite road trips',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3,
  },
  {
    сountriname: 'Best airlines',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3,
  },
  {
    сountriname: 'Favorite road trips',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3,
  },
  {
    titсountrinamele: 'Best airlines',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3,
  },
  {
    tiсountrinametle: 'Favorite road trips',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3,
  },
  {
    сountriname: 'Best airlines',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3,
  },
  {
    сountriname: 'Favorite road trips',
    src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
    flex: 3,
  },
  {
    сountriname: 'Best airlines',
    src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
    flex: 3,
  },
]

import { mapGetters } from 'vuex'
export default {
  name: 'Countri',
  data() {
    return {
      itemsPerPageArray: [4, 8, 12],
        search: '',
        filter: {},
        sortDesc: false,
        page: 1,
        itemsPerPage: 8,
        sortBy: 'countriname',
        keys: [
          'Countriname',
          'city',
        ],
        items: [
          {
            countriname: 'Frozen Yogurt',
            city: 159,
          },
          {
            countriname: 'Ice cream sandwich',
            city: 237,
          },
          {
            countriname: 'Eclair',
            city: 262,
          },
          {
            countriname: 'Cupcake',
            city: 305,
           },
          {
            countriname: 'Gingerbread',
            city: 356,
          },
          {
            countriname: 'Jelly bean',
            city: 375,
           },
          {
            countriname: 'Lollipop',
            city: 392,
          },
          {
            countriname: 'Honeycomb',
            city: 408,
          },
          {
            countriname: 'Donut',
            city: 452,
          },
          {
            countriname: 'KitKat',
            city: 518,
          },
        ],
    }
  },
  methods: {
     nextPage () {
        if (this.page + 1 <= this.numberOfPages) this.page += 1
      },
      formerPage () {
        if (this.page - 1 >= 1) this.page -= 1
      },
      updateItemsPerPage (number) {
        this.itemsPerPage = number
      },
  },
  mounted() {
    this.$store.dispatch('SETCOUNTRI', data)
  },
  computed: {
    ...mapGetters(['COUNTRI']),
    numberOfPages () {
        return Math.ceil(this.items.length / this.itemsPerPage)
      },
      filteredKeys () {
        return this.keys.filter(key => key !== `Name`)
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
.headRight {
  display: inline-block;
  right: 10px;
  position: absolute;
}
</style>
