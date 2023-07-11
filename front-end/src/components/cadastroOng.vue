
<template>
    <div id="app" class="container mt-3">
      <h3>Dados pessoais</h3>
      <hr />
   
      <b-form>
        <b-row>
          <b-col md="4" sm="12">
            <b-form-file label="icone da ong" @input="saveFile" v-model="ong.file" placeholder="Selecione uma imagem ou arraste aqui"></b-form-file>
          </b-col>
          <b-col md="5" sm="12">
            <b-form-group label="Nome:" label-for="nome">
    <b-form-input  id="nome"
      v-model="form.nome"
      placeholder="Digite o nome da Ong"
    ></b-form-input>
</b-form-group>

          </b-col>
          <b-col md="3" sm="12"></b-col>
        </b-row>
      </b-form>
      </div>
    </template>

<script>
export default {
  data() {
    return {
      form: {
        nome: "",
      }
    }
  }
}
</script>