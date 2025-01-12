
const start = document.getElementById("start")
const stop = document.getElementById("stop")
// time function
function time() {
    const hour = document.getElementById("hour")
    const minut = document.getElementById("minut")
    const secund = document.getElementById("secund")
    if (hour.value > 0 && minut.value > 0 && secund.value == 0) {
        minut.value = minut.value - 1
        secund.value = 59
        start.style.display = "none"
        stop.style.display = "flex"
    } else if (hour.value > 0 && minut.value == 0 && secund.value == 0) {
        hour.value = hour.value - 1
        minut.value = 59
        secund.value = 59
        start.style.display = "none"
        stop.style.display = "flex"
    } else if (hour.value == 0 && minut.value == 0 && secund.value > 0) {
        secund.value = secund.value - 1
        start.style.display = "none"
        stop.style.display = "flex"
    } else if (hour.value == 0 && minut.value > 0 && secund.value > 0) {
        secund.value = secund.value - 1
        start.style.display = "none"
        stop.style.display = "flex"
    } else if (hour.value > 0 && minut.value == 0 && secund.value > 0) {
        secund.value = secund.value - 1
        start.style.display = "none"
        stop.style.display = "flex"
    } else if (hour.value > 0 && minut.value && secund.value > 0) {
        secund.value = secund.value - 1
        start.style.display = "none"
        stop.style.display = "flex"
    } else if (hour.value == 0 && minut.value > 0 && secund.value == 0) {
        minut.value = minut.value - 1
        secund.value = 59
        start.style.display = "none"
        stop.style.display = "flex"
    } else if (hour.value == 0 && minut.value == 0 && secund.value == 0) {
        start.style.display = "flex"
        stop.style.display = "none"
        clearInterval(time)
    }

}

start.addEventListener("click", () => {
    start.style.display = "none"
    stop.style.display = "flex"
    let a = setInterval(time, 1000)
    stop.addEventListener("click", () => {
        start.style.display = "flex"
        stop.style.display = "none"
        clearInterval(a)

    })
})
