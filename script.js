async function  getReceita(){
    let response = await fetch ("https://www.themealdb.com/api/json/v1/1/random.php");
    let data = await response.json ();
    console.log("dados brutos:")
    console.log(data)
    
    let receita = data.meals[0];
    console.log("dados receita:")
    console.log(data)
    
    document.getElementById("receita").innerHTML = `
   

    <h2>${receita.strMeal} </2h>
    <img src ="${receita.strMealThumb}"  />

    <p> categoria: ${receita.strCategory} </p>
    <p> ingredientes:${receita.strInstructions} </p>

    `
    ;
}