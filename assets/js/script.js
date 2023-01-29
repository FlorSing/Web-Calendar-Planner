//top header date and time

$('#currentDay').addClass('lead').text("Today's date and current time is:");

//display the actual running time on top
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, Do MMMM YYYY, hh a'));
};

$(document).ready(function(){
    datetime = $('#datetime')
    update();
    setInterval(update, 1000);
});

//determine time blocks for past present future 

var hour09 = $("#09");
textArea09 = $('<textarea>').addClass('textarea').appendTo(hour09);

// var storeText09 = localStorage.setItem('textArea09', textArea09.val());
// hour09.text(localStorage.getItem('textArea09'));
// console.log(textArea09.val());