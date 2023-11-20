let soma = 0

while (lines[0]) {
    let a = lines.shift().split(" ")

    if (a == "*--") {
        soma += 4
    } else if (a == "**-") {
        soma += 6
    } else if (a == "***") {
        soma += 7
    } else if (a == "*-*") {
        soma += 5
    } else if (a == "-*-") {
        soma += 2
    } else if (a == "--*") {
        soma += 1
    } else if (a == "-**") {
        soma += 3
    }

    if (a[0] == "caw") {
        console.log(soma)
        soma = 0
    }
}