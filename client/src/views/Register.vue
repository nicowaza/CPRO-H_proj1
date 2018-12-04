<template>
  <v-container>
    <v-layout row wrap>
      <v-flex xs6 offset-xs3>
        <h1>Register</h1>
        <v-text-field
        label="Username" placeholder="Username"  :value="registerUsername"
        @input="setRegisterUsername"></v-text-field>
        <v-text-field label="Firstname" placeholder="Firstname" :value="registerFirstname"
        @input="setRegisterFirstname"></v-text-field>
        <v-text-field label="Lastname" placeholder="Lastname" :value="registerLastname"
        @input="setRegisterLastname"></v-text-field>
        <v-text-field label="AvatarUrl" placeholder="AvatarUrl" :value="registerAvatarUrl"
        @input="setRegisterAvatarUrl"></v-text-field>
        <v-text-field label="City" placeholder="City" :value="registerCity"
        @input="setRegisterCity"></v-text-field>
        <v-btn color="green" dark @click="register">
          <v-icon class="mr-2">account_circle</v-icon>
          Register
        </v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex';

export default {
  computed: {
    ...mapState('register', [
    'registerUsername',
    'registerFirstname',
    'registerLastname',
    'registerAvatarUrl',
    'registerCity',
    ])
  },
  methods: {
    ...mapMutations('register',  [
    'setRegisterUsername',
    'setRegisterFirstname',
    'setRegisterLastname',
    'setRegisterAvatarUrl',
    'setRegisterCity',
    ]),
    ...mapActions('register', [
      'register',
    ]),
  },
};
</script>

<style>

</style>
