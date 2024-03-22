const input = document.querySelector("#input");
const button = document.querySelector("#button");
const ul = document.querySelector("#ul");

button.addEventListener("click", () => {
  const text = input.value.trim();

  if (!text) {
    alert("입력해주세요");
    return;
  }

  const item = document.createElement("li");
  item.classList.add("item");

  const itemText = document.createElement("span");
  itemText.innerText = text;

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = "삭제하기";
  deleteBtn.classList.add("deleteBtn");

  const check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("toggle");

  deleteBtn.addEventListener("click", () => {
    item.remove();
  });

  item.appendChild(check);
  item.appendChild(itemText);
  item.appendChild(deleteBtn);

  ul.appendChild(item);

  input.value = "";
  input.focus();

  check.addEventListener("change", () => {
    if (check.checked) {
      itemText.style.textDecoration = "line-through";
    } else {
      itemText.style.textDecoration = "none";
    }
  });
});
