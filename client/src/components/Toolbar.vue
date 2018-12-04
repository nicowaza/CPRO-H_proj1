<template>
  <v-app>
    <v-toolbar color="green" dark fixed>
      <v-toolbar-title class="mr-4">Projet1</v-toolbar-title>
      <v-toolbar-items>
        <v-btn flat to="/users">
          <v-icon>playlist_add_check</v-icon>
          Users
        </v-btn>
      </v-toolbar-items>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down">
        <v-btn flat to="/register">
          <v-icon>
            account_box
          </v-icon>
            Register
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
  </v-app>
</template>

<script>
export default {

}
</script>

<style>

</style>
