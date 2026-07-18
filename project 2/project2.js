const form = document.querySelector("#bmiForm");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const height = parseInt(document.querySelector("#height").value);
  const weight = parseInt(document.querySelector("#weight").value);
  const results = document.querySelector("#results");

  // Clear previous classes
  results.className = "";

  if (isNaN(height) || height <= 0) {
    results.innerHTML = "Please give a valid height";
    results.className = "underweight";
  } else if (isNaN(weight) || weight <= 0) {
    results.innerHTML = "Please give a valid weight";
    results.className = "underweight";
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    results.innerHTML = `${bmi}`
    // results.innerHTML = <span>`${bmi}`</span>

    if (bmi < 18.6) {
      results.innerHTML = `Your BMI is ${bmi} — You are Underweight`;
      results.className = "underweight";
    } else if (bmi >= 18.6 && bmi <= 24.9) {
      results.innerHTML = `Your BMI is ${bmi} — You are in the Normal Range`;
      results.className = "normal";
    } else {
      results.innerHTML = `Your BMI is ${bmi} — You are Overweight`;
      results.className = "overweight";
    }
  }
});
