class Planet{
constructor(planetName, baseCps, baseCost, buttonId){
this.planetName = planetName;
this.baseCps = baseCps / (1000/tickRate);
this.cost = baseCost;
this.buttonId = buttonId;
this.amountOwned = 0;
this.cps = 0;
this.visible = false;
}

purchase(){
    score-= this.cost;
    this.amountOwned++;
    this.cps = this.baseCps*this.amountOwned;
    this.cost = Math.ceil(this.cost * 1.15 ** this.amountOwned);
}

}