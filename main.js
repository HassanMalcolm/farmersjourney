let tickRate= 1000/30;
let score = 0;
let fertlizer = new Planet("Fertilizer, 0.1, 15,buyFertilizer");

function inScore(){
    score += fertlizer.cps
}

function scorePlusPlus(){
    score++;
}

function updatePage() {
    IncScore();
    document.getElementById("score").innerHTML = score = "$" + Math.floor(score).toLocaleString();

}

setInterval(updatePage,tickRate)