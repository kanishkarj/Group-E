<template>
  <v-app id="SignIn">
    <v-content>
      <v-container fluid fill-height>
        <v-layout align-center justify-center>
          <v-flex xs12 sm10 md6>
            <v-card class="elevation-12">
              <v-toolbar dark color="primary">
                <v-toolbar-title>Sign In</v-toolbar-title>
                <v-spacer></v-spacer>
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field prepend-icon="person" name="userId" label="User Id" type="text" v-model="userId"></v-text-field>
                  <v-text-field prepend-icon="lock" name="password" label="Password" id="password" type="password"  v-model="password"></v-text-field>
                  <v-radio-group v-model="radioGroup">
                    <v-radio
                      v-for="n in languages.length"
                      :key="n"
                      :label="languages[n-1]"
                      :value="n"
                    ></v-radio>
                  </v-radio-group>
                </v-form>
              </v-card-text>
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="primary" @click="login">Login</v-btn>
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
  export default {
    data: function () {
      return {
        userId: '',
        password: '',
        languages: ['']
      }
    },
    methods: {
      login (event) {
        this.$store.dispatch('signIn', {
          userId: this.userId,
          password: this.password
        })
      }
    },
    created: function () {
      this.languages = this.$store.getters.getLang
    }

  }
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700|Material+Icons');
  /* Global CSS */
</style>
