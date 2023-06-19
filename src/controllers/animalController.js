class animalcontroller{
    buscarAnimal(){
        return "Buscando Animal...";
    }
    criarAnimal(){
        return "Criando Animal"
    }
    atualizarAnimal(id){
        return "alterando Animal " + id;

    }
    deletarAnimal(id){
        return "Deletando Animal" + id;
    }
}

module.exports = new animalcontroller();