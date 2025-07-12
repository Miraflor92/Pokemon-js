const ash = {
    nome: "Ash",
    pokemon1: {
        nome: "Pikachu",
        forca:35,
        ataque:55,
        defesa:40,
        ataqueEspecial:50,
    }
};

const jessie = {
    nome: "Jessie",
    pokemon2: {
        nome: "Meowth",
        forca:40,
        ataque:45,
        defesa:35,
        ataqueEspecial:40,
    }
    
};

// Function to simulate a dice roll
async function rollDice (){
    return Math.floor(Math.random() * 6) + 1;
}
//function select action
async function getRandomAction(){
    let random = Math.random()
    let result
    switch(true){
        case random < 0.33:
            result = "ATAQUE";
            break;
        case random < 0.66:
            result = "DEFESA";
            break;
        default:
            result = "ATAQUE ESPECIAL";
            break;

    }
    return result;
}
//async function logRollResult(pokemonName, action, diceResult, skillValue){
//    console.log(`${pokemonName} fez o seguinte movimento ${action} e obteve ${diceResult} + ${skillValue} = ${diceResult + skillValue}`);}

//function winnerround
async function logWinnerRound(pokemonName, action, total, skillValue, diceResult ){
    console.log(`${pokemonName} fez o ${action} e obteve  ${skillValue} + ${diceResult} = ${total}`);
}
//function wait for enter
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
async function waitForEnter() {
    return new Promise(resolve => {
        readline.question(`Pressione Enter para a próxima batalha...`, () => {
            resolve();
        });
    });
}

// Function select pokemon
async function playBattleEngine(pokebola1, pokebola2){
    let p1 = { ...pokebola1.pokemon1, saude: pokebola1.pokemon1.forca};
    let p2 = { ...pokebola2.pokemon2, saude: pokebola2.pokemon2.forca};
    for(let round = 1; round <= 5; round ++){
        await waitForEnter();
        console.log(`⚔️ Rodada ${round}⚔️ \n`);
        
        //sortear tipo de acao
        let action= await getRandomAction();
        console.log(`Ação: ${action} \n`);

        //roller dice
    let diceResult1 = await rollDice();
    let diceResult2 = await rollDice();
    

    if(action === "ATAQUE"){
        let attackResult1 = diceResult1 + p1.ataque;
        let attackResult2 = diceResult2 + p2.ataque;

       await logWinnerRound(p1.nome, 'ataque', attackResult1, p1.ataque, diceResult1);
       await logWinnerRound(p2.nome, 'ataque', attackResult2, p2.ataque, diceResult2);

        if ( attackResult2 > attackResult1 ? 1 : 0){
            console.log(`${p2.nome} Venceu a rodada`);
            p1.saude -= 1;
        }
        if (attackResult1 > attackResult2 ? 1 : 0){
            console.log(`${p1.nome} Venceu a rodada`);
            p2.saude -= 1;
        }

    }

    if(action === "DEFESA"){
        let defenseResult1 = diceResult1 + p1.defesa;
        let defenseResult2 = diceResult2 + p2.defesa;
        
       await logWinnerRound(p1.nome, 'defesa', defenseResult1, p1.defesa, diceResult1);
       await logWinnerRound(p2.nome, 'defesa', defenseResult2, p2.defesa, diceResult2);

       if (defenseResult1 > defenseResult2 && p1.saude < p1.forca) {
            console.log(`${p1.nome} defendeu com sucesso!`);
            p1.saude += 1;
        }
        if (defenseResult2 > defenseResult1 && p2.saude < p2.forca) {
            console.log(`${p2.nome} defendeu com sucesso!`);
            p2.saude += 1;
        }
        else if (p1.saude === p1.forca && p2.saude === p2.forca) {
            console.log(`Defenderam com sucesso mas nenhum Pokémon ganhou saúde`);
        }
    }
    
    if(action === "ATAQUE ESPECIAL"){
        let specialAttackResult1 = diceResult1 + p1.ataqueEspecial;
        let specialAttackResult2 = diceResult2 + p2.ataqueEspecial;

       await logWinnerRound(p1.nome, 'ataque especial', specialAttackResult1, p1.ataqueEspecial, diceResult1);
       await logWinnerRound(p2.nome, 'ataque especial', specialAttackResult2, p2.ataqueEspecial, diceResult2);

        if (specialAttackResult2 > specialAttackResult1 ? 2 : 0){
            console.log(`${p2.nome} Venceu a rodada`);
            p1.saude -= 2;
        }
        if (specialAttackResult1 > specialAttackResult2 ? 2 : 0){
            console.log(`${p1.nome} Venceu a rodada`);
            p2.saude -= 2;
        }
    }
    console.log(`${p1.nome} saúde: ${p1.saude}`);
    console.log(`${p2.nome} saúde: ${p2.saude}`);
    console .log("⚔️ 💥 🕹️ ⚔️ 💥 🕹️ ⚔️ 💥 🕹️ ⚔️ 💥 🕹️ ⚔️ 💥 🕹️ \n");

}
readline.close();
return { p1, p2 };

}
// declare winner
async function declareFinishWinner(p1, p2, ){
    console.log(`🏆 Batalha finalizada! 🏆 \n`);
    
    if (p1.saude > p2.saude) {
        console.log(`${p1.nome} é o vencedor! 🎉 \n`);
    } else if (p2.saude > p1.saude) {
        console.log(`${p2.nome} é o vencedor! 🎉 \n`);
    } else {
        console.log(`A batalha terminou em empate! 🤝 \n`);
    }
    console.log(`${p1.nome}: ${p1.saude} de saúde restante`);
    console.log(`${p2.nome}: ${p2.saude} de saúde restante`);
}

    
//function simulate type action
(async function main(){
    console.log(`💥A batalha vai começar!💥 \n`);
    console.log(`⚔️ Pokémon de ${ash.nome}: ${ash.pokemon1.nome}`);
    console.log(`⚔️ Pokémon de ${jessie.nome}: ${jessie.pokemon2.nome}`);
    console.log(`⚔️ Vamos ver quem é o melhor treinador! ⚔️\n`);
    const { p1, p2 } = await playBattleEngine(ash, jessie);
    await declareFinishWinner(p1, p2);
    console.log(`💥A batalha terminou!💥`);
})();
