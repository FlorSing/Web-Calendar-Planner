//top header date and time

$('#currentDay').text("Today's date is:");

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

//determine time blocks for past present future and setup scheduler

var containerList = $(".container");
var timeCurrent = moment()
var timeSlot = moment().format('hh a');

time09 = moment(moment().hour('09'));
time10 = moment(moment().hour('10'));
time11 = moment(moment().hour('11'));
time12 = moment(moment().hour('12'));
time13 = moment(moment().hour('13'));
time14 = moment(moment().hour('14'));
time15 = moment(moment().hour('15'));
time16 = moment(moment().hour('16'));
time17 = moment(moment().hour('17'));

var timeSlot09 = moment().hour('09').format('hh a');
var timeSlot10 = moment().hour('10').format('hh a');
var timeSlot11 = moment().hour('11').format('hh a');
var timeSlot12 = moment().hour('12').format('hh a');
var timeSlot01 = moment().hour('13').format('hh a');
var timeSlot02 = moment().hour('14').format('hh a');
var timeSlot03 = moment().hour('15').format('hh a');
var timeSlot04 = moment().hour('16').format('hh a');
var timeSlot05 = moment().hour('17').format('hh a');

listEntry09 = $("<li>").addClass('row time-block hour').text(timeSlot09).appendTo(containerList);
listEntry10 = $("<li>").addClass('row time-block hour').text(timeSlot10).appendTo(containerList);
listEntry11 = $("<li>").addClass('row time-block hour').text(timeSlot11).appendTo(containerList);
listEntry12 = $("<li>").addClass('row time-block hour').text(timeSlot12).appendTo(containerList);
listEntry01 = $("<li>").addClass('row time-block hour').text(timeSlot01).appendTo(containerList);
listEntry02 = $("<li>").addClass('row time-block hour').text(timeSlot02).appendTo(containerList);
listEntry03 = $("<li>").addClass('row time-block hour').text(timeSlot03).appendTo(containerList);
listEntry04 = $("<li>").addClass('row time-block hour').text(timeSlot04).appendTo(containerList);
listEntry05 = $("<li>").addClass('row time-block hour').text(timeSlot05).appendTo(containerList);

var textArea09 = $('<textarea>').addClass('textarea').appendTo(listEntry09);
var textArea10 = $('<textarea>').addClass('textarea').appendTo(listEntry10);
var textArea11 = $('<textarea>').addClass('textarea').appendTo(listEntry11);
var textArea12 = $('<textarea>').addClass('textarea').appendTo(listEntry12);
var textArea01 = $('<textarea>').addClass('textarea').appendTo(listEntry01);
var textArea02 = $('<textarea>').addClass('textarea').appendTo(listEntry02);
var textArea03 = $('<textarea>').addClass('textarea').appendTo(listEntry03);
var textArea04 = $('<textarea>').addClass('textarea').appendTo(listEntry04);
var textArea05 = $('<textarea>').addClass('textarea').appendTo(listEntry05);


if (timeCurrent > time09){
    console.log('past')
    textArea09.addClass('past');}
else if (timeCurrent === time09){
    console.log('future')
    textArea09.addClass('future');}
else {console.log('present')
    textArea09.addClass('present')};

if (timeCurrent > timeSlot10){
    textArea10.addClass('past');}
else if (timeCurrent === timeSlot10){
    textArea10.addClass('future');}
else {textArea10.addClass('present')};

if (timeCurrent > timeSlot11){
    textArea11.addClass('past');}
else if (timeCurrent === timeSlot11){
    textArea11.addClass('future');}
else {textArea11.addClass('present')};

if (timeCurrent > timeSlot12){
    textArea12.addClass('past');}
else if (timeCurrent === timeSlot12){
    textArea12.addClass('future');}
else {textArea12.addClass('present')};

if (timeCurrent > timeSlot01){
    textArea01.addClass('past');}
else if (timeCurrent === timeSlot01){
    textArea11.addClass('future');}
else {textArea01.addClass('present')};

if (timeCurrent > timeSlot02){
    textArea02.addClass('past');}
else if (timeCurrent === timeSlot02){
    textArea02.addClass('future');}
else {textArea02.addClass('present')};

if (timeCurrent > timeSlot03){
    textArea03.addClass('past');}
else if (timeCurrent === timeSlot03){
    textArea03.addClass('future');}
else {textArea03.addClass('present')};

if (timeCurrent > timeSlot04){
    textArea04.addClass('past');}
else if (timeCurrent === timeSlot04){
    textArea04.addClass('future');}
else {textArea04.addClass('present')};

if (timeCurrent > time17){
    console.log('past')
    textArea05.addClass('past');}
else if (timeCurrent === time17){
    console.log('future')
    textArea05.addClass('future');}
else {console.log('present')
    textArea05.addClass('present')};


var saveTask09 = $('<button>').addClass('saveBtn').appendTo(listEntry09);
var saveTask10 = $('<button>').addClass('saveBtn').appendTo(listEntry10);
var saveTask11 = $('<button>').addClass('saveBtn').appendTo(listEntry11);
var saveTask12 = $('<button>').addClass('saveBtn').appendTo(listEntry12);
var saveTask01 = $('<button>').addClass('saveBtn').appendTo(listEntry01);
var saveTask02 = $('<button>').addClass('saveBtn').appendTo(listEntry02);
var saveTask03 = $('<button>').addClass('saveBtn').appendTo(listEntry03);
var saveTask04 = $('<button>').addClass('saveBtn').appendTo(listEntry04);
var saveTask05 = $('<button>').addClass('saveBtn').appendTo(listEntry05);

