class Validator {
    constructor(){
        this.validations=[
            'data-min-length',

        ]
    }

// iniciar a validação de todos os campos//

    validate(form) {

    let inputs = form.getElementsByTagName('input');    // pegar todos inputs
    let inputsArray = [...inputs];     // transformar HTMLCollection em array
    inputsArray.forEach(function(input){
        
        for(let i = 0; this.validations.length > i; i++){
            if(input.getAttribute(this.validations[i] != null)){
                console.log('achou a validaçao')
            }
        }
    }, this)

    

    }

}

let form = document.getElementsByClassName("input-group");

let submet = document.getElementsByClassName("cadastro-button");
let validator = new Validator();

// disparar a validação//

submet.addEventListener('click', function(e){
e.preventDefalt();
validator.validate(form);
})
