//teste//
const pets = [
  { id: 1, nome: 'Rex', especie: 'Cachorro' },
  { id: 2, nome: 'Mimi', especie: 'Gato' },
  { id: 3, nome: 'Bolinha', especie: 'Hamster' }
];

// Obtém todos os pets
function getAllPets(req, res) {
  res.json(pets);
}

// Obtém um pet pelo ID
function getPetById(req, res) {
  const id = parseInt(req.params.id);
  const pet = pets.find((pet) => pet.id === id);

  if (pet) {
    res.json(pet);
  } else {
    res.status(404).json({ mensagem: 'Pet não encontrado' });
  }
}

// Cria um novo pet
function createPet(req, res) {
  const { nome, especie } = req.body;
  const novoPet = { id: pets.length + 1, nome, especie };
  pets.push(novoPet);
  res.json(novoPet);
}

// Atualiza as informações de um pet
function updatePet(req, res) {
  const id = parseInt(req.params.id);
  const { nome, especie } = req.body;
  const pet = pets.find((pet) => pet.id === id);

  if (pet) {
    pet.nome = nome;
    pet.especie = especie;
    res.json(pet);
  } else {
    res.status(404).json({ mensagem: 'Pet não encontrado' });
  }
}

// Exclui um pet
function deletePet(req, res) {
  const id = parseInt(req.params.id);
  const index = pets.findIndex((pet) => pet.id === id);

  if (index !== -1) {
    const petExcluido = pets.splice(index, 1);
    res.json({ mensagem: `Pet com ID ${id} excluído com sucesso` });
  } else {
    res.status(404).json({ mensagem: 'Pet não encontrado' });
  }
}

module.exports = {
  getAllPets,
}