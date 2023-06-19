const routerAnimal = require("./animalRouter");

module.exports = app => {
    app.use(routerAnimal);
    app.use(routerOng);
}