let valor = Number(lines[0].split(" "))

let letras = ["L", "I", "F", "E", " ", "I", "S", " ", "N", "O", "T", " ",
    "A", " ", "P", "R", "O", "B", "L", "E", "M", " ", "T", "O", " ", "B", "E",
    " ", "S", "O", "L", "V", "E", "D"]

let palavra = ""

for (let i = 0; i < valor; i++) {
    palavra += letras[i]
}

console.log(palavra)