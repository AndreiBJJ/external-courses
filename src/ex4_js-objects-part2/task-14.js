function randomRoundInUserDiapason(min, max) {
    let minimum = Math.ceil(min);
    let maximum = Math.floor(max);
    return Math.floor(Math.random() * (maximum - minimum) + minimum);
}
module.exports = randomRoundInUserDiapason;