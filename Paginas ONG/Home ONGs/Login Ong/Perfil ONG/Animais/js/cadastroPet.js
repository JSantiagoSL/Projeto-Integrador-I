// Classe Animal
class Animal {
    constructor(especie, sexo, porte, idade, deficiencia, cor, pelagem) {
      this.especie = especie;
      this.sexo = sexo;
      this.porte = porte;
      this.idade = idade;
      this.deficiencia = deficiencia;
      this.cor = cor;
      this.pelagem = pelagem;
    }
  
    // Método para exibir o animal na tabela
    exibirNaTabela() {
      const tableBody = document.querySelector("#animalTable tbody");
      const row = document.createElement("tr");
      row.innerHTML = `
        <td>${this.especie}</td>
        <td>${this.sexo}</td>
        <td>${this.porte}</td>
        <td>${this.idade}</td>
        <td>${this.deficiencia}</td>
        <td>${this.cor}</td>
        <td>${this.pelagem}</td>
        <td>
          <button class="editarBtn">Editar</button>
          <button class="excluirBtn">Excluir</button>
        </td>
      `;
      tableBody.appendChild(row);
  
      // Adicionar eventos aos botões de editar e excluir
      const editarBtn = row.querySelector(".editarBtn");
      editarBtn.addEventListener("click", () => {
        // Chamada de função para editar o animal
        editarAnimal(this);
      });
  
      const excluirBtn = row.querySelector(".excluirBtn");
      excluirBtn.addEventListener("click", () => {
        // Chamada de função para excluir o animal
        excluirAnimal(this);
      });
    }
  }
  
  // Função para adicionar um novo animal
  function adicionarAnimal(event) {
    event.preventDefault();
  
    const nomeInput = document.querySelector("#nomeInput");
    const especieInput = document.querySelector("#especieInput");
    const idadeInput = document.querySelector("#idadeInput");
  
    const nome = nomeInput.value;
    const especie = especieInput.value;
    const idade = idadeInput.value;
  
    const animal = new Animal(nome, especie, idade);
  
    // Enviar os dados do animal para o servidor (PHP) para salvar
  }; 