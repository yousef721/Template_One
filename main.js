const icon = document.querySelector(".icon")
const links = document.querySelector("ul")

icon.addEventListener("click", () => {
    links.classList.toggle("active")
})
