<template>
  <v-app>
    <v-content>
      <Country />
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
