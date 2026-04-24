
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

if ("serviceWorker" in navigator) {
  navigator.serviceWorker.register("sw.js")
    .then(() => console.log("SW registrado"))
    .catch(err => console.log("Erro SW:", err));
}

let deferredPrompt;

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  deferredPrompt = e;

  document.getElementById("installBtn").style.display = "block";
});

document.getElementById("installBtn").addEventListener("click", async () => {
  if (deferredPrompt) {
    deferredPrompt.prompt();

    const { outcome } = await deferredPrompt.userChoice;
    console.log("Resultado:", outcome);

    deferredPrompt = null;
  }
});



    document.getElementById("fruits").innerHTML = `
        <h2>${fruta.name}</h2>
        <p>nomeJapones: ${fruta.roman_name}</p>
        <p>categoria: ${fruta.type}</p>
        <p>descricao: ${fruta.description}</p>
    `;
}