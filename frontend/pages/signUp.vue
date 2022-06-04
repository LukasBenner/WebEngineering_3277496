<template>
  <div class="container">
    <h1>Sign Up</h1>

    <div class="content">
      <UserAuthForm
        :is-register="true"
        :submit-form="registerUser"
        submit-text="Sign Up"
      />
    </div>
  </div>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm.vue'
export default {
  name: 'SignUp',
  components: {
    UserAuthForm,
  },
  methods: {
    async registerUser(registerInfo) {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: registerInfo.name,
          email: registerInfo.email,
          password: registerInfo.password,
        }),
      })
      if (response.status === 200) {
        const json = await response.json()
        console.log(json)
        if (json.message) {
          if (json.message === 'already exists') {
            this.$store.dispatch('snackbar/setSnackbar', {
              color: 'red',
              text: 'User already exists.',
            })
          }
        } else {
          await this.$router.push('/login')
          this.$store.dispatch('snackbar/setSnackbar', {
            color: 'green',
            text: 'Successfully created a user account.',
            timeout: 2000,
          })
        }
      } else {
        alert('Something wrong with the database!')
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

h1 {
  font-size: 28px;
  font-weight: 900;
  margin: auto;
  margin-bottom: 30px;
}
</style>
