let a = Number(lines[0].split(" "))
let b = 1

while (b <= a) {
    if (a % b === 0) {
        console.log(b)
    }
    b++
}