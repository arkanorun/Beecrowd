let [a, b] = lines.shift().split(" ")
a = Number(a)
b = Number(b)
c = 1
d = ""
while (b >= c) {
    d += `${c} `
    if ((c % a) === 0) {
        console.log(d.trim())
        d = ""
    }
    c++
}