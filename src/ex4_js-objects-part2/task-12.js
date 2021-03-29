function sumWithRound(value1, value2) {
    return Math.ceil((value1+value2) * 1000) / 1000;
}
module.exports = sumWithRound;