
function metricCalculateBMI(height, weight) {
    try {
        bmi = weight/(height*height)
        return bmi.toFixed(1);
      
    } catch (e) {
      console.error("Error Converting to English", e);
      return e;
    }
  }
  
function imperialCalculateBMI(height, weight) {
    try {
        bmi = weight*703/(height*height)
        return bmi.toFixed(1);
      
    } catch (e) {
      console.error("Error Converting to English", e);
      return e;
    }
  }
  
  function handleSubmit() {
    const height = document.getElementById("height").value;
    const weight = document.getElementById("weight").value
    var p = document.getElementById("result-text");
    if (document.getElementById("metric").checked){
        p.textContent = metricCalculateBMI(height/100, weight);
    }
    if (document.getElementById("imperial").checked){
        p.textContent = imperialCalculateBMI(height, weight);
    }
    return false;
  }
  function handleChoice() {
    var height = document.getElementsByName("height")[0];
    var weight = document.getElementsByName("weight")[0];
    var p = document.getElementById("result-text");
    if (document.getElementById("imperial").checked){
        height.value = '';
        height.placeholder = "Inches";
        weight.value = '';
        weight.placeholder = "Pounds"
        p.textContent = ''
        
    }
    if (document.getElementById("metric").checked){
        height.value = '';
        height.placeholder = "CM";
        weight.value = '';
        weight.placeholder = "Kilos"
        p.textContent = ''

    }
  }
