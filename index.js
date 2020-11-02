function addBoxShadow(id) {
  const element = document.getElementById(id);
  element.style.boxShadow = "0px 0px 10px 1.5px rgba(0, 0, 0, 0.1)";
}

function removeBoxShadow(id) {
  const element = document.getElementById(id);
  element.style.boxShadow = "";
}
