document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const inputAddMoney = document.getElementById("input-add-money").value;
    const inputPinNumber = document.getElementById("input-pin-number").value;

    if (inputPinNumber === "1234") {
      const accountBalance =
        document.getElementById("account-balance").innerText;
      const newBalance = parseFloat(accountBalance) + parseFloat(inputAddMoney);
      document.getElementById("account-balance").innerText = newBalance;
    } else {
      alert("Failed to add money!");
    }
  });
