<template>
  <div>
    <v-container class="fill-height" fluid>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" md="4">
          <v-card class="elevation-12">
            <v-toolbar color="primary" dark flat>
              <v-toolbar-title>Login form</v-toolbar-title>
              <v-spacer />
            </v-toolbar>
            <v-card-text>
              <v-form action="#" @submit.prevent="login">
                <v-text-field
                  label="Login"
                  name="login"
                  v-model="username"
                  type="text"
                />

                <v-text-field
                  id="password"
                  label="Password"
                  name="password"
                  v-model="password"
                  type="password"
                />
              </v-form>
            </v-card-text>
            <v-card-actions>
              <v-spacer />
              <v-btn color="primary" type="submit" class="btn-submit"
                >Login</v-btn
              >
            </v-card-actions>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: "login",
  data() {
    return {
      username: "",
      password: ""
    };
  },
  methods: {
    login() {
      this.$store.dispatch("retrieveToken", {
        username: this.username,
        password: this.password
      });
      // .then(response => {
      //   this.$router.push({ name: 'todo' })
      // })
    }
  }
};
</script>
