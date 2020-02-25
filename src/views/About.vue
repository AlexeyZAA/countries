<template>
  <v-app>
    <v-app-bar app>
      <div class="headLeft">
        <h1>Страны мира</h1>
      </div>
      <div class="headRight">
        <a href="https://restcountries.eu/">https://restcountries.eu</a>
      </div>
    </v-app-bar>
    <v-content>
      <template>
        <v-card class="mx-auto" max-width="1100px" min-width="300">
          <v-container>
            <h1>Страничка о программе</h1>
            <p>Показываем переход по страницам</p>
          </v-container>
        </v-card>
      </template>
    </v-content>
    <v-footer app>Тестовое задание</v-footer>
  </v-app>
</template>

<script>

export default {
  name: 'About',
  components: {
  },
  data () {
    return {
    }
  },
  methods: {
  },
  mounted () {
  },
  created () {},
  computed: {
  }
}
</script>

<style lang="scss">
</style>
