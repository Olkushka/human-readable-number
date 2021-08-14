module.exports = function (number) {
    let number1 = ["", "one ", "two ", "three ", "four ", "five ", "six ", "seven ", "eight ", "nine ", "ten ", "eleven ", "twelve ", "thirteen ", "fourteen ", "fifteen ", "sixteen ", "seventeen ", "eighteen ", "nineteen "];
    let number2 = ["", "", "twenty ", "thirty ", "forty ", "fifty ", "sixty ", "seventy ", "eighty ", "ninety "];
    const strNumber = String(number);
    let result;
    if (number < 0) {
        throw new Error('Error - attention negative number');
    }
    if (number === 0) {
        return "zero";
    }
    if (number < 20) {
        result = `${number1[number]}`.trim();
        return result;
    }
    if (number >= 20 && number <= 99) {
        result = `${number2[strNumber[0]]}${number1[strNumber[1]]}`.trim();
        return result;
    }
    if (number >= 100 && +strNumber.substring(1) >= 10 && +strNumber.substring(1) <= 19) {
        result = `${number1[strNumber[0]]}hundred ${number1[+strNumber.substring(1)]}`.trim();
        return result;
    }
    if (number >= 100) {
        result = `${number1[strNumber[0]]}hundred ${number2[strNumber[1]]}${number1[strNumber[2]]}`.trim();
        return result;
    }
};