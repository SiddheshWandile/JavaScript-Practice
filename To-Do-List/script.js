const inputBox = document.getElementById("inputbox");
const listCont = document.getElementById("list-container");

addTask = () => {
  if (inputBox.value === "") {
    alert("You must write a note!");
  } else {
    let li = document.createElement("li");
    li.innerText = inputBox.value;
    listCont.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
};

listCont.addEventListener(
  "click",
  (e) => {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);

saveData = () => {
  localStorage.setItem("data", listCont.innerHTML);
};

showData = () =>{
    listCont.innerHTML = localStorage.getItem("data");
}

showData();