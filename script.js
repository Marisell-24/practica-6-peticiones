console.log("peticiones")
//callback
const obtener = () =>{
    console.log("obtener")

}
obtener()

const buttonObtener =document.getElementById("button-obtener")
//agregar evento
// buttonObtener.addEventListener("click",obtener )

buttonObtener.addEventListener("click",async ()  =>{
    console.log('obtener')
   const pokemonData = await obterpokemon()

   const pokemonArticle = document.getElementById("pokemon")
   console.log(pokemonArticle)
   // crear un elemento html
   const h3 = document.createElement("h3")
   // le asigna un texto al elemento
   h3.innerText = pokemonData.name
   // agrea un elemento con hijo
   pokemonArticle.appendChild(h3)

   // crear elemento img
   const img = document.createElement("img")
   img.src =pokemonData.sprites.front_default
   console.log(img)
   pokemonArticle.appendChild(img)

})

const obterpokemon = async () => {
    const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    const data = await respuesta.json()
    console.log(data)
    return data

}
