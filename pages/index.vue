<template>
  <v-row justify="center" align="center">
    <v-col cols="12" sm="8" md="6">
      <div class="mt-4 mb-8 text-center">
        <div class="text-h4 title-text font-weight-bold">Todo App</div>
      </div>
      <Card title="A" subtitle="aaaaaaaaaaaaaaaaaaaaaaaaaaaaa" />
    </v-col>
  </v-row>
</template>

<script lang="ts">
import { Vue, Component } from 'nuxt-property-decorator'
@Component
export default class index extends Vue {}
</script>

<style lang="postcss" scoped>
.title-text {
  color: #626262;
}
</style>
