const Vaqt = document.getElementById("vaqt")
const Minut = document.getElementById("minut")
const Sekund = document.getElementById("sekund")
function time() {
    const soat = new Date()
    Sekund.style = "--rotation:" + soat.getSeconds() * 6
    Minut.style = "--rotation:" + soat.getMinutes() * 6
    Vaqt.style = "--rotation:" + soat.getHours() * 30
}
setInterval(time, 1000)

