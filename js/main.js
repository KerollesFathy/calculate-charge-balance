//  first we select the input by id
let theInput = (document.getElementById("input").oninput = function () {
  // take the value of the input and set the formula
  let theResult = Math.floor((this.value / 14) * 10);
  //   store the type of result in the console
  console.log(typeof theResult);
  // select the result by id
  let result = document.getElementById("result");

  // the result validation
  if (isNaN(this.value)) {
    result.textContent = ` يسطا اكتب رقم بلاش غباء`;
  } else {
    result.textContent = `هيوصلك ${theResult}  جنيه `;
  }
  if (this.value >= 50000000) {
    result.textContent = ` بطل لعب يا حبيبي`;
  }
  if (this.value < 0) {
    result.textContent = ` ازي بقي انا عاوز حضرتك تفهني ازي`;
  }
});
