//обработчик(handler), слушатель()listener, подписчик(subscriber)

const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")
const onClickHandler = (event) => {
    console.log(event)
}

// sm.onclick = onClickHandler
// sm.onclick = null

// sm.addEventListener("click", () => alert("YO"))
// sm.removeEventListener("click", () => alert("YO"))  //ни че не удалит из за анонимности функции

sm.addEventListener("click", onClickHandler)  //так правильно
md.addEventListener("click", onClickHandler)  //так правильно
bg.addEventListener("click", onClickHandler)  //так правильно
// sm.addEventListener("click", () => alert("HEY")) // не затрет верхнюю ф ию
