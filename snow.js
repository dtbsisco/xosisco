function createSnowflakes() {
    const snowflakesContainer = document.createElement('div');
    snowflakesContainer.classList.add('snowflakes');
    document.body.appendChild(snowflakesContainer);

    for (let i = 0; i < 50; i++) {
        let snowflake = document.createElement('span');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';
        snowflake.style.left = `${Math.random() * 100}vw`;
        snowflake.style.animationDuration = `${Math.random() * 8 + 10}s`;
        snowflake.style.fontSize = `${Math.random() * 1 + 0.5}em`;
        snowflakesContainer.appendChild(snowflake);
    }
}

window.onload = createSnowflakes;