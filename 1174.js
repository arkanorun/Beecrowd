for (let i = 0; i < 100; i++) {
    let a = parseFloat(lines[i].split(" "))
    if (a <= 10) {
        console.log(`A[${i}] = ${a.toFixed(1)}`)
    }
}