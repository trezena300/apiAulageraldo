elf.addEventListener("install", (event) => {
    console.log("Service Worker instalado");
});

// Este evento é obrigatório para o botão de instalação aparecer
self.addEventListener("fetch", (event) => {
    // Deixe vazio ou adicione lógica de cache futuramente
});