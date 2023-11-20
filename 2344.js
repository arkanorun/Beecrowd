a = Number(lines[0].split(" "))

if (a === 0) {
    console.log("E")
}
if (a > 1 && a <= 35) {
    console.log("D")
}
if (a > 35 && a <= 60) {
    console.log("C")
}
if (a > 60 && a <= 85) {
    console.log("B")
}
if (a > 85 && a <= 100) {
    console.log("A")
}