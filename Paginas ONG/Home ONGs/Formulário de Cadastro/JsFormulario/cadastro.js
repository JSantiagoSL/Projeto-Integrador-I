class Ong{
    constructor(nome, CNPJ, endereco, senha, img){
    this.nome = nome;
    this.CNPJ = CNPJ;
    this.endereco = endereco;
    this.senha = senha;
    this.img = img;
    }
exibirOng(){
    const tableBody = document.querySelector("tabelaOng tbody");
    const row = document.createElement("tr");
    row.innerHTML = ` 
    <td>${this.nome}</td>
    <td>${this.CNPJ}</td>
    <td>${this.endereco}</td>
    <td>${this.senha}</td>
    <td>${this.img}</td>
    <td>
      <button class="editarBtn">Editar</button>
      <button class="excluirBtn">Excluir</button>
    </td>
    `;
    tableBody.appendChild(row);
    
    
}
}