let a = Number(lines[0].split(" "))
let b = 1


while (a >= b) {
    console.log(`${b} ${Math.pow(b, 2)} ${Math.pow(b, 3)}
${b} ${(Math.pow(b, 2) + 1)} ${(Math.pow(b, 3) + 1)}`)
    b++
}