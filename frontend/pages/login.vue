<template>
  <div>
    <h1>Login</h1>

    <UserAuthForm
      button-text="Hello"
      :submit-form="loginUser"
      submit-text="Log in"
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
          }})
      } catch (error) {
        if(error.response.data.error === 'email'){
          alert("Please provide a valid email");
        }
        else if(['credentials','password'].includes(error.response.data.error)){
          alert("Wrong credentials");
        }
      }
      this.$nuxt.$emit('auth', true);
      await this.$router.push('/');
      
    },
  },
}
</script>

<style lang="scss" scoped>
  h1{
    font-size: 28px;
    font-weight: 900;
    margin-bottom: 30px;
  }
</style>
