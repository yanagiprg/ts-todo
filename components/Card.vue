<template>
  <v-card elevation="3" class="mx-auto mb-4" max-width="320" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <v-list-item-title class="headline ml-4">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle class="ml-1">{{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn elevation="2" text class="ml-2 mb-3"> delete </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component({})
export default class Card extends Vue {
  @Prop({ default: '', type: String })
  title!: String

  @Prop({ default: '', type: String })
  subtitle!: String
}
</script>
