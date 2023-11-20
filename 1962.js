let a = Number(lines[0].split(" "))
let b
let tempo
let tempo1 = ""

for (let i = 1; i <= a; i++) {
    b = Number(lines[i].split(" "))
    tempo = 0
    tempo = 2015 - b

    if (i < a) {
        if (tempo <= 0) {
            tempo = (tempo * (-1)) + 1
            tempo1 += `${tempo} A.C.\n`
        } else {
            tempo1 += `${tempo} D.C.\n`
        }
    } else {
        if (tempo <= 0) {
            tempo = (tempo * (-1)) + 1
            tempo1 += `${tempo} A.C.`
        } else {
            tempo1 += `${tempo} D.C.`
        }
    }
}
console.log(tempo1)