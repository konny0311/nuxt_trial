<template>
  <div>
    contents related to projects here
    <v-flex v-for="item in projects" :key="item.name">
      <v-card class="card-container">
        {{ item.name }}
      </v-card>
    </v-flex>
  </div>
</template>

<script>
export default {
  components: {},
  computed: {
    projects() {
      return this.$store.state.projects
    }
  }
}
</script>
