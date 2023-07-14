var countdown;
var countDownDate;

// bật toàn màn hình
function toggleFullscreen() {
    if (document.documentElement.requestFullscreen) {
        document.documentElement.requestFullscreen();
    } else if (document.documentElement.mozRequestFullScreen) { // Firefox
        document.documentElement.mozRequestFullScreen();
    } else if (document.documentElement.webkitRequestFullscreen) { // Chrome, Safari, Opera
        document.documentElement.webkitRequestFullscreen();
    } else if (document.documentElement.msRequestFullscreen) { // IE/Edge
        document.documentElement.msRequestFullscreen();
    }
}

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


    alert("Nên đặt ngang màn hình để có trải nghiệm tốt nhất! Xin cảm ơn");

    // Bật chức năng toàn màn hình khi đếm ngược
    toggleFullscreen();
    keepAliveInterval();


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

        // format Time = hh:mm:ss
        // var formattedTime = (hours < 10 ? "0" + hours : hours) + ":" +
        //     (minutes < 10 ? "0" + minutes : minutes) + ":" +
        //     (seconds < 10 ? "0" + seconds : seconds);

        // document.getElementById("countdown").innerHTML = formattedTime  ;

        if (distance < 0) {
            clearInterval(countdown);
            // document.getElementById("countdown").innerHTML = "Đếm ngược đã kết thúc!";
            alert("Đếm ngược đã kết thúc!");

        }
    }, 1000);




// // Gửi yêu cầu Keep-Alive: giữ màn hình luôn sáng, không bị tắt khi đếm
//     function sendKeepAlive() {
//         fetch('keepalive.json', {
//             method: 'POST',
//             body: JSON.stringify(keepAliveData)
//         })
//             .then(function(response) {
//                 if (response.ok) {
//                     console.log('Yêu cầu Keep-Alive thành công.');
//                 } else {
//                     console.log('Yêu cầu Keep-Alive thất bại.');
//                 }
//             })
//             .catch(function(error) {
//                 console.log('Lỗi khi gửi yêu cầu Keep-Alive: ', error);
//             });
//     }
//
// // Gọi sendKeepAlive mỗi 15 giây
//     function keepAliveInterval() {setInterval(sendKeepAlive, 15000);}
}