<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6" xl="2">
        <Card
          v-for="(card, index) in cardList"
          :key="index"
          :title="card.title"
          :subtitle="card.subtitle"
          @delete="deleteCard"
          @show="showCard(index)"
        ></Card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component({})
export default class CardList extends Vue {
  @Prop({ default: [], type: Array }) readonly cardList!: String[]
  @Prop({ default: '', type: String }) title!: String
  @Prop({ default: '', type: String }) subtitle!: String
  @Prop({ default: '', type: String }) id!: String

  deleteCard(index: number) {
    this.$emit('delete', index)
  }

  showCard(index: number) {
    this.$emit('show', index)
    // console.log(this.cardList[index].id, index, 1)
  }
}
</script>
