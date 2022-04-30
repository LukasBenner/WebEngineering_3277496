<template>
  <form @submit.prevent="execute">
    <input v-if="hasName" v-model="userInfo.name" type="text" placeholder="Name" />

    <input v-model="userInfo.email" type="email" placeholder="Email" />

    <input v-model="userInfo.password" type="password" placeholder="Password" />

    <button type="submit">Sign in</button>
  </form>
</template>

<script>

export default {
  name: 'UserAuthForm',
  props: {
    hasName: Boolean,
    submitForm: Function,
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
    }
  },
  methods: {
    execute() {
      if(this.submitForm)
        this.submitForm(this.userInfo)
    },
  },
}
</script>

<style></style>
