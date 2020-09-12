<template>
  <div class="login-form">
    <form @submit.prevent="login">
      <span class="error">{{ error }}</span>
      <label>
        <input type="text" name="user" placeholder="Login" v-model="user" />
      </label>
      <label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          v-model="password"
        />
      </label>
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
      this.$store
        .dispatch("login", credentials)
        .then(() => {
          this.$router.push({ name: "Home" });
        })
        .catch(error => {
          this.error = error;
        });
    }
  }
};
</script>

<style scoped></style>
