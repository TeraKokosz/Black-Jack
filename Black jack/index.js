const min = 2;
const max = 11;
const min2 = 17;
const max2 = 24;
let result = 0;
const numberCap = 21;
let messageEl = document.querySelector("#message");
let isAlive = true;

function addCard(){
    // if (!isAlive) return;
    const randomNumber = Math.floor(Math.random()* (max - min + 1)) + min;
    document.getElementById("firstCard").textContent = "Card:  " + randomNumber;
    let currentNumbers = randomNumber + "  ";
    document.getElementById("currentCards").textContent += currentNumbers;
    result += randomNumber;
    document.getElementById("result").innerText = result;
    if (result > 21 ){
        isAlive = false;
        document.getElementById("add").disabled = true;
        hold();
    }
}


function hold(){
    const krupier = Math.floor(Math.random()* (max2 - min2 + 1)) + min2;
    document.getElementById("result2").textContent = "Dealer's Score: " + krupier;
    if (krupier <= numberCap && result > numberCap ) {
        messageEl.textContent = "Loss!!";
    }
    else if(result > numberCap && krupier > numberCap){
        messageEl.textContent = "Draw!!";
    }
    else if (krupier > numberCap && result <= numberCap ) {
        messageEl.textContent = "Win!!";
    }
    else{
        if (result == krupier){
            messageEl.textContent = "Draw!!";
        }
        else if (result > krupier){
            messageEl.textContent = "Win!!";
        }
        else if (result < krupier){
            messageEl.textContent = "Loss!!";
        }
    }    
}

function reset(){
    result = 0;
    combo = 0;
    document.getElementById("firstCard").textContent = "Card: ";
    document.getElementById("currentCards").textContent = "Current Cards: ";
    document.getElementById("result2").textContent = "Dealer's Score:";
    document.getElementById("result").innerText = null;
    messageEl.textContent = "Wynik:";
    isAlive = true;
    document.getElementById("add").disabled = false;
}