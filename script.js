function showit(page) {
  console.log(page)
  document.getElementById("home").style.display = "none"
  document.getElementById("about").style.display = "none"
  document.getElementById("gallery").style.display = "none"
  document.getElementById("invest").style.display = "none"
  document.getElementById("testimonials").style.display = "none"
  document.getElementById("contact").style.display = "none"

  document.getElementById(page).style.display = "block"
}
