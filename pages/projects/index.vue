<template>
  <div>
    <v-container fluid>
      <v-row :align="alignment" dense>
        <v-col v-for="item in projects" :key="item.name" :cols="item.flex">
          <v-card class="card-container" max-height="200">
            <v-card-title class="headline">{{ item.name }}</v-card-title>
            <v-card-subtitle>{{ item.summary }}</v-card-subtitle>
            <v-card-text class="text--primary">
              <template v-for="tech in item.technology">{{ tech }} </template>
            </v-card-text>
            <v-card-actions>
              <v-btn x-small color="primary" dark :href="item.link">
                Learn More
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
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
