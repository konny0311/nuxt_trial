<template>
  <div>
    <v-row>
      <v-col>
        <v-img src="/myimg.jpg" />
      </v-col>
      <v-col>
        <h2>Who am I?</h2>
        <h3>Konny0311</h3>
        <h2>What do I mainly code?</h2>
        <v-chip-group column>
          <v-chip v-for="lang in langs">
            {{ lang }}
          </v-chip>
        </v-chip-group>
        <h2>What is my interest?</h2>
        <v-chip-group column>
          <v-chip v-for="hobby in hobbies">
            {{ hobby }}
          </v-chip>
        </v-chip-group>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      langs: ['Python', 'Java Script', 'Java'],
      hobbies: ['Workout🏋️‍♂️', 'Running🏃🏻‍♂️', 'Reading📖']
    }
  }
}
</script>
