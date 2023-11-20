let b = Number(lines.shift())
let impar = 0
for (let i = 0; i < b; i++) {
    let [a1, a2] = lines.shift().split(" ")
    a1 = Number(a1)
    a2 = Number(a2)

    let impar = 0

    if (a1 < a2) {
        if (a1 % 2 === 0) {
            a1 += 1
            for (let i = a1; i < a2; i = i + 2) {
                impar += i
            }
        }
        else {
            a1 += 2
            for (let i = a1; i < a2; i = i + 2) {
                impar += i
            }
        }
    } else if (a1 >= a2) {
        if (a2 % 2 === 0) {
            a2 += 1
            for (let i = a2; i < a1; i = i + 2) {
                impar += i
            }
        }
        else {
            a2 += 2
            for (let i = a2; i < a1; i = i + 2) {
                impar += i
            }
        }
    }
    console.log(impar)
}