<template>
  <v-container justify="center" align="center" class="mx-auto">
    <v-row cols="6" lg="3">
      <v-col class="mt-4 mb-8 text-center">
        <div class="text-h4 title-text font-weight-bold">Minimal App</div>
      </v-col>
    </v-row>
    <v-row no-gutters>
      <v-col cols="6" md="4">
        <v-btn
          elevation="2"
          height="18vh"
          width="100%"
          class="pa-2 mx-auto col-btn"
          tile
          outlined
          to="/todo"
        >
          todo
        </v-btn>
      </v-col>
      <v-col cols="6" md="4">
        <v-btn
          elevation="2"
          height="18vh"
          width="100%"
          class="pa-2 mx-auto"
          tile
          outlined
        >
          a
        </v-btn>
      </v-col>
      <v-col cols="6" md="4">
        <v-btn
          elevation="2"
          height="18vh"
          width="100%"
          class="pa-2 mx-auto"
          tile
          outlined
        >
          a
        </v-btn>
      </v-col>
      <v-col cols="6" md="4">
        <v-btn
          elevation="2"
          height="18vh"
          width="100%"
          class="pa-2 mx-auto"
          tile
          outlined
        >
          a
        </v-btn>
      </v-col>
      <v-col cols="6" md="4">
        <v-btn
          elevation="2"
          height="18vh"
          width="100%"
          class="pa-2 mx-auto"
          tile
          outlined
        >
          a
        </v-btn>
      </v-col>
      <v-col cols="6" md="4">
        <v-btn
          elevation="2"
          height="18vh"
          width="100%"
          class="pa-2 mx-auto"
          tile
          outlined
        >
          a
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class index extends Vue {}
</script>

<style lang="postcss" scoped>
.title-text {
  color: #626262;
}

.col-btn {
  text-decoration: none;
}
</style>
