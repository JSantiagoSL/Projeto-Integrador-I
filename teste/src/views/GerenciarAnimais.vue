<template>
    <div>
      <div class="main-container">
        <h1>Gerenciar animais:</h1>
        <Dashboard />
      </div>
    </div>
  </template>
  
  <script>
  import Dashboard from '../components/Dashboard'  //quadros com informações dos animais
  
  export default {
    name: 'Animais',
    components: {
      Dashboard
    }
  }
  </script>