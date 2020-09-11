<template>
  <div class="about">
    <h1>Login</h1>
    <form @submit.prevent="login">
      <span class="error">{{ error }}</span>
      <input type="text" name="user" placeholder="Login" v-model="user">
      <input type="password" name="password" placeholder="Password" v-model="password">
      <button type="submit">Sign In</button>
    </form>
  </div>
</template>
<script>

export default {
  data: () => {
    return {
      user: null,
      password: null,
      error: null
    };
  },
  methods: {
    login() {
      let credentials = {
        user: this.user,
        password: this.password
      };
      this.$store.dispatch('login', credentials)
      .then(() => {
        this.$router.push({name: "Home"})
      })
      .catch(error => {
        this.error = error;
      });
    }
  }
};
</script>
