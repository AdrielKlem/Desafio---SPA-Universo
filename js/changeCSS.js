const links = document.querySelectorAll("nav a")
const body = document.querySelector("body")

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

    const pageId = link.getAttribute("href").substr(1)    
    console.log(pageId)
    body.id = pageId.length == 0 ? "home" : pageId
    console.log(body)
  })
})