let a = parseFloat(lines[0].split(" "))

if (a % 2 === 0) {
    for (let i = 2; i <= a; i = i + 2)
        console.log(`${i}^2 = ${Math.pow(i, 2)}`)
} else {
    a -= 1
    for (let i = 2; i <= a; i = i + 2)
        console.log(`${i}^2 = ${Math.pow(i, 2)}`)
}