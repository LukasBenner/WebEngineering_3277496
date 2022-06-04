<template>
  <div class="container">
    <h1>Login</h1>

    <div class="content">
      <UserAuthForm
        button-text="Hello"
        :submit-form="loginUser"
        submit-text="Log in"
      />
      <v-btn id="signUp" to="signUp">Sign up</v-btn>
    </div>
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
            password: loginInfo.password,
          },
        })
        await this.$router.push('/')
        this.$store.dispatch('snackbar/setSnackbar', {
          color: 'green',
          text: 'Thanks for loggin in.',
          timeout: 2000,
        })
      } catch (error) {
        if (error.response.data.error === 'email') {
          this.$store.dispatch('snackbar/setSnackbar', {
            color: 'red',
            text: 'There was an issue signing in.  Please try again.',
          })
        } else if (
          ['credentials', 'password'].includes(error.response.data.error)
        ) {
          this.$store.dispatch('snackbar/setSnackbar', {
            color: 'red',
            text: 'Wrong credentials!',
          })
        }
      }
    },
  },
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.content {
  width: min(400px, 100%);
}

#signUp {
  margin-left: 1rem;
}

h1 {
  font-size: 28px;
  font-weight: 900;
  margin: auto;
  margin-bottom: 30px;
}
</style>
