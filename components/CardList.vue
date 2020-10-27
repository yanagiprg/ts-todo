<template>
  <v-container fluid>
    <v-row>
      <v-col cols="6" md="6" xl="2">
        <Card v-for="card in cardList" :key="card.id"></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class CardList extends Vue {
  cardList: Object[] = []
}
</script>
