// Criando a class
class heroCreator{
    constructor(heroName, heroAge, heroClass, heroAttack){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroClass = heroClass
        this.heroAttack = heroAttack
    }
// Saída
    atacar(){
        console.log(`O herói de classe ${this.heroClass} atacou usando ${this.heroAttack}.`)
    }
   
}

let hero = new heroCreator(
    "Fulano",
    80,
    "Mago",
    "magia"
)

hero.atacar()