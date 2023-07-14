<template>
    <div>
      <Banner />
      <div class="main-container">
        <h1>Cadastrar Animal</h1>
        <FormPet />
      </div>
    </div>
  </template>
  
  <script>
  import FormPet from '../components/FormPet'
  
  export default {
    name: 'Pet',
    components: {
      FormPet
    }
  }
  </script>