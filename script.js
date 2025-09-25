// script.js
document.addEventListener('DOMContentLoaded', () => {
    const games = [
        {
            title: "Guess the Number",
            description: "Can you guess the number before time runs out?",
            thumbnail: "images/guess-the-number-thumbnail.png",
            url: "games/guess-the-number/index.html"
        },
        {
            title: "Pong",
            description: "A classic two-player arcade game.",
            thumbnail: "images/pong-thumbnail.png",
            url: "games/pong/index.html"
        }
        // Add more game objects here as you create them
    ];

    const gameGrid = document.getElementById('game-grid');

    games.forEach(game => {
        const gameCard = document.createElement('a');
        gameCard.href = game.url;
        gameCard.classList.add('game-card');

        gameCard.innerHTML = `
            <img src="${game.thumbnail}" alt="${game.title} thumbnail">
            <div class="game-info">
                <h3>${game.title}</h3>
                <p>${game.description}</p>
            </div>
        `;
        gameGrid.appendChild(gameCard);
    });
});
