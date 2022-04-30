<template>
  <div>
    <h1>Register</h1>

    <UserAuthForm
      :has-name="true"
      :submit-form="registerUser"
    />
  </div>
</template>

<script>
import UserAuthForm from '~/components/UserAuthForm.vue'
export default {
  name: 'Register',
  components: {
    UserAuthForm,
  },
   methods: {
    async registerUser(registerInfo) {
      const response = await fetch('/api/user/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({
          name: registerInfo.name,
          email: registerInfo.email,
          password: registerInfo.password
        })
      });
      if(response.status === 200){
        await this.$router.push('/login');
      }
      else{
        // const {message} = await response.json();
      }
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
