function convertRoman(inputString) {
  try {
    result = 0;
    arr = [];
    for (let i = 0; i < inputString.length; i++) {
      if (inputString[i].toLowerCase() == "i") arr.push(1);
      else if (inputString[i].toLowerCase() == "v") arr.push(5);
      else if (inputString[i].toLowerCase() == "x") arr.push(10);
      else if (inputString[i].toLowerCase() == "l") arr.push(50);
      else if (inputString[i].toLowerCase() == "c") arr.push(100);
      else if (inputString[i].toLowerCase() == "d") arr.push(500);
      else if (inputString[i].toLowerCase() == "m") arr.push(1000);
      else throw("Wrong Character Input");
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
    return e;
  }
}

function handleSubmit() {
  const inputString = document.getElementById("roman-input").value;

  var p = document.getElementById("result-text");
  p.textContent = convertRoman(inputString);

  return false;
}
