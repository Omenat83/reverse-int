module.exports = function reverse(n) {
    let result = "";
    if (n < 0) n = n * -1;
    let str = "" + n;

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];
    }

    return Number.parseInt(result);
};
