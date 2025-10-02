# Mario Jump 🎮

Mario Jump é um jogo de navegador inspirado no clássico Super Mario, onde o jogador controla o Mario e precisa pular obstáculos (canos) para ganhar pontos. O jogo registra o Score e o Recorde do jogador usando o `localStorage`, permitindo que o recorde seja mantido mesmo após atualizar a página.

---

## 🆕 Versão 2 (v2)

Esta é a segunda versão do Mario Jump, com melhorias e novas funcionalidades:

- Tela de iniciar com botão de Start.  
- Tela de Game Over ao colidir com os canos.  
- Botão de Reset que leva até a tela Start para iniciar o jogo sem precisar atualizar a página.  
- Ajustes na lógica de colisão para que o jogo pare corretamente ao bater nos canos.  
- Score e Recorde continuam funcionando normalmente após reiniciar.

---

## 🕹️ Como Jogar

- Pressione qualquer tecla para fazer o Mario pular.  
- Evite bater nos canos que aparecem na tela.  
- Cada cano ultrapassado aumenta o seu Score.  
- Se o Mario colidir com um cano, o jogo termina, mas o Recorde é salvo.
- Após a morte, clique no botão Reset para reiniciar o jogo.

---

## ⚙️ Tecnologias Usadas

- HTML5
- CSS3
- JavaScript
- Fonte estilo Super Mario: [Press Start 2P](https://fonts.google.com/specimen/Press+Start+2P)

---

## 📂 Estrutura do Projeto
Mario-Jump/
│
├── index.html # Estrutura do jogo
├── css/
│ └── style.css # Estilos do jogo, animações e Score/High Score
├── js/
│ └── script.js # Lógica do Mario, colisão e pontuação
└── Images/
├── clouds.png
├── mario.gif
├── pipe.png
└── game-over.png

## Funcionalidades Extras (v2)

- Tela de início com botão de Start.  
- Score e Recorde com fonte estilo Super Mario (Press Start 2P).  
- Contorno preto no texto para melhor visualização.  
- Nuvens se movendo no fundo para dar sensação de movimento.  
- Tela de Game Over centralizada com botão de Reset.  
- Jogo pausa corretamente ao colidir com os canos.  
- Score continua acumulando normalmente após reiniciar.
---

## 🎮 Demo do Jogo

![Mario Jump Gameplay](./Images/MarioJumpV2.gif)

## 💻 Como Executar

Clone o repositório:
```bash
git clone https://github.com/seu-usuario/mario-jump.git
```
## 📜 Licença

Este é um projeto para fins acadêmicos.  
Está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).


