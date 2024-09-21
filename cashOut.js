document
  .getElementById("cash-out-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    const cashOut = getInputFieldValueById("cash-out-amount");
    const pinNumber = getInputFieldValueById("cash-out-pin");
    if (isNaN(cashOut)) {
      return;
    }
    if (pinNumber === 1234) {
      const balance = getTextFieldValueById("account-balance");
      if (cashOut > balance) {
        alert("You do not have enough money!");
        return;
      }
      const newBalance = balance - cashOut;
      document.getElementById("account-balance").innerText = newBalance;
      // Add to Transactio History
      const div = document.createElement("div");
      div.classList.add("bg-yellow-300");
      div.innerHTML = `
      <h4 class="text-2xl font-bold">Cash Out</h4>
      <p>${cashOut} Tk withdraw. Balance ${newBalance} Tk.</p>
      `;
      document.getElementById("transactions-container").appendChild(div);
    } else {
      alert("No money for you...DGM!");
    }
  });
