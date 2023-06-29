const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const animalController = {
  getAllAnimals: async (req, res) => {
    try {
      const animals = await prisma.animal.findMany();
      res.json(animals);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  getAnimalById: async (req, res) => {
    const { id } = req.params;
    try {
      const animal = await prisma.animal.findUnique({
        where: { id: Number(id) },
      });
      if (animal) {
        res.json(animal);
      } else {
        res.status(404).json({ error: 'Animal not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  createAnimal: async (req, res) => {
    const { name, species, age } = req.body;
    try {
      const animal = await prisma.animal.create({
        data: { name, species, age },
      });
      res.json(animal);
    } catch (error) {
      res.status(500).json({ error: 'Internal server error' });
    }
  },

  updateAnimal: async (req, res) => {
    const { id } = req.params;
    const { name, species, age } = req.body;
    try {
      const updatedAnimal = await prisma.animal.update({
        where: { id: Number(id) },
        data: { name, species, age },
      });
      res.json(updatedAnimal);
    } catch (error){
        res.status(500).json({ error: 'Internal server error' });
    }
  }
};