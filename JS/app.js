const start = document.getElementById("start");
const stop = document.getElementById("stop");
let intervalId; // Global intervalId

// time function
function time() {
    const hour = document.getElementById("hour");
    const minut = document.getElementById("minut");
    const secund = document.getElementById("secund");

    // Agar sekunda tugagan bo'lsa
    if (secund.value > 0) {
        secund.value--;
    } 
    // Agar sekund nolga teng bo'lsa va minutlar bor bo'lsa
    else if (minut.value > 0) {
        minut.value--;
        secund.value = 59;
    } 
    // Agar minut ham nol bo'lsa va soatlar bor bo'lsa
    else if (hour.value > 0) {
        hour.value--;
        minut.value = 59;
        secund.value = 59;
    } 
    // Agar hamma nol bo'lsa
    else {
        start.style.display = "flex";
        stop.style.display = "none";
        clearInterval(intervalId);
    }
}

// Taymerni ishga tushirish
start.addEventListener("click", () => {
    start.style.display = "none";
    stop.style.display = "flex";
    intervalId = setInterval(time, 1000); // Global intervalId'ni to'g'ri aniqlash

    stop.addEventListener("click", () => {
        start.style.display = "flex";
        stop.style.display = "none";
        clearInterval(intervalId); // Global intervalId'dan foydalanish
    });
});
