<template>
  <div>
    <h1>Login</h1>

    <UserAuthForm
      button-text="Hello"
      :has-name="false"
      :submit-form="loginUser"
    />
  </div>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm.vue'
export default {
  name: 'Login',
  components: {
    UserAuthForm,
  },
  methods: {
    async loginUser(loginInfo) {
      try {
        await this.$auth.loginWith('local', {
          data: {
            email: loginInfo.email,
            password: loginInfo.password
          }
        })
        this.$nuxt.$emit('auth', true);
        await this.$router.push('/');
      } catch (error) {
      }
      
    },
  },
}
</script>

<style></style>
