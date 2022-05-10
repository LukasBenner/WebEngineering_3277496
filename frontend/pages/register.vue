<template>
  <div>
    <h1>Register</h1>

    <UserAuthForm
      :is-register="true"
      :submit-form="registerUser"
      submit-text="Register"
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
        const json = await response.json();
        console.log(json);
        if(json.message){
          alert(json.message);
        }
        else{
          await this.$router.push('/login');
          this.$store.dispatch('snackbar/setSnackbar',
          {color: 'green', text: 'Successfully created a user account.', timeout: 2000});
        }
      }
      else{
        alert("Something wrong with the database!");
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
