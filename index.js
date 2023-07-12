var countdown;
var countDownDate;

function startCountdown() {
    var hoursInput = document.getElementById("hoursInput").value;
    var minutesInput = document.getElementById("minutesInput").value;
    var secondsInput = document.getElementById("secondsInput").value;

    var hours = hoursInput !== "" ? parseInt(hoursInput) : 0;
    var minutes = minutesInput !== "" ? parseInt(minutesInput) : 0;
    var seconds = secondsInput !== "" ? parseInt(secondsInput) : 0;

    if (isNaN(hours) || isNaN(minutes) || isNaN(seconds) || hours < 0 || minutes < 0 || seconds < 0) {
        alert("Vui lòng nhập các giá trị hợp lệ!");
        return;
    }

    var totalSeconds = (hours * 3600) + (minutes * 60) + seconds;

    if (totalSeconds === 0) {
        alert("Vui lòng nhập một thời gian khác 0!");
        return;
    }

    document.getElementById("inputContainer").classList.add("hidden");
    document.getElementById("countdown").classList.remove("hidden");

    countDownDate = new Date().getTime() + (totalSeconds * 1000);

    countdown = setInterval(function() {
        var now = new Date().getTime();
        var distance = countDownDate - now;

        var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((distance % (1000 * 60)) / 1000);

        hours = hours < 0 ? 0 : hours;
        minutes = minutes < 0 ? 0 : minutes;
        seconds = seconds < 0 ? 0 : seconds;

        document.getElementById("countdown").innerHTML = hours + ":" + minutes + ":" + seconds  ;

        if (distance < 0) {
            clearInterval(countdown);
            // document.getElementById("countdown").innerHTML = "Đếm ngược đã kết thúc!";
            alert("Đếm ngược đã kết thúc!");

        }
    }, 1000);
}