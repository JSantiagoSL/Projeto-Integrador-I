
<template>
    <div id="app" class="container mt-3">
      <h3>Cadastro Pet</h3>
      <hr />
   
      <b-form>
        <b-row>
          <b-col md="4" sm="12">
            <div>Picked: {{ picked }}</div>

<input type="radio" id="one" value="One" v-model="picked" />
<label for="one">One</label>

<input type="radio" id="two" value="Two" v-model="picked" />
<label for="two">Two</label>
          </b-col> <!--especie--> 
          <b-col md="5" sm="12"></b-col> <!--sexo-->
          <b-col md="3" sm="12"></b-col> <!--porte-->
          <b-col md="4" sm="12"></b-col> <!--idade-->
          <b-col md="5" sm="12"></b-col> <!--pelagem-->
          <b-col md="3" sm="12"></b-col> <!--cor-->
          <b-col md="4" sm="12"></b-col> <!--deficiencia-->
          <b-col md="5" sm="12"></b-col> <!--vacinas-->
          <b-col md="3" sm="12"></b-col> <!---->
          <b-col md="4" sm="12"></b-col> <!---->
          <b-col md="5" sm="12"></b-col> <!---->
          <b-col md="3" sm="12"></b-col> <!---->
        </b-row>
      </b-form>
      </div>
    </template>