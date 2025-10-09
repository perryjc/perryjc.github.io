function numberToWords(number,capital=false) {
    if (number === 0) return capital ? "Zero" : "zero";
  
    if (number < 0 || number > 1000000) {
        throw new Error("Number out of range. Please enter a number between 0 and 1,000,000.");
    }
  
    const ones = [
        '', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'
    ];
  
    const teens = [
        'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'
    ];
  
    const tens = [
        '', '', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'
    ];
  
    const thousands = [
        '', 'thousand'
    ];
  
    function convertHundreds(num) {
        let str = '';
  
        if (num >= 100) {
            str += ones[Math.floor(num / 100)] + ' hundred';
            num %= 100;
            if (num > 0) str += ' ';
        }
  
        if (num >= 20) {
            str += tens[Math.floor(num / 10)];
            num %= 10;
            if (num > 0) str += '-' + ones[num];
        } else if (num >= 10) {
            str += teens[num - 10];
        } else if (num > 0) {
            str += ones[num];
        }
  
        return str;
    }
  
    let words = '';
  
    if (number >= 1000) {
        words += convertHundreds(Math.floor(number / 1000)) + ' thousand';
        number %= 1000;
        if (number > 0) words += ' ';
    }
  
    words += convertHundreds(number);
  
    if (capital){
        return words[0].toUpperCase()+words.slice(1)
    } else {
        return words.trim();
    }
    
  }  