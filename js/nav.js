const links = document.querySelectorAll("nav a")
console.log(links)

links.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault()

    links.forEach(link => {
        link.style.color = "#8d8d9a"
        link.style.fontWeight = "400"
    })

    link.style.fontWeight = "700"
    link.style.color = "#fff"
  })
})