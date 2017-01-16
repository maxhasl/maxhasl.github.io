jQuery(function () {
    var countdown = jQuery('.countdown');
    if (jQuery(document).scrollTop() + jQuery(window).height() > jQuery(countdown).offset().top && jQuery(document).scrollTop() - jQuery(countdown).offset().top < jQuery(countdown).height()) {

        var day = jQuery('.clock__days__number');
        var hour = jQuery('.clock__hours__number');
        var minute = jQuery('.clock__minutes__number');
        var second = jQuery('.clock__seconds__number');
        var dayText = [];
        var hourText = [];
        var minuteText = [];
        var secondText = [];

        for(var l = 0; l < day.length; l++){
            dayText[l] = parseInt(jQuery(day[l]).text());
            hourText[l] = parseInt(jQuery(hour[l]).text());
            minuteText[l] = parseInt(jQuery(minute[l]).text());
            secondText[l] = parseInt(jQuery(second[l]).text());
        }
        console.log('day ' + dayText);
        console.log('hour ' + hourText);
        console.log('minute ' + minuteText);
        console.log('seconds ' + secondText);

        for(var i = 0; i < day.length; i++){
            timer(day[i], dayText[i], hour[i], hourText[i], minute[i],  minuteText[i], second[i], secondText[i]);
        }

        function timer(day, dayText, hour, hourText, minute, minuteText, second, secondText) {
            var timer = setInterval(function () {
                if (dayText == 0 && hourText == 0 && minuteText == 0 && secondText == 0) {
                    jQuery(day).text('00 ');
                    jQuery(hour).text('00 ');
                    jQuery(minute).text('00 ');
                    jQuery(second).text('00 ');
                    clearInterval(timer);
                } else {
                    if (secondText == 0) {
                        if (minuteText == 0) {
                            if (hourText == 0) {
                                dayText--;
                                if (dayText < 10) {
                                    jQuery(day).text('0' + dayText + ' ');
                                } else {
                                    jQuery(day).text(dayText + ' ');
                                }
                                hourText = 23;
                                jQuery(hour).text(hourText + ' ');
                            } else {
                                hourText--;
                                if (hourText < 10) {
                                    jQuery(hour).text('0' + hourText + ' ');
                                } else {
                                    jQuery(hour).text(hourText + ' ');
                                }
                            }
                            minuteText = 59;
                            jQuery(minute).text(minuteText + ' ');
                        } else {
                            minuteText--;
                            if (minuteText < 10) {
                                jQuery(minute).text('0' + minuteText + ' ');
                            } else {
                                jQuery(minute).text(minuteText + ' ');
                            }
                        }
                        secondText = 59;
                        jQuery(second).text(secondText + ' ');
                    } else {
                        secondText--;
                        if (secondText < 10) {
                            jQuery(second).text('0' + secondText + ' ');
                        } else {
                            jQuery(second).text(secondText + ' ');
                        }
                    }
                }
            }, 1000)
        }
    }
});
