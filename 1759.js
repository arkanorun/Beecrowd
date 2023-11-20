let a = Number(lines[0].split(" "))
let h = ""
for (let i = 0; i < a; i++) {
    if (i < (a - 1)) {
        h += "Ho "
    } else {
        h += "Ho!"
    }
}
console.log(h)