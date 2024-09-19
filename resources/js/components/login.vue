<template>
    <div class="login-container">
      <h2>Login Page</h2>
      <form @submit.prevent="submitForm">
        <div>
          <label for="email">Email:</label>
          <input type="email" v-model="email" required />
        </div>
        <div>
          <label for="password">Password:</label>
          <input type="password" v-model="password" required />
        </div>
        <button type="submit">Login</button>
        <button @click="goToHome">Go to Home</button>
      </form>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        email: '',
        password: ''
      };
    },
    methods: {
      submitForm() {
        console.log('Email:', this.email);
        console.log('Password:', this.password);
        alert('Login form submitted');
      },
      goToHome() {
        this.$router.push('/home'); // Navigate to home on button click
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    max-width: 300px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }
  form div {
    margin-bottom: 10px;
  }
  button {
    width: 100%;
    padding: 8px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
  }
  </style>
  