<template>
    <Message :msg="msg" v-show="msg">
    <div>
      <form id="Ong-form" method="POST" @submit="cadastrarOng">
        <div class="input-container">
          <label for="nome">Nome da Ong:</label>
          <input type="text" id="nomeOng" name="nomeOng" v-model="nome" placeholder="Digite o nome da Ong">
        </div>
        <div class="input-container">
          <label for="cnpj">CNPJ</label>
          <input type="number" id="cnpjOng" name="cnpjOng" v-model="cnpj" placeholder="Digite o CNPJ da Ong">
        </div>
        <div class="input-container">
          <label for="email">E-mail</label>
          <input type="email" id="emailjOng" name="emailOng" v-model="email" placeholder="Digite o E-mail da Ong">
        </div>
        <div class="input-container">
          <label for="endereco">Endereço</label>
          <input type="endereco" id="enderecojOng" name="enderecoOng" v-model="endereco" placeholder="Digite o Endereço da Ong">
        </div>
        <div class="input-container">
          <label for="whatsapp">Whatsapp</label>
          <input type="whatsapp" id="whatsappOng" name="whatsappOng" v-model="whatsapp" placeholder="Digite o Endereço da Ong">
        </div>
        <div class="input-container">
          <label for="descricao_ong">Descrição da Ong</label>
          <input type="descricao_ong" id="descricao_ongOng" name="descricao_ongOng" v-model="descricao_ong" placeholder="Descreva a ong Cadastrada">
        </div>
        <div class="input-container">
          <label for="senha">senha</label>
          <input type="password" id="senhaOng" name="senhaOng" v-model="ong.content" placeholder="Digite uma senha segura">
        </div>


      </form>
    </div>
  </Message>
  </template>



<script>
import api from "../services/api";

export default {
  name: 'Ong',
  data(){
    return{
      ongs: {},
      Ong: {
        nome:'',
        cnpj:'',
        email:'', 
        endereco:'',
        facebook:'', 
        whatsapp:'', 
        descricao_ong:'', 
        senha:''
      },
      editar: false
      }
    },

  methods:{
    obterOng(){
        api.get("posts")
          .then(res => {
            this.ong = res.data.data;
          })
          .catch(err => console.log(err))
    },

    cadastrarOng(){
      if (this.editar === false){
        if(this.ong.content === ''){
          alert(" Erro no Cadastro ")
          return
        }

        api.post(`post/ong/${18}`,{
              content: this.ong.content
            })
            .then(res => res.json())
        alert('Dados cadastrados com sucesso!')
        this.obterOng()
        this.ong.id = ''
        this.ong.content = ''
      }else{
        api.put(`post/${this.ong.cnpj}`,{
              content: this.ong.content
            })
            .then(res => res.json())
        alert('Dados atualizados com sucesso!')
        this.obterOng()
        this.ong.id = ''
        this.ong.content = ''
      }
    },
    deletarOng(id){
      if(confirm('Deseja deletar o Ong de id' + id)){  // obs: ver se esta Como ID ou CNPJ
        api.delete(`post/${id}`)
            .then(res => res.json())
            .catch(err => console.log(err))
            alert('Deletado com sucesso!')
        this.obterOng()
      }
    },

    editarOng(ong){
      this.editar = true
      this.Ong.cnpj = ong.cnpj
      this.ong.content = ong.content

    }
  },
  created() {
    this.obterOng()
  }
}
</script>

  
  <style scoped>
    #ong-form {
      max-width: 400px;
      margin: 0 auto;
    }
  
    .input-container {
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;
    }
  
    label {
      font-weight: bold;
      margin-bottom: 15px;
      color: #ffffff;;
      padding: 5px 10px;
      border-left: 4px solid #008cff;
    }
  
    input, select {
      padding: 5px 10px;
      width: 300px;
    }

    #opcionais-title {
      width: 100%;
    }
  
    .checkbox-container {
      display: flex;
      align-items: flex-start;
      width: 50%;
      margin-bottom: 20px;
    }
  
    .checkbox-container span,
    .checkbox-container input {
      width: auto;
    }
  
    .checkbox-container span {
      margin-left: 6px;
      font-weight: bold;
    }
  
    .submit-btn {
      background-color: #ffffff;
      color:#0367fc;
      font-weight: bold;
      border: 2px solid #000000;
      padding: 10px;
      font-size: 16px;
      margin: 0 auto;
      cursor: pointer;
      transition: .5s;
    }
  
    .submit-btn:hover {
      background-color: transparent;
      color: #0084ff;
    }
  </style>