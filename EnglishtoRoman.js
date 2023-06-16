   
  
function convertEnglish(num) {
    try {
        let i = 0;
        let y = Math.pow(10, num.toString().length);
        let result = "";
        while (i < num.toString().length) {
          let value = num % y;
          y = Math.floor(y / 10);
          i++;
          if (isNaN(num)) {
            throw("Wrong character input");
          }
          if (num > 3999){
            throw("Enter a number between 1 - 3999");
          }
        
          if (value >= 1000 && value <= 1999) {
            result += "M";
          }
          if (value >= 2000 && value <= 2999) {
            result += "MM";
          }
          if (value >= 3000 && value <= 3999) {
            result += "MMM";
          }
          if (value >= 100 && value <= 199) {
            result += "C";
          }
          if (value >= 200 && value <= 299) {
            result += "CC";
          }
          if (value >= 300 && value <= 399) {
            result += "CCC";
          }
          if (value >= 400 && value <= 499) {
            result += "CD";
          }
          if (value >= 500 && value <= 599) {
            result += "D";
          }
          if (value >= 600 && value <= 699) {
            result += "DC";
          }
          if (value >= 700 && value <= 799) {
            result += "DCC";
          }
          if (value >= 800 && value <= 899) {
            result += "DCCC";
          }
          if (value >= 900 && value <= 999) {
            result += "CM";
          }
          if (value >= 10 && value <= 19 && y === 10) {
            result += "X";
          }
          if (value >= 20 && value <= 29 && y === 10) {
            result += "XX";
          }
          if (value >= 30 && value <= 39 && y === 10) {
            result += "XXX";
          }
          if (value >= 40 && value <= 49 && y === 10) {
            result += "XL";
          }
          if (value >= 50 && value <= 59 && y === 10) {
            result += "L";
          }
          if (value >= 60 && value <= 69 && y === 10) {
            result += "LX";
          }
          if (value >= 70 && value <= 79 && y === 10) {
            result += "LXX";
          }
          if (value >= 80 && value <= 89 && y === 10) {
            result += "LXXX";
          }
          if (value >= 90 && value <= 99 && y === 10) {
            result += "XC";
          }
          if (value === 1) {
            result += "I";
            break;
          }
          if (value === 2) {
            result += "II";
            break;
          }
          if (value === 3) {
            result += "III";
            break;
          }
          if (value === 4) {
            result += "IV";
            break;
          }
          if (value === 5) {
            result += "V";
            break;
          }
          if (value === 6) {
            result += "VI";
            break;
          }
          if (value === 7) {
            result += "VII";
            break;
          }
          if (value === 8) {
            result += "VIII";
            break;
          }
          if (value === 9) {
            result += "IX";
            break;
          }
    }
        
        return result;
      
    } catch (e) {
      console.error("Error Converting to English", e);
      return e;
    }
  }
  
  function handleSubmit() {
    const inputString = document.getElementById("roman-input").value;
  
    var p = document.getElementById("result-text");
    p.textContent = convertEnglish(inputString);
  
    return false;
  }
