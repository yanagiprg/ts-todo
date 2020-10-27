<template>
  <v-card class="mx-auto mb-4" max-width="320" outlined>
    <v-list-item three-line>
      <v-list-item-content>
        <div class="overline mb-4">OVERLINE</div>
        <v-list-item-title class="headline mb-1">
          {{ title }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ subtitle }}</v-list-item-subtitle>
      </v-list-item-content>

      <v-list-item-avatar tile size="80" color="grey"></v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      <v-btn outlined rounded text> Button </v-btn>
    </v-card-actions>
  </v-card>
</template>

<script lang="ts">
import { Vue, Prop, Component } from 'nuxt-property-decorator'

@Component({})
export default class Card extends Vue {
  @Prop({ default: 'A', type: String })
  title!: String

  @Prop({ default: 'aaaaaaaaaaaaaaaa', type: String })
  subtitle!: String
}
</script>
