<template>
  <div>
    <v-row>
      <v-col>
        <h2>Konny0311</h2>
        <v-img src="/myimg.jpg" />
      </v-col>
      <v-col>
        <h2>What do I mainly code?</h2>
        <li v-for="lang in langs">
          {{ lang }}
        </li>
        <h2>What is my interest?</h2>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      langs: ['Python', 'Java Script']
    }
  }
}
</script>
