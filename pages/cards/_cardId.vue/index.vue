<template>
  <v-row justify="center" align="center" class="mx-auto">
    <v-col cols="12" sm="8" md="6">
      <div class="mt-4 mb-8 text-center">
        <div class="text-h4 title-text font-weight-bold">Todo App</div>
      </div>
      <v-col cols="12" class="px-4">
        <!-- <Form @add="addCard" /> -->
      </v-col>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component({})
export default class CardDetail extends Vue {}
</script>
