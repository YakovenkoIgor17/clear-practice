
function countdown(dateEnd) {
	var timer, days, hours, minutes, seconds;

	dateEnd = new Date(dateEnd);
	dateEnd = dateEnd.getTime();

	if (isNaN(dateEnd)) {
		return;
	}

	timer = setInterval(calculate, 1000);

	function calculate() {
		var dateStart = new Date();
		var dateStart = new Date(dateStart.getUTCFullYear(),
			dateStart.getUTCMonth(),
			dateStart.getUTCDate(),
			dateStart.getUTCHours(),
			dateStart.getUTCMinutes(),
			dateStart.getUTCSeconds());
		let timeRemaining = parseInt((dateEnd - dateStart.getTime()) / 1000)

		if (timeRemaining >= 0) {
			days = parseInt(timeRemaining / 86400);
			timeRemaining = (timeRemaining % 86400);
			hours = parseInt(timeRemaining / 3600);
			timeRemaining = (timeRemaining % 3600);
			minutes = parseInt(timeRemaining / 60);
			timeRemaining = (timeRemaining % 60);
			seconds = parseInt(timeRemaining);


			document.getElementById("days").innerHTML = parseInt(days, 10);
			document.getElementById("hours").innerHTML = ("0" + hours).slice(-2);
			document.getElementById("minutes").innerHTML = ("0" + minutes).slice(-2);
			document.getElementById("seconds").innerHTML = ("0" + seconds).slice(-2);
		} else {
			return;
		}
	}

	function display(days, hours, minutes, seconds) { }
}




countdown('07/25/2021 02:00:00 AM');

$(document).ready(function () {
	$('.header-menu__icon').click(function (event) {
		$('.header-menu__icon, .header-menu').toggleClass('active');
		$('body').toggleClass('lock');
	});
});

$(document).ready(function () {
	$('.slider').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		slidesToScroll: 1,
	});
});