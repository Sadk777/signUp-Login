<template>
  <hader />git
    <div class="login-container">
      <h1 class="login-heading">Log In</h1>
      <form class="login-form" @submit="handleSubmit">
        <div class="form-group">
          <label for="email">Email:</label>
          <input type="email" id="email" v-model="email" :class="{ 'error': errors.email }" />
          <p v-if="errors.email" class="error-message">{{ errors.email }}</p>
        </div>
        <div class="form-group">
          <label for="password">Password:</label>
          <input type="password" id="password" v-model="password" :class="{ 'error': errors.password }" />
          <p v-if="errors.password" class="error-message">{{ errors.password }}</p>
        </div>
        <button type="submit" class="submit-btn">Log In</button>
        <div class="reg">
          <label for="regiration">Label:</label>
          <input type="text" id="">
        </div>
      </form>
    </div>
  </template>
  
  <script>
import Hader from '@/components/hader.vue';

  
  export default {
    components:{
      Hader
    },
  
    data() {
      return {
        email: '',
        password: '',
        errors: {}
      };
    },
    methods: {
      validateForm() {
        const errors = {};
        if (!this.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(this.email)) {
          errors.email = 'Email is invalid';
        }
        if (!this.password.trim()) {
          errors.password = 'Password is required';
        }
  
        this.errors = errors;
        return Object.keys(errors).length === 0;
      },
      handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
          console.log('Log In form submitted with:', {
            email: this.email,
            password: this.password
          });
          this.email = '';
          this.password = '';
          this.errors = {};
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .login-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100vh;
    background-color: #121212; 
    color: #FFFFFF; 
    padding: 20px;
    border-radius: 10px;
    max-width: 500px; 
    margin: auto;
  }
  
  .login-heading {
    font-size: 2.5em;
    color: #FFFFFF; 
    margin-bottom: 20px;
  }
  
  .login-form {
    width: 100%;
    background-color: rgba(18, 18, 18, 0.8); 
    padding: 20px;
    border-radius: 10px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-size: 1.2em;
    color: #B3B3B3; 
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: 1px solid #B3B3B3; 
    border-radius: 5px;
    background-color: #1E1E1E; 
    color: #FFFFFF; 
  }
  
  input.error {
    border-color: #FF4D4D;
  }
  
  .error-message {
    color: #FF4D4D; 
    font-size: 0.9em;
    margin: 5px 0 0 0;
  }
  
  button.submit-btn {
    width: 100%;
    padding: 10px;
    font-size: 1.2em;
    background-color: #BB86FC;
    color: #FFFFFF; 
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }
  
  button.submit-btn:hover {
    background-color: #9F6DF9; 
  }
  </style>
  