<template lang="html">
  <v-app id="instructions">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs11 sm11 md11>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-spacer></v-spacer>
                <v-toolbar-title text-md-center>Instructions</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <p class="ma-4" v-html="instructionsMarkdown"></p>
                <hr>
              </v-card-text>
              <v-card-actions align-center>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="startTest">Start test</v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-flex>
        </v-layout>
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
import marked from 'marked'

export default {
  data: function () {
    return {
      instructions: ''
    }
  },
  methods: {
    startTest () {
      this.$store.dispatch('startExam')
    }
  },
  computed: {
    instructionsMarkdown: function () {
      return marked(this.instructions.toString(), { sanitize: true })
    }
  },
  created: function () {
    this.instructions = this.$store.getters.getInstructions
  }
}
</script>

<style lang="css">
</style>
