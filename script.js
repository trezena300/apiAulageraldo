
async function onepiecefruits() {

    const musica = document.getElementById("musicaFundo");

    // toca a música (e evita erro se clicar várias vezes)
    if (musica.paused) {
        musica.play().catch(e => console.log("Erro ao tocar:", e));
    }

    let response = await fetch("https://api.api-onepiece.com/v2/fruits/en");
    let data = await response.json();

    let numeroAleatorio = Math.floor(Math.random() * data.length);
    let fruta = data[numeroAleatorio];

    document.getElementById("fruits").innerHTML = `
        <h2>${fruta.name}</h2>
        <p>nomeJapones: ${fruta.roman_name}</p>
        <p>categoria: ${fruta.type}</p>
        <p>descricao: ${fruta.description}</p>
    `;
}