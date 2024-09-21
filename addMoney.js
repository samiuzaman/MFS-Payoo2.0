document
  .getElementById("add-money-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const addMoney = getInputFieldValueById("input-add-money");
    const pinNumber = getInputFieldValueById("input-pin-number");
    if (isNaN(addMoney)) {
      return
    }
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      const newBalance = balance + addMoney;
      document.getElementById("account-balance").innerText = newBalance;
      // Add to Transactio History
      const p = document.createElement("p");
      p.innerText = `Cash In: ${addMoney} Tk. Balance: ${newBalance} Tk.`;
      document.getElementById("transactions-container").appendChild(p);
    } else {
      alert("Failed to add money!");
    }
  });
