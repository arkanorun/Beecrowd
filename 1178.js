let X = parseFloat(lines.shift()).toFixed(4);



console.log("N[0] = " + X);

for (var i = 1; i < 100; i++) {
    X = X / 2;
    X = X.toFixed(6);
    if (i !== 5) {
        console.log("N[" + i + "] = " + formatNumber(X));
    } else {
        console.log("N[" + i + "] = " + (formatNumber(X) - 0.0001));
    }
}
function formatNumber(num) {
    var decimalValues = (num.toString().split('.')[1]);
    if (decimalValues[4] <= 5 && decimalValues[5] <= 5 && decimalValues[6] <= 5) {
        return (Math.floor(num)).toString() + '.' + decimalValues[0] + decimalValues[1] + decimalValues[2] + decimalValues[3];
    }
    return parseFloat(num).toFixed(4);
}