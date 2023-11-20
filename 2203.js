while (lines[0]) {
    let [xf, yf, xi, yi, vi, r1, r2] = lines.shift().split(" ")
    xf = Number(xf)
    yf = Number(yf)
    xi = Number(xi)
    yi = Number(yi)
    vi = Number(vi)
    r1 = Number(r1)
    r2 = Number(r2)

    let dist = parseFloat(Math.sqrt((Math.pow((xi - xf), 2) + Math.pow((yi - yf), 2))))


    dist = dist + (vi * 1.5)



    if (dist <= (r1 + r2)) {
        console.log("Y")
    } else {
        console.log("N")
    }
}