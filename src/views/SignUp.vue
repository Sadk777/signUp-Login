<template>
    <hader />
    <div class="body">
      <div class="signup-container">
        <div class="image-container">
          <!-- Background image will be set via CSS -->
        </div>
        <div class="form-container">
          <h1 class="signup-heading">Sign Up</h1>
          <form class="signup-form" @submit="handleSubmit">
            <div class="form-group">
              <label for="name">Name:</label>
              <input type="text" id="name" v-model="name" :class="{ 'error': errors.name }" />
              <p v-if="errors.name" class="error-message">{{ errors.name }}</p>
            </div>
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
            <button type="submit" class="submit-btn">Register</button>
          </form>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import hader from '@/components/hader.vue';
  
  export default {
    components: {
      hader
    },
    name: 'SignUp',
    data() {
      return {
        name: '',
        email: '',
        password: '',
        errors: {}
      };
    },
    methods: {
      validateForm() {
        const errors = {};
        if (!this.name.trim()) errors.name = 'Name is required';
        if (!this.email.trim()) {
          errors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(this.email)) {
          errors.email = 'Email is invalid';
        }
        if (!this.password.trim()) errors.password = 'Password is required';
        else if (this.password.length < 6) errors.password = 'Password must be at least 6 characters long';
  
        this.errors = errors;
        return Object.keys(errors).length === 0;
      },
      handleSubmit(event) {
        event.preventDefault();
        if (this.validateForm()) {
          console.log('Form submitted with:', {
            name: this.name,
            email: this.email,
            password: this.password
          });
          this.name = '';
          this.email = '';
          this.password = '';
          this.errors = {};
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .body {
    background-color: rgb(0, 0, 0);
  }
  
  .signup-container {
    display: flex;
    height: 100vh;
    max-width: 100%;
    margin: auto;
  }
  
  .image-container {
    flex: 1;
    background: url('../assets/pexels-olly-3760067.jpg') no-repeat center center;
    background-size: 900px;
  }
  
  .form-container {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 20px;
    background-color: #FFFFFF;
    width: 35%;
  }
  
  .signup-heading {
    font-size: 2.5em;
    color: #121212;
    margin-bottom: 20px;
  }
  
  .signup-form {
    width: 100%;
    padding: 20px;
  }
  
  .form-group {
    margin-bottom: 15px;
  }
  
  label {
    display: block;
    font-size: 1.2em;
    color: #121212;
    margin-bottom: 5px;
  }
  
  input {
    width: 100%;
    padding: 10px;
    font-size: 1em;
    border: none;
    border-bottom: 1px solid #0c0b0b;
    background-color: #FFF;
    color: #121212;
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
  