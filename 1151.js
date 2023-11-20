let a = Number(lines[0].split(" "))
cont = "0 1 "
let f = [0, 1]

if (a === 1) {

    console.log(0)

} else if (a === 2) {

    console.log(0, 1)

} else if (a > 2) {
    for (i = 1; i <= (a - 2); i++) {
        f.push(f[i] + f[i - 1])
        cont += `${f[i + 1]} `
    }
    console.log(cont.trim())
}