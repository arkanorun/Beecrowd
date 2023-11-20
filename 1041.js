lines = lines.shift().split(" ")

let x = parseFloat(lines[0])
let y = parseFloat(lines[1])

if (x === 0 && y === 0) {

    console.log("Origem")

} else if (x === 0 && y !== 0) {

    console.log("Eixo Y")

} else if (x !== 0 && y === 0) {

    console.log("Eixo X")

} else if (x > 0) {
    if (y > 0) {
        console.log("Q1")
    } else if (y < 0) {
        console.log("Q4")
    }
} else if (x < 0) {
    if (y > 0) {
        console.log("Q2")
    } else if (y < 0) {
        console.log("Q3")
    }
}