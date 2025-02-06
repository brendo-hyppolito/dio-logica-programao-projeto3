// Criando a class
class heroCreator{
    constructor(heroName, heroAge, heroClass){
        this.heroName = heroName
        this.heroAge = heroAge
        this.heroClass = heroClass.toLowerCase()
    }

//Método para identificar o tipo de ataque baseado na classe e retornar mensagem de saída.
    atacar(){
//Verifica se a classe inserida e válida e só então checa o tipo de ataque.
        let validClasses = ["guerreiro", "mago", "monge", "ninja"]
        if (validClasses.includes(this.heroClass)){
            let attackType = ""   

            if (this.heroClass === validClasses[0]){
                attackType = "espada"
            }

            if (this.heroClass === validClasses[1]){
                attackType = "magia"
            }

            if (this.heroClass === validClasses[2]){
                attackType = "artes marciais"
            }

            if (this.heroClass === validClasses[3]){
                attackType = "shuriken"
            }
//Saída caso a classe seja válida.
            console.log(`O herói de classe ${this.heroClass} atacou usando ${attackType}.`)
        }
//Saída caso a classe não seja válida.
        else{
            console.log("Classe de herói inválida. Escolha entre uma das seguintes classes válidas: guerreiro, mago, monge e ninja")
        }
    }
}

let hero = new heroCreator("Fulano", 80, "guerReiRo")

console.log(hero)

hero.atacar()
