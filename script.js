const name = document.querySelector("#name");
const email = document.querySelector("#email");
const number = document.querySelector("#phone");
const btn = document.querySelector("button");
const tBody = document.querySelector("tbody");
let no = 0;

btn.addEventListener("click", (e) => {
  e.preventDefault();
  no++;
  const tr = document.createElement("tr");
  const trNo = document.createElement("td");
  const trName = document.createElement("td");
  const trEmail = document.createElement("td");
  const trNumber = document.createElement("td");

  trNo.textContent = no;
  trName.textContent = name.value;
  trEmail.textContent = email.value;
  trNumber.textContent = number.value;

  tBody.append(tr);
  tr.append(trNo);
  tr.append(trName);
  tr.append(trEmail);
  tr.append(trNumber);

  name.value = "";
  email.value = "";
  number.value = "";
});
