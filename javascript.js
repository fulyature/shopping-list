const addbuton = document.querySelector("#btn");
const ol = document.querySelector("#list-container");

document.querySelector("#btn").after(ol);

addbuton.addEventListener("click", (e) => {
  if (!input.value) {
    alert("please enter a commet");
  } else {
    const input = document.querySelector("#input");
    const li = document.createElement("li");
    ol.appendChild(li);
    const textLi = document.createTextNode(input.value);
    li.appendChild(textLi);
    input.value = "";
    input.focus();
  }
});
document.querySelector("#input").addEventListener("keydown", (e) => {
  //console.log(e.code);
  //console.log(e.keyCode);
  if (e.code === "Enter") {
    addbuton.click();
  }
});
