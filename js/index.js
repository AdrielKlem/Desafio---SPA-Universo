import { Router } from "./router.js"
import "./nav.js"
import "./body.js"

const router = new Router()

router.add("/", "/pages/home.html")
router.add("/universe", "/pages/universe.html")
router.add("/explore", "/pages/explore.html")
router.add(404, "/pages/404.html")

router.handle()
window.onpopstate = () => router.handle()

const links = document.querySelectorAll("nav a")
links.forEach(link => {
  link.addEventListener("click", (event) => {
    event.preventDefault()
    router.route(event)
  })
})