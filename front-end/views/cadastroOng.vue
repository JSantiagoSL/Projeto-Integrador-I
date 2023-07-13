<template>
    <div>
      <Banner />
      <div class="main-container">
        <h1>Cadastre sua Ong</h1>
        <ongForm />
      </div>
    </div>
  </template>
  
  <script>
  import ongForm from '../components/ongForm'
  
  export default {
    name: 'Home',
    components: {
      ongForm
    }
  }
  </script>