<template>
  <v-app>
    <v-content>
      <router-view>
        <Country />
      </router-view>
    </v-content>
  </v-app>
</template>

<script>
import Country from './views/Country'
export default {
  name: 'App',
  components: {
    Country,
  },

  data: () => ({
  }),
}
</script>
