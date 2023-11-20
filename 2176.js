let a = lines[0].split(" ").toString()
let count = 0
for (let i = 0; i < a.length; i++) {
    let b = a[i]
    if (b === "1") {
        count++
    }
}

if (count % 2 !== 0) {
    console.log(a + 1)
} else {
    console.log(a + 0)
}