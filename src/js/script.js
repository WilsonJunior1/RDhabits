const form = document.querySelector(".form")
const lib = new NLWSetup(form)
const register = document.querySelector("#register")

let save = () => {
  localStorage.setItem("habits@data", JSON.stringify(lib.data))
}

let style = () => {
  let day = document.querySelectorAll(".day > input")
  day.forEach(element => {
    element.classList.add("check")
});
}

let add = () => {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5)
  const dayExists = lib.dayExists(today)

  if(dayExists){
    alert("🔴 Dia já adicionado.")
  }
  else{
    lib.addDay(today)
    style()
  }  
}

register.addEventListener("click", add)
form.addEventListener("change", save)

const data = JSON.parse(localStorage.getItem("habits@data")) || {}
lib.setData(data)
lib.load()
style()
















