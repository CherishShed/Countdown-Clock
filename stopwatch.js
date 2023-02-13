var days = 0;
var hours = 0
var minutes = 0;;
var seconds = 0;
var futureTime = 0;

var start_timer = true;
var differenceInSecs = 0;
var difference = 0;
var stopClick = 0;

// var imag = 5;
function getValues() {
    let days_given = Number($("#day_many").val()) * (1000 * 60 * 60 * 24);
    let hours_given = Number($("#hours_many").val()) * (1000 * 60 * 60);
    let mins_given = Number($("#mins_many").val()) * (1000 * 60);
    let secs_given = Number($("#secs_many").val()) * (1000);
    futureTime = (new Date(Date.now()).getTime()) + (days_given + hours_given + mins_given + secs_given);

}
function stopwatchCalc() {
    if (start_timer) {
        resetTrans();
        getValues();
        start_timer = false;
    }
    var currentTime = new Date(Date.now()).getTime();

    console.log(futureTime);
    console.log(currentTime);

    difference = (futureTime - currentTime);
    console.log(difference);
    differenceInSecs = Math.floor(difference / 1000);

    days = Math.floor(difference / (1000 * 60 * 60 * 24));
    hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    seconds = Math.round((difference % (1000 * 60)) / (1000));


}

function result(d, h, m, s) {
    if (difference > 0) {
        $("#days").text(d);
        $("#hours").text(h);
        $("#mins").text(m);
        $("#secs").text(s);
    }
    else {
        $("#secs").text(0);
    }

}


$(".stop").click(function () {
    stopClock();
    stopClick++;
    start_timer = true;
    if (stopClick > 1) {
        resetTrans();
        result(0, 0, 0, 0);
    }
})

function resetTrans() {
    $(".firstChild").css(
        {
            "transform": "rotate(0deg)",
            "transition": "transform 0s"
        }
    );

    $(".secondChild").css(
        {
            "transform": "rotate(0deg)",
            "transition": "transform 0s"
        }
    );

    $(".topChild").css(
        {
            "opacity": "0",
            "transition": "opacity 0s " + 0 + "s"
        }
    );
}
$(".start").click(function () {
    stopClick = 0;
    if (start_timer) {
        stopwatchCalc();
        result(days, hours, minutes, seconds);

        $(".firstChild").css(
            {
                "transform": "rotate(180deg)",
                "transition": "transform " + (differenceInSecs / 2) + "s linear"
            }
        );

        $(".secondChild").css(
            {
                "transform": "rotate(360deg)",
                "transition": "transform " + differenceInSecs + "s linear"
            }
        );

        $(".topChild").css(
            {
                "opacity": "0",
                "transition": "opacity 0s " + (differenceInSecs / 2) + "s"
            }
        );
        setInterval(function () {
            if (difference >= 1) {
                stopwatchCalc();
                result(days, hours, minutes, seconds);
            }
            else {

            }
        }, 1000);

    }
}
)

function stopClock() {
    difference = 0;
}




