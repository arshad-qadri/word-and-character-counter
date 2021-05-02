const inpBox = document.getElementById("inpBox");
const char = document.getElementById("char");
const word = document.getElementById("word");
const btn = document.getElementById("btn");
let val = "";

const getInpVal = () => {
  if (!val) {
    char.style.display = "none";
    word.style.display = "none";
  } else {
    char.style.display = "block";
    word.style.display = "block";
    char.innerText = `Character : ${val.length}`;
    word.innerText = `Word : ${val.match(/\w+/g).length}`;
  }
};

inpBox.addEventListener("input", e => {
  val = e.target.value;
  getInpVal();
});
btn.addEventListener("click", () => {
  location.reload();
});
getInpVal();
