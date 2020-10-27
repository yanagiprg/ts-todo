<template>
  <v-form ref="form">
    <v-row>
      <v-col cols="12" md="4">
        <v-text-field v-model="title" :counter="8" label="Title"></v-text-field>
      </v-col>
      <v-col cols="12" md="4">
        <v-text-field
          v-model="subtitle"
          :counter="20"
          label="Subtitle"
        ></v-text-field>
      </v-col>
    </v-row>
    <v-btn class="mr-4" small elevation="3" @click.prevent="addCard"
      >SUBMIT</v-btn
    >
    <v-btn small elevation="3" @click="resetForm">RESET</v-btn>
  </v-form>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'

@Component({})
export default class Form extends Vue {
  title: String = ''
  subtitle: String = ''

  addCard() {
    const payload: Object = {
      title: this.title,
      subtitle: this.subtitle,
    }
    this.$emit('submit', payload)
    this.resetForm()
  }

  resetForm() {
    this.title = ''
    this.subtitle = ''
  }
}
</script>
