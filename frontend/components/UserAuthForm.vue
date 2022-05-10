<template>
  <v-form v-model="valid">
    <v-text-field v-if="isRegister"
                  v-model="userInfo.name"
                  label="Name"
                  :rules="[required('Name'), minLength(3)]"/>
    <v-text-field v-model="userInfo.email"
                  label="Email"
                  :rules="[required('Email')]"/>
    <v-text-field v-model="userInfo.password"
                  label="Password"
                  type="password"
                  :rules="[required('Password'),minLength(6)]"/>       
    <v-text-field v-if="isRegister"
                  label="Repeat Password"
                  type="password"
                  :rules="[required('Password'), minLength(6), matchesPassword(userInfo)]"/>        
    <v-btn type="submit" @click="execute" :disabled="!valid">{{submitText}}</v-btn>
  </v-form>
</template>

<script>

export default {
  name: 'UserAuthForm',
  props: {
    isRegister: {type:Boolean, default: false},
    submitText: {type:String, required: true},
    submitForm: {type:Function, required: true},
  },
  data() {
    return {
      valid: false,
      showPassword: false,
      userInfo: {
        name: '',
        email: '',
        password: '',
      },
      required(propertyTye){
          return v => v && v.length > 0 || `Please input a ${propertyTye}`
      },
      minLength(minLength){
        return v => v && v.length >= minLength || `Must be at least ${minLength} characters.`
      },
      matchesPassword(userInfo){
        return v => v && v === userInfo.password || 'Must match the password.'
      }
    }
  },
  methods: {
    execute(e) {
      e.preventDefault();
      if(this.submitForm)
        this.submitForm(this.userInfo)
    },
  },
}
</script>

<style lang="scss">

form{
  width: min(100%, 400px);
  padding: 1rem;
  margin: auto;
}

</style>
