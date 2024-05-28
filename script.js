console.log("peticiones")

const obterpokemon =async () =>{
  const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
  const data = await respuesta.json()
  console.log(data)


}
obterpokemon()