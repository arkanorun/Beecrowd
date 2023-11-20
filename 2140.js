let [n, m] = lines.shift().split(" ")
m = Number(m)
n = Number(n)

let notas = [2, 5, 10, 20, 50, 100]

while (n !== 0 && m !== 0) {
    let a = 0
    let b = 0
    let valor = m - n

    for (let i = 0; i < notas.length; i++) {
        for (let j = a; j < notas.length; j++) {

            if (valor === notas[i] + notas[j]) {
                b++
                break;
            }
        }
        a++
        if (b > 0) {
            break;
        }
    }
    if (b > 0) {
        console.log("possible")
    } else {
        console.log("impossible")
    }

    [n, m] = lines.shift().split(" ")
    m = Number(m)
    n = Number(n)

}