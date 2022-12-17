//buttons asigns
let buttons = {
    select: document.getElementById("selecttButton"),
    restart: document.getElementById("restartButton"),
    submit: document.getElementById("submitBtn"),
    btnFire: document.getElementById("attackFire"),
    btnDirt: document.getElementById("attackDirt"),
    btnWater: document.getElementById("attackWater")
}
//selection pet
let petInput = {
    hipodoge: document.getElementById("Hipodoge"),
    capipepo: document.getElementById("Capipepo"),
    ratigueya: document.getElementById("Ratigueya"),
}
let inputUserData = { 
    trainerName: document.getElementById("InputPlayerName")
}
//PlayersObjects
const player = {
    name:'',
    exp: 0
}
//execute the arrow function to asign the value in the player.name
const namePlayer = () => { 
    player.name = inputUserData.trainerName.value;
}
buttons.submit.addEventListener("click", namePlayer);

const computer = {
    name: "Bash",
    exp: 0
}

//PetObjects
const hipodoge = {
    name: "Hipodoge",
    exp: 13,
    life: 130,
    attackType: "fire",
    attackDmg: 20
}
const capipepo = {
    name: "Capipepo",
    exp: 20,
    life: 200,
    attackType: "dirt",
    attackDmg: 13
}
const ratigueya = {
    name: "Ratigueya",
    exp: 15,
    life: 150,
    attackType: "water",
    attackDmg: 15
}

//create messages in the section
let sectionMessages = document.getElementById("messages");
function CreateMessages(contentMessage){
    let newMessage = document.createElement('p');
    sectionMessages.appendChild(newMessage);
    newMessage.innerHTML = contentMessage;
    DeleteMessages();
}

//ToDo: delete messages when the section its full
function DeleteMessages(){
    //.....
}

//return a random number with a min and max limits
function randomNum(min, max){
    num = Math.floor(Math.random() * (max - min + 1) + min);
    return num
}

//selection of the pets
buttons.select.addEventListener("click", SelectPet);
function SelectPet(){
    //logic selection, look what is the inputRadio selected and append the petObject to the playerObject
    if (petInput.hipodoge.checked){
        player.pet = hipodoge;
        CreateMessages("inteligente, hipodogue es...");
    } else if (petInput.capipepo.checked){
        player.pet = capipepo;
        CreateMessages("un fiel amigo Capipepo es...");
    } else if (petInput.ratigueya.checked){
        player.pet = ratigueya;
        CreateMessages("Ratigueya buena compañia es...");
    } else {
        CreateMessages("una mascota, seleccionar debes...");
    }
    //update the life points for the player pets selected
    if (player.hasOwnProperty("pet")){
        let spanPet = document.getElementById("petPlayer");
        let spanLifePet = document.getElementById("lifePlayer");
        spanPet.innerHTML = player.pet.name;
        spanLifePet.innerHTML = player.pet.life;
    }
    
    let spanPet = document.getElementById("petEnemy");
    let spanLifePet = document.getElementById("lifeEnemy");

    //pick a random Pet for the computer
    switch (randomNum(1,3)) {
        case 1 :
            computer.pet = hipodoge;
            spanPet.innerHTML = computer.pet.name;
            spanLifePet.innerHTML = computer.pet.life;
        break
        case 2 :
            computer.pet = capipepo;
            spanPet.innerHTML = computer.pet.name;
            spanLifePet.innerHTML = computer.pet.life;
        break
        case 3 :
            computer.pet = ratigueya;
            spanPet.innerHTML = computer.pet.name;
            spanLifePet.innerHTML = computer.pet.life;
        break             
    }
    //append the event listener for the attack buttons
    buttons.btnFire.addEventListener("click", btnAttackTypes.btnFire);
    buttons.btnDirt.addEventListener("click", btnAttackTypes.btnDirt);
    buttons.btnWater.addEventListener("click", btnAttackTypes.btnWater);
}
//game Logic
let attackSelect;
let attackType;
let attackDmg;
let criticDmg;
//false is user, true is computer
let turn = false;
let btnAttackTypes = {
    btnFire: () => {
        attackSelect = 'fire';
        attackType = 'Fuego';
        AttackType();
        RandomAttackType();
        GameExe();
    },
    btnDirt: () => {
        attackSelect = 'dirt';
        attackType = 'Tierra';
        AttackType();
        RandomAttackType();
        GameExe();
    },
    btnWater: () => {
        attackSelect = 'water';
        attackType = 'Agua'
        AttackType();
        RandomAttackType();
        GameExe();
    }
}

//pick a random attack for the computer
function RandomAttackType(){
    switch (randomNum(1,4)){
        case 1: 
            attackSelect = 'fire';
            AttackType();
        break
        case 2: 
            attackSelect = 'dirt';
            AttackType();
        break
        case 3:
            attackSelect = 'water';
            AttackType();
        break
        case 4: 
            attackSelect = computer.pet.AttackType;
            AttackType();
        break
    }
}

function AttackType(){
    if (!turn){
        obj = player;
    }else{
        obj = computer
    }
    //decide if is a critical attack or not
    if (randomNum(1,10) == 1){
        criticDmg = true;
        console.log("este ataque es critico");
    }else {
        criticDmg = false;
    }

    switch (attackSelect){
        case 'fire' :
            attackDmg = 0;
            if (obj.pet.attackType == attackSelect && criticDmg){
                attackDmg = (obj.pet.attackDmg * 2);   
                console.log("ataque critico de tipo fuego" + attackDmg);
            }else if (obj.pet.attackType == attackSelect){
                attackDmg = (obj.pet.attackDmg * 0.5) + 20;
                console.log("ataque de tipo fuego" + attackDmg);
            }else {
                attackDmg = obj.pet.attackDmg;
                console.log("ataque de tipo fuego disminuido" + attackDmg);
            }
        break
        case 'dirt' :
            attackDmg = 0;
            if (obj.pet.attackType == attackSelect && criticDmg){
                attackDmg = (obj.pet.attackDmg * 2);
                console.log("ataque critico de tipo Tierra" + attackDmg);  
            }else if (obj.pet.attackType == attackSelect){
                attackDmg = (obj.pet.attackDmg * 0.5) + 13;
                console.log("ataque de tipo Tierra" + attackDmg);
            }else {
                attackDmg = obj.pet.attackDmg;
                console.log("ataque de tipo Tierra disminuido" + attackDmg);
            }
        break
        case 'water' :
            attackDmg = 0;
            if (obj.pet.attackType == attackSelect && criticDmg){
                attackDmg = (obj.pet.attackDmg * 2);
                console.log("ataque critico de tipo Agua" + attackDmg);
            }else if (obj.pet.attackType == attackSelect){
                attackDmg = (obj.pet.attackDmg * 0.5) + 15;
                console.log("ataque de tipo Agua" + attackDmg);
            }else {
                attackDmg = obj.pet.attackDmg;
                console.log("ataque de tipo Agua disminuido" + attackDmg);
            }
        break
    }
}

let winner;
function GameExe(){
    if(!turn){
        //console.log("turno del Jugador");
        let spanLifePet = document.getElementById("lifeEnemy");
        player.pet.attackDmg = attackDmg;
        computer.pet.life -= player.pet.attackDmg;
        spanLifePet.innerHTML = computer.pet.life;
        CreateMessages(`${player.name} ataca con ${attackType}`);
        if (criticDmg){
            CreateMessages(`Es un ataque critico!`);
        }
        CreateMessages(`${player.name} inflinge ${attackDmg} de daño a ${computer.pet.name}`);
        CreateMessages(`turno de ${computer.name}`);
        turn = true;
        if (computer.pet.life < 0){
            buttons.btnFire.removeEventListener("click", btnAttackTypes.btnFire);
            buttons.btnDirt.removeEventListener("click", btnAttackTypes.btnDirt);
            buttons.btnWater.removeEventListener("click", btnAttackTypes.btnWater);
            spanLifePet.innerHTML = 0;
            CreateMessages(`${player.name} gana el combate!`);
            winner = player.name;
        }
    }else if (turn){
        //console.log("turno del Pc");
        let spanLifePet = document.getElementById("lifePlayer");
        computer.pet.attackDmg = attackDmg;
        player.pet.life -= computer.pet.attackDmg;
        spanLifePet.innerHTML = player.pet.life;
        CreateMessages(`${computer.name} ataca con ${attackType}`);
        if (criticDmg){
            CreateMessages(`Es un ataque critico!`);
        }
        CreateMessages(`${computer.name} inflinge ${attackDmg} de daño a ${computer.pet.name}`);
        CreateMessages(`turno de ${player.name}`);
        turn = false;
        if (player.pet.life < 0){
            buttons.btnFire.removeEventListener("click", btnAttackTypes.btnFire);
            buttons.btnDirt.removeEventListener("click", btnAttackTypes.btnDirt);
            buttons.btnWater.removeEventListener("click", btnAttackTypes.btnWater);
            spanLifePet.innerHTML = 0;
            CreateMessages(`${computer.name} gana el combate!`);
            winner = computer.name;
        }
    }
}

buttons.restart.addEventListener("click", RestartGame);
function RestartGame(){
    petInput.capipepo.checked = false;
    petInput.ratigueya.checked = false;
    petInput.hipodoge.checked = false;

    hipodoge.life = 130;
    capipepo.life = 200;
    ratigueya.life = 150;

    if (winner == player.name){
        player.exp += computer.pet.exp;
        winner = undefined;
    } else{
        player.exp -= player.exp * 0.3;
    }
}
//ToDo: mostrar la experiencia del jugador, experiencia ganada en cada combate, y crear una interfaz visual que no sea solo texto y botones