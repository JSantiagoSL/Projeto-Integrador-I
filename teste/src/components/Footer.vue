<template>
    <div id="footer">
      <p>Animal</p>
    </div>
  </template>
  
  <script>
  export default {
    name: "Footer"
  }
  </script>
  
  <style scoped>
    #footer {
      height: 200px;
      background-color: #002b70; /*azul escuro*/
      border-top: 4px solid #001638; /* preto */
      color: #fcba03;  /*amarelo*/
      display: flex;
      align-items: center;
      justify-content: center;
      bottom: 0;
      width: 100%;
    }
  </style>