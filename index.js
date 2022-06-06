// Write your code here!
const main = document.getElementsByTagName("main")
main[0].remove()
const newHeader = document.createElement("h1")
newHeader.setAttribute("id","victory")

newHeader.textContent = "YOUR-NAME is the champion"