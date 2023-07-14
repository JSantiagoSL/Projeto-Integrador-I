<template>
  <div>
    <Animal :animal="animal" v-show="animal" />

    <div class="cadastro">
      <form id="animal-form" method="POST" @submit="createAnimal">
        <div class="input-container">
          <label for="especie">Espécie:</label>
          <select name="especie" id="especie" v-model="especie">
            <option value="">Cachorro</option>
            <option value="">Gato</option>
            <option v-for="especie in especies" :key="especie.id" :value="especie.tipo">{{ especie.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="sexo">Sexo:</label>
          <select name="sexo" id="sexo" v-model="sexo">
            <option value="">Fêmea</option>
            <option value="">Macho</option>
            <option v-for="sexo in sexos" :key="sexo.id" :value="sexo.tipo">{{ sexo.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="porte">Porte:</label>
          <select name="porte" id="porte" v-model="porte">
            <option value="">Pequeno</option>
            <option value="">Médio</option>
            <option value="">Grande</option>
            <option v-for="porte in portes" :key="porte.id" :value="porte.tipo">{{ porte.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="pelagem">Pelagem:</label>
          <select name="pelagem" id="pelagem" v-model="pelagem">
            <option value="">Curto</option>
            <option value="">Médio</option>
            <option value="">Longo</option>
            <option v-for="pelagem in pelagens" :key="pelagem.id" :value="pelagem.tipo">{{ pelagem.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="cor">Cor:</label>
          <select name="cor" id="cor" v-model="cor">
            <option value="">Selecione a cor do animal</option>
            <option v-for="cor in cors" :key="cor.id" :value="cor.tipo">{{ cor.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="deficiencia">Deficiência:</label>
          <select name="deficiencia" id="deficiencia" v-model="deficiencia">
            <option value="">Sim</option>
            <option value="">Não</option>
            <option v-for="deficiencia in deficiencias" :key="deficiencia.id" :value="deficiencia.tipo">{{ deficiencia.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="vacina">Vacinas:</label>
          <select name="vacina" id="vacina" v-model="vacina">
            <option value="">Não é Vacinado</option>
            <option value="">Possui todas as Vacinas</option>
            <option value="">Algumas Vacinas</option>
            <option v-for="vacina in vacinas" :key="vacina.id" :value="vacina.tipo">{{ vacina.tipo }}</option>
          </select>
        </div>

        <div class="input-container">
          <label for="descricao">Descrição</label>
          <input type="text" id="descricao" name="descricao" v-model="descricao" placeholder="Descreva o animal, Vacinas tomadas e Caracteristicas principais">
        </div>

        <button type="submit">Cadastrar Animal</button>
      </form>
    </div>
  </div>
</template>


<style>
.cadastro {
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
  color: #000;
}

input,
select {
  padding: 5px 10px;
  width: 100%;
}

button {
  background-color: #008cff;
  color: #fff;
  font-weight: bold;
  border: none;
  padding: 10px;
  font-size: 16px;
  margin-top: 10px;
  cursor: pointer;
  transition: 0.5s;
}

button:hover {
  background-color: #0367fc;
}
</style>
