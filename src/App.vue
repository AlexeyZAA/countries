<template>
  <v-app>
    <v-content>
      <Countri />
    </v-content>
  </v-app>
</template>

<script>
import Countri from './views/Countri'
export default {
  name: 'App',
  components: {
    Countri,
  },

  data: () => ({
  }),
}
</script>
