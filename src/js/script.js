const REGISTER = document.querySelector("#register");
const DAYS = document.querySelector(".days");

let addDay = () => {
  const TODAY = new Date().toLocaleDateString("pt-br").slice(0, -5)
  DAYS.innerHTML += `
  <div class="day">
    <div>${TODAY}</div>
    <input type="checkbox" name="read" class="check">
    <input type="checkbox" name="water" class="check">
    <input type="checkbox" name="gym" class="check">
    <input type="checkbox" name="sleep" class="check">
    <input type="checkbox" name="study" class="check">
    <input type="checkbox" name="healthy" class="check">
  </div>
  `
}

REGISTER.addEventListener("click", addDay)


