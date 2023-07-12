<template>
    <b-row class="vh-100 vw-100 row-login">
      <b-col sm="5" class="d-flex justify-content-center align-items-center left-login">
        <div class="col-8">
          <h2 class="text-center mb-5 title-login">Login</h2>
          <b-form>
            <b-form-group
              label="E-mail"
              label-for="email">
                <b-form-input
                  id="email"
                  type="email"
                  placeholder="@email.com"
                  autocomplete="off"
                  v-model="ong.email"
                ></b-form-input>
              </b-form-group>
   
              <b-form-group
                label-for="password"
              >
                <label class="d-flex justify-content-between">
                  Senha
                  <small><a href="#">Esqueceu sua senha?</a></small>
                </label>
   
                <b-form-input
                  id="password"
                  type="password"
                  placeholder="Digite sua senha"
                  v-model="ong.password"
                ></b-form-input>
              </b-form-group>
   
              <b-button
                type="button"
                variant="primary"
                block
                @click="login">
                <i class="fas fa-sign-in-alt"></i> Entrar
              </b-button>
   
              <hr>
   
              <b-button
                type="button"
                variant="outline-secondary"
                block
                @click="register">
                <i class="fas fa-user-plus"></i> Não tenho conta
              </b-button>
          </b-form>
        </div>
      </b-col>
      <b-col sm="7"></b-col>
    </b-row>
  </template>
   
  <script>
   
  export default {
    data() {
      return {
        form: {
          email: "",
          password: ""
        }
      }
    },
   
    methods: {
      login() {},
   
      criar() {},
   
    }
  }
  </script>
  <style>

/* cadastro ong */

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    
}

body {
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgb(108, 142, 244);
}

.container {
    width: 80%;
    height: 80vh;
    display: flex;
    box-shadow: 5px 5px 10px rgba(0,0,0,.212);
}
.form-image {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1rem;
    background-color: white;
}
.form-image img {
    width: 31rem;
}
.form {
    width: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    background-color: white;
    padding: 1rem;
}
.form-header {
    margin-bottom: 3rem;
    display: flex;
    justify-content: space-between;    
}
.login-button {
    display: flex;
    align-items: center;
}
.login-button button {
    border: none;
    background-color: rgb(108, 142, 244);
    padding: 0.4rem 1rem;
    border: 5px;
    cursor: pointer; 
}
.login-button button:hover {
    background-color: rgb(178, 194, 241);
}
.login-button button a {
    text-decoration: none;
    font-weight: 500;
    color: white;
}
.input-group {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    padding: 1rem;
}
.input-box {
    display: flex;
    flex-direction: column;
    margin-bottom: 0.2rem;
}
.input-box input {
    margin: 0.4rem 0;
    padding: 0.8rem 1.2rem;
    border: none;
    border-radius: 10px;
    box-shadow: 1px 1px 6px #0000001c;
}
.input-box input::hover{
    background-color: #eeeeee75;
}
.input-box input:focus-visible {
    outline: 1px solid rgb(108, 142, 244);
}
.input-box label {
    font-size: 0.75rem;
    font-weight: 600;
    color: #000000c0;
}
.input-box input::placeholder {
    color: #000000be;
}
.cadastro-button button {
    width: 100%;
    margin-top: 1.5rem;
    border: none;
    background-color: rgb(108, 142, 244);
    padding: 0.62rem;
    border-radius: 5px;
    cursor: pointer;
}
.cadastro-button button::hover {
    background-color: rgb(178, 194, 241);
}
.cadastro-button button a {
    text-decoration: none;
    font-size: 0.93rem;
    font-weight: 500;
    color: #fff;
}


@media screen and (max-width: 1330px) {
    .form-image {
        display: none;
    }
    .container {
        width: 50%;
    }
    .form {
        width: 100%;
    }
}
@media screen and (max-width: 1064px) {
    .container {
        width: 90%;
        height: auto;
    }
    .input-group {
        flex-direction: column;
        overflow-y: scroll;
        flex-wrap: nowrap;
        max-height: 10rem;
        padding-right: 5rem;
    }

    
}


</style>