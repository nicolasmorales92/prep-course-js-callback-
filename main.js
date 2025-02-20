let array = ["banana", "manzana","pera", "naranja"];

function convertirMayuscula (elemento){
  return elemento.toUpperCase()
}

function mapeo(arr, cb) {
  // Itera sobre el arreglo y por cada elemento, pasárselo como argumento al callback.
  // Tiene que guardar el resultado devuelto por el callback en cada elemento dentro de un nuevo arreglo.
  // Retorna el nuevo arreglo.
  // Tu código:
  return arr.map(i => cb(i))
}

let arrayModificado = mapeo(array, convertirMayuscula)
console.log(arrayModificado)