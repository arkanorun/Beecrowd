let line1 = lines.shift().split(" ")
let line2 = lines.shift().split(" ")

let a = parseFloat(line1[0]) * 2
let b = parseFloat(line1[1]) * 3
let c = parseFloat(line1[2]) * 4
let d = parseFloat(line1[3])
let e = parseFloat(line2[0])

let media = (a + b + c + d) / (2 + 3 + 4 + 1)
let exame = (media + e) / 2

console.log("Media:", media.toFixed(1))

if (media >= 7) {
    console.log("Aluno aprovado.")
} else if (media < 7 && media >= 5) {
    if (exame >= 5) {
        console.log("Aluno em exame.\nNota do exame:", e.toFixed(1))
        console.log("Aluno aprovado.\nMedia final:", exame.toFixed(1))
    } else {
        console.log("Aluno reprovado.")
    }
} else {
    console.log("Aluno reprovado.")
}