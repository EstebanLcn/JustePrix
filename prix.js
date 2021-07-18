let input = document.querySelector('#prix');
let error = document.querySelector('.text-danger');
let formulaire = document.querySelector("#formulaire");

error.style.display = "none";

let nbAleatoire = Math.floor(Math.random() * 1001);
let coups = 0;
let nombreChoisi;


function verifier(nb){
    let instruction = document.createElement('div');
    
    if(nb < nbAleatoire){

        instruction.textContent = "#" + coups + " " + nombreChoisi + " C'est plus !";
        instruction.className = "instruction plus";
    }else if(nb > nbAleatoire){
        instruction.textContent = "#" + coups + " " + nombreChoisi + " C'est moins !";
        instruction.className = "instruction moins";
    }
    else{
        instruction.textContent = "#" + coups + " " + nombreChoisi + " Felicitations vous avez trouvé le nombre !";
        instruction.className = "instruction fini";
        input.disabled = true;
    }
         document.querySelector('#instructions').prepend(instruction);
}


input.addEventListener('keyup', () => {
    if(isNaN(input.value)){
        error.style.display = "inline";
    }
    else{
        error.style.display = "none";
    }
})

formulaire.addEventListener('submit', (e) => {
    e.preventDefault();
    
    if(isNaN(input.value) || input.value == ''){
       // Mettre notre bordure de formulaire en rouge (red)
      input.style.borderColor = "red";
    }
    else {
        coups ++;
        input.style.borderColor = 'silver';
        nombreChoisi = input.value;
        input.value = '';
        verifier(nombreChoisi);
    }
})