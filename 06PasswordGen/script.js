const passBox = document.getElementById("password");
const length = 12;

const upper = "QWERTYUIOPASDFGHJKLZXCVBNM";
const lower = "qwertyuiopasdfghjklxcvbnm";
const number = "123456789";
const symbol = "!@#$%^&*()_++=/*-;'][";

const allChar = upper + lower + number + symbol;

createPassword = () => {
  let pasword = "";
  pasword += upper[Math.floor(Math.random() * upper.length)];
  pasword += lower[Math.floor(Math.random() * lower.length)];
  pasword += number[Math.floor(Math.random() * number.length)];
  pasword += symbol[Math.floor(Math.random() * symbol.length)];

  while (length > pasword.length) {
    pasword += allChar[Math.floor(Math.random() * allChar.length)];
  }

  passBox.value = pasword;
};

copyPass = () =>{
    passBox.select();
    document.execCommand("copy");
}