let buttons = {
    select: document.getElementById("selecttButton"),
    restart: document.getElementById("restartButton"),
    btnFire: document.getElementById("attackFire"),
    btnDirt: document.getElementById("attackDirt"),
    btnWater: document.getElementById("attackWater")
}

let petInput = {
    hipodoge: document.getElementById("Hipodoge"),
    capipepo: document.getElementById("Capipepo"),
    ratigueya: document.getElementById("Ratigueya"),
}

const player = {
    name: "Ash",
    exp: 0
}

const computer = {
    name: "Bash",
    exp: 0
}

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
    
function randomNum(min, max){
    num = Math.floor(Math.random() * (max - min + 1) + min);
    return num
}

buttons.select.addEventListener("click", SelectPet);
function SelectPet(){
    if (petInput.hipodoge.checked){
        player.pet = hipodoge;
        alert("inteligente, hipodogue es...");
    } else if (petInput.capipepo.checked){
        player.pet = capipepo;
        alert("un fiel amigo Capipepo es...");
    } else if (petInput.ratigueya.checked){
        player.pet = ratigueya;
        alert("Ratigueya buena compañia es...");
    } else {
        alert("una mascota, seleccionar debes...");
    }
    
    if (player.hasOwnProperty("pet")){
        let spanPet = document.getElementById("petPlayer");
        let spanLifePet = document.getElementById("lifePlayer");
        spanPet.innerHTML = player.pet.name;
        spanLifePet.innerHTML = player.pet.life;
    }
    
    let spanPet = document.getElementById("petEnemy");
    let spanLifePet = document.getElementById("lifeEnemy");

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
    
    buttons.btnFire.addEventListener("click", btnAttackTypes.btnFire);
    buttons.btnDirt.addEventListener("click", btnAttackTypes.btnDirt);
    buttons.btnWater.addEventListener("click", btnAttackTypes.btnWater);
}
let attackSelect;
let attackType;
let attackDmg;
let criticDmg;
//false is computer, true is user
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
buttons.btnFire.addEventListener("click", btnAttackTypes.btnFire);
buttons.btnDirt.addEventListener("click", btnAttackTypes.btnDirt);
buttons.btnWater.addEventListener("click", btnAttackTypes.btnWater);

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
    let messagePlayer = document.getElementById("playerMessage");
    let messageComputer = document.getElementById("computerMessage");
    let gameState = document.getElementById("gameState");
    if(!turn){
        //console.log("turno del Jugador");
        let spanLifePet = document.getElementById("lifeEnemy");
        player.pet.attackDmg = attackDmg;
        console.log('turno del jugador');
        computer.pet.life -= player.pet.attackDmg;
        spanLifePet.innerHTML = computer.pet.life;
        messagePlayer.innerHTML = `${player.name} ataca con ${attackType}`;
        gameState.innerHTML = `turno de ${computer.name}`;
        turn = true;
        if (computer.pet.life < 0){
            buttons.btnFire.removeEventListener("click", btnAttackTypes.btnFire);
            buttons.btnDirt.removeEventListener("click", btnAttackTypes.btnDirt);
            buttons.btnWater.removeEventListener("click", btnAttackTypes.btnWater);
            spanLifePet.innerHTML = 0;
            gameState.innerHTML = `${player.name} gana el combate!`;
            winner = player.name;
        }
    }else if (turn){
        //console.log("turno del Pc");
        computer.pet.attackDmg = attackDmg;
        console.log('turno del pc');
        player.pet.life -= computer.pet.attackDmg;
        let spanLifePet = document.getElementById("lifePlayer");
        spanLifePet.innerHTML = player.pet.life;
        messageComputer.innerHTML = `${computer.name} ataca con ${attackType}`;
        gameState.innerHTML = `turno de ${player.name}`;
        turn = false;
        if (player.pet.life < 0){
            buttons.btnFire.removeEventListener("click", btnAttackTypes.btnFire);
            buttons.btnDirt.removeEventListener("click", btnAttackTypes.btnDirt);
            buttons.btnWater.removeEventListener("click", btnAttackTypes.btnWater);
            spanLifePet.innerHTML = 0;
            gameState.innerHTML = `${computer.name} gana el combate!`;
            winner = computer.name;
        }
    }
}

buttons.restart.addEventListener("click", RestartGame);
function RestartGame(){
    let messagePlayer = document.getElementById("playerMessage");
    let messageComputer = document.getElementById("computerMessage");
    let gameState = document.getElementById("gameState");
    //ToDo: borrar los mensajes una vez reiniciado el juego 
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