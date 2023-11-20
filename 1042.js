lines = lines.shift().split(" ")

let a = parseFloat(lines[0])
let b = parseFloat(lines[1])
let c = parseFloat(lines[2])

if (a <= b && a <= c) {
    if (b <= c) {
        console.log(a)
        console.log(b)
        console.log(c)
        console.log("")
        console.log(a)
        console.log(b)
        console.log(c)
    } else {
        console.log(a)
        console.log(c)
        console.log(b)
        console.log("")
        console.log(a)
        console.log(b)
        console.log(c)
    }
}
if (b <= a && b <= c) {
    if (c <= a) {
        console.log(b)
        console.log(c)
        console.log(a)
        console.log("")
        console.log(a)
        console.log(b)
        console.log(c)
    } else {
        console.log(b)
        console.log(a)
        console.log(c)
        console.log("")
        console.log(a)
        console.log(b)
        console.log(c)
    }
}
if (c <= a && c <= b) {
    if (a <= b) {
        console.log(c)
        console.log(a)
        console.log(b)
        console.log("")
        console.log(a)
        console.log(b)
        console.log(c)
    } else {
        console.log(c)
        console.log(b)
        console.log(a)
        console.log("")
        console.log(a)
        console.log(b)
        console.log(c)
    }
}