let a = Number(lines.shift())
let [b, c] = lines.shift().split(" ").map((valor) => Number(valor))

if (b + c <= a) {
    console.log("Farei hoje!")
} else {
    console.log("Deixa para amanha!")
}