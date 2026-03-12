async function  onepiecefruits(){
    let response = await fetch ("https://api.api-onepiece.com/v2/fruits/en");
    let data = await response.json ();
    console.log("dados brutos:")
    console.log(data)
    //sorteia uma fruta


let numeroAleatorio = Math.floor(Math.random() * data.length);
let fruta = data[numeroAleatorio];


    console.log("fruits:")
    console.log(data)
    console.log(data[0])
    console.log(fruta)
    document.getElementById("fruits").innerHTML = `


    <h2>${fruta.name} </2h>
    
    <p> nomeJapones: ${fruta.roman_name} </p>
    <p> categoria: ${fruta.type} </p>
    <p> descricao: ${fruta.description}</p>

    `
    ;
}