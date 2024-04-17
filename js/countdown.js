$(document).ready(function() {
    const countdownTimeInSeconds = 43200; // Ví dụ: 60 giây
    const showElement = $("#show");

    function displayTimeRemaining(timeInSeconds) {
        const hours = Math.floor(timeInSeconds / 3600);
        const minutes = Math.floor((timeInSeconds % 3600) / 60);
        const seconds = timeInSeconds % 60;

        const displayString = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        
        showElement.html(displayString);
    }

    function countdown() {
        let remainingTime = countdownTimeInSeconds;
        displayTimeRemaining(remainingTime);

        const interval = setInterval(() => {
            remainingTime--;
            displayTimeRemaining(remainingTime);

            if (remainingTime <= 0) {
                clearInterval(interval);
                showElement.html("Đã hết thời gian!");
            }
        }, 1000);
    }

    countdown();
});