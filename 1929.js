let [a, b, c, d] = lines.shift().split(" ")

a = Number(a)
b = Number(b)
c = Number(c)
d = Number(d)

if ((a + b > c && a + c > b && b + c > a) || (a + b > d && a + d > b &&
    b + d > a) || (a + c > d && a + d > c && c + d > a) || (b + c > d && b + d > c && c + d > b)) {
    console.log("S")
} else {
    console.log("N")
}