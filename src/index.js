module.exports = function toReadable (number) {
  
    const ones = ['', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
    const teens = ['ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
    const tens = ['', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];

    function convertLessThan100(num) {
        if (num < 10) {
            return ones[num];
        } else if (num < 20) {
            return teens[num - 10];
        } else {
            const tensPart = tens[Math.floor(num / 10)];
            const onesPart = ones[num % 10];
            return onesPart === '' ? tensPart : tensPart + ' ' + onesPart;
        }
    }

    function convertLessThan1000(num) {
        if (num < 100) {
            return convertLessThan100(num);
        } else {
            const hundredsPart = ones[Math.floor(num / 100)];
            const rest = num % 100;
            return rest === 0 ? hundredsPart + ' hundred' : hundredsPart + ' hundred ' + convertLessThan100(rest);
        }
    }

    if (number === 0) {
        return 'zero';
    } else {
        return convertLessThan1000(number);
    }
}
