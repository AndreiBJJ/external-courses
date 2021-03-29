function Calculator() {
    result = 0;
    function add(x = 0) {
        if (!isNaN(x)) result += x;

        return add;
    }

    function multiply(x = 1) {
        if (!isNaN(x)) result *= x;

        return multiply;
    }
    
    function divide(x = 1) {
        if (!isNaN(x) && (x !== 0) && isFinite(x)) result /= x;

        return divide;
    }

    function subtract(x = 0) {
        if (!isNaN(x)) result -= x;

        return subtract;
    }
    function getResult() {
        return result;
    }

    function reset() {
        result = 0;

        return result;
    }

    return {
        add,
        multiply,
        divide,
        subtract,
        getResult,
        reset,
    }
}
module.exports = new Calculator();