// Common Shared Function Here
// function getInputFieldValueById() {
//   console.log("will get value by id");
//   const addMoney = document.getElementById("input-add-money").value;
//   return addMoney;
// }

// function getInputFieldValueById(id){
//     const inputValue = document.getElementById(id).value;
//     return inputValue;
// }

function getInputFieldValueById(id) {
  const inputValue = document.getElementById(id).value;
  const inputToNumber = parseFloat(inputValue);
  return inputToNumber;
}

function getTextFieldValueById(id) {
  const textValue = document.getElementById(id).innerText;
  const textToNumber = parseFloat(textValue);
  return textToNumber;
}

function showHideSectionById(id) {
  document.getElementById("add-money-form").classList.add("hidden");
  document.getElementById("cash-out-form").classList.add("hidden");
  document.getElementById("transactions-history").classList.add("hidden");

  document.getElementById(id).classList.remove("hidden");
}
