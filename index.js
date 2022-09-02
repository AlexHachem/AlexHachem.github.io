function convertRoman(inputString) {
  try {
    result = 0;
    arr = [];
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i] == "I") arr.push(1);
      if (inputString[i] == "V") arr.push(5);
      if (inputString[i] == "X") arr.push(10);
      if (inputString[i] == "L") arr.push(50);
      if (inputString[i] == "C") arr.push(100);
      if (inputString[i] == "D") arr.push(500);
      if (inputString[i] == "M") arr.push(1000);
    }

    for (let i = 0; i < arr.length; i++) {
      result += arr[i];
      if (i < arr.length - 1) {
        if (arr[i] == 1 && arr[i + 1] == 5) result -= 2;
        if (arr[i] == 1 && arr[i + 1] == 10) result -= 2;
        if (arr[i] == 10 && arr[i + 1] == 50) result -= 20;
        if (arr[i] == 10 && arr[i + 1] == 100) result -= 20;
        if (arr[i] == 100 && arr[i + 1] == 500) result -= 200;
        if (arr[i] == 100 && arr[i + 1] == 1000) result -= 200;
      }
    }

    return result;
  } catch (e) {
    console.error("Error Converting to Roman", e);
    return false;
  }
}

function handleSubmit() {
  const inputString = document.getElementById("roman-input").value;

  var p = document.getElementById("result-text");
  p.textContent = convertRoman(inputString);

  return false;
}
