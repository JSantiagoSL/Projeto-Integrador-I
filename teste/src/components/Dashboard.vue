<template>
    <div id="animal-table" v-if="animais">
      <div>
        <div id="animal-table-heading">
          <div class="order-id">#:</div>
          <div>Espécie:</div>
          <div>Sexo:</div>
          <div>Porte:</div>
          <div>Pelagem:</div>
          <div>Cor:</div>
          <div>Deficiência:</div>
          <div>Vacinas:</div>
          <div>Descrição:</div>
        </div>
      </div>
      <div id="animal-table-rows">
        <div class="animal-table-row" v-for="animal in animals" :key="animal.id">
          <div class="order-number">{{ animal.id }}</div>
          <div>{{ animal.especie }}</div>
          <div>{{ animal.sexo }}</div>
          <div>{{ animal.porte }}</div>
          <div>{{ animal.pelagem }}</div>
          <div>{{ animal.cor }}</div>
          <div>{{ animal.deficiencia }}</div>
          <div>{{ animal.vacina }}</div>
          <div>{{ animal.descricao }}</div>
          </div>
          <div>
            <select name="status" class="status" @change="updateanimal($event, animal.id_animal)">
              <option :value="s.tipo" v-for="s in status" :key="s.id" :selected="animal.status == s.tipo">
                {{ s.tipo }}
              </option>
            </select>
            <button class="delete-btn" @click="deleteanimal(animal.id)">Deletar</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  <script>
    export default {
      name: "Dashboard",
      data() {
        return {
          animais: null,
          animal_id: null,
          status: []
        }
    }
      },
      methods: {
        async getAnimal() {
          const req = await fetch('http://localhost:8081')
  
          const data = await req.json()
  
          this.animals = data
  
        async deleteanimal(id_animal) {
  
          const req = await fetch(`http://localhost:8081/animais/${id}`, {
            method: "DELETE"
          });
  
          const res = await req.json()
  
          this.getAnimais()
  
        },
        async updateanimal(event, id) {
  
          const option = event.target.value;
  
          const dataJson = JSON.stringify({status: option});
  
          const req = await fetch(`http://localhost:8081/animal/${id_animal}`, {
            method: "PATCH",
            headers: { "Content-Type" : "application/json" },
            body: dataJson
          });
  
          const res = await req.json()
  
          console.log(res)
  
        }
      },
      mounted () {
      this.getAnimais()
      }
    }
  </script>
  
  <style scoped>
    #animal-table {
      max-width: 1200px;
      margin: 0 auto;
    }
  
    #animal-table-heading,
    #animal-table-rows,
    .animal-table-row {
      display: flex;
      flex-wrap: wrap;
    }
  
    #animal-table-heading {
      font-weight: bold;
      padding: 12px;
      border-bottom: 3px solid #333;
    }
  
    .animal-table-row {
      width: 100%;
      padding: 12px;
      border-bottom: 1px solid #CCC;
    }
  
    #animal-table-heading div,
    .animal-table-row div {
      width: 19%;
    }
  
    #animal-table-heading .order-id,
    .animal-table-row .order-number {
      width: 5%;
    }
  
    select {
      padding: 12px 6px;
      margin-right: 12px;
    }
  
    .delete-btn {
      background-color: #222;
      color:#fcba03;
      font-weight: bold;
      border: 2px solid #222;
      padding: 10px;
      font-size: 16px;
      margin: 0 auto;
      cursor: pointer;
      transition: .5s;
    }
    
    .delete-btn:hover {
      background-color: transparent;
      color: #222;
    }
    
  </style>