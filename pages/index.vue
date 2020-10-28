<template>
  <v-row justify="center" align="center" class="mx-auto">
    <v-col cols="12" sm="8" md="6">
      <div class="mt-4 mb-8 text-center">
        <div class="text-h4 title-text font-weight-bold">Todo App</div>
      </div>
      <v-col cols="12" class="px-4">
        <Form @submit="addCard" />
        <CardList :card-list="cardList" @submit="deleteCard" />
      </v-col>
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class index extends Vue {
  cardList: Object[] = []

  addCard(card: Object) {
    this.cardList.push(card)
  }

  deleteCard(index: number) {
    this.cardList.splice(index, 1)
  }
}
</script>

<style lang="postcss" scoped>
.title-text {
  color: #626262;
}
</style>
