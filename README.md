
# Desafio de projeto do Felipão: Pokémon.JS


Pokémon é uma das séries de jogos e animações mais famosas do mundo, criada pela Nintendo, Game Freak e Creatures. Nosso desafio será criar a lógica de um jogo de vídeo game para simular batalhas Pokémon, levando em consideração regras e mecânicas inspiradas no universo Pokémon.

***
---
## 🎮 Jogadores 
| Jogador | Atributos | Jogador |Atributos | 
|:---:|:---:|:---:|:---:|
| ![Pikachu](docs/gif/pikachu.gif Pikachu) | Força: 35  Ataque: 55 Defesa: 40 Ataque Especial:50 |![Bulbasaur](/docs/gif/bulbasaur.gif Bulbasaur)  |Força: 35 Ataque: 49 Defesa: 49 Ataque Especial:65|
| ![Charizard](/docs/gif/charizard.gif Charizard) |Força: 78 Ataque: 84 Defesa: 78 Ataque Especial:109|![Meowth](/docs/gif/meowth.gif Meowth) | Força: 40 Ataque: 45 Defesa: 35 Ataque Especial:40|
| ![Victreebel](/docs/gif/victreebel.gif Victreebel) |Força: 80 Ataque: 105 Defesa: 65 Ataque Especial:100|![Wobbuffet](/docs/gif/wobbuffet.gif Wobbuffet) |Força: 190 Ataque: 33 Defesa: 58 Ataque Especial: 33|

***
---

## 📜 Regras Detalhadas da Batalha Pokémon
 
🎮 Objetivo

Simular batalhas Pokémon em 5 rodadas, usando apenas: 

* Força (HP)
* Ataque
* Defesa

⚔️ Como funciona:

* Cada batalha dura no máximo 5 rodadas ou até que o HP de um Pokémon chegue a 0.

* Em cada rodada, será sorteado aleatoriamente um tipo de ação: 

    * **Ataque Físico:** Cada Pokémon rola um dado D6 e soma seu **Ataque.** O que tiver o maior valor causa 1 ponto de dano no oponente.

    * **Defesa:** Cada Pokémon rola um dado D6 e soma sua **Defesa.** O que tiver o maior valor recupera 1 ponto de HP (sem ultrapassar o HP inicial).

    * **Ataque Especial:** Cada Pokémon rola um dado D6 e soma seu **Ataque X** 1,5 (arredondado). O que tiver o maior valor causa 2 pontos de dano no oponente.

🩹 HP Pontos de Saúde

* Nenhum Pokémon pode ter HP abaixo de 0 ou acima do HP inicial.

*  Se o HP de um Pokémon chegar a 0, ele perde automaticamente.

🏆 Condição de vitória:

1-  Quem tiver o maior HP restante.

2- Se ambos tiverem o mesmo HP, ganha quem tiver maior Ataque (recompensa Pokémon ofensivo)

3- Se Ataque também for igual, ganha quem tiver maior Defesa.

4- Se ainda assim empatar, a batalha é declarada EMPATE.






## Etiquetas

Adicione etiquetas de algum lugar, como: [shields.io](https://shields.io/)

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
[![GPLv3 License](https://img.shields.io/badge/License-GPL%20v3-yellow.svg)](https://opensource.org/licenses/)
[![AGPL License](https://img.shields.io/badge/license-AGPL-blue.svg)](http://www.gnu.org/licenses/agpl-3.0)


