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
              <v-col v-for="card in cards" :key="card.title" :cols="card.flex">
                <v-card>
                  <v-img
                    :src="card.src"
                    class="white--text align-end"
                    gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                    height="200px"
                  >
                    <v-card-title v-text="card.title"></v-card-title>
                  </v-img>

                  <v-card-actions>
                    <v-spacer></v-spacer>

                    <v-btn icon>
                      <v-icon>mdi-heart</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>mdi-bookmark</v-icon>
                    </v-btn>

                    <v-btn icon>
                      <v-icon>mdi-share-variant</v-icon>
                    </v-btn>
                  </v-card-actions>
                </v-card>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-container>
    </v-content>
    <v-footer app>
      Тестовое задание
    </v-footer>
  </v-app>
</template>

<script>
var data = [
  {
    id: 1,
    title: 'Транспортная карта',
    ser: '10',
    numb: '000111222',
    cardcss: 'cardTransport'
  },
  {
    id: 3,
    title: 'Пенсионная безлимитная',
    ser: '51',
    numb: '000333444',
    cardcss: 'cardPens'
  },
  {
    id: 4,
    title: 'Школьная транспортная карта',
    ser: '52',
    numb: '000444222',
    cardcss: 'cardShool'
  },
  {
    id: 5,
    title: 'Студенческая',
    ser: '53',
    numb: '00033333222',
    cardcss: 'cardStudent'
  },
  {
    id: 7,
    title: 'МО школьная',
    ser: '54',
    numb: '000115544',
    cardcss: 'cardShool'
  }
]

export default {
  name: 'Countri',
  data () {
    return {
      cards: [
        {
          title: 'Favorite road trips1',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 3
        },
        {
          title: 'Best airlines2',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 3
        },
        {
          title: 'Favorite road trips3',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 3
        },
        {
          title: 'Best airlines4',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 3
        },
                {
          title: 'Favorite road trips5',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 3
        },
        {
          title: 'Best airlines6',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 3
        },
        {
          title: 'Favorite road trips7',
          src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
          flex: 3
        },
        {
          title: 'Best airlines8',
          src: 'https://cdn.vuetifyjs.com/images/cards/plane.jpg',
          flex: 3
        }
      ]
    }
  },
  methods: {},
  mounted () {
    this.$store.dispatch('GET_COUTRi', data)
  },
  computed: {
    cardList () {
      return this.$store.getters.COUTRi
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
</style>
