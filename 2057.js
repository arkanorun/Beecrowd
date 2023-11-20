let [a, b, c] = lines.shift().split(" ")

a = Number(a)
b = Number(b)
c = Number(c)

let tempo = a + b + c

if (tempo >= 24) {
    tempo = tempo - 24
}

if (tempo < 0) {
    tempo = 24 + tempo
}

console.log(tempo)