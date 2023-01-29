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

var timeCurrent = moment();
var time09 = moment(9, "HH");   
var time10 = moment(10, "HH");   
var time11 = moment(11, "HH");   
var time12 = moment(12, "HH");   
var time13 = moment(13, "HH");   
var time14 = moment(14, "HH");   
var time15 = moment(15, "HH");   
var time16 = moment(16, "HH");   
var time17 = moment(17, "HH");   

console.log(time12);


var hour09 = $("#09");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13 = $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");
var hour17 = $("#17");

if (timeCurrent > time09){
    hour09.addClass('past');}
else if (timeCurrent === time09){
    hour09.addClass('present');}
else {hour09.addClass('future')};

if (timeCurrent > time10){
    hour10.addClass('past');}
else if (timeCurrent === time10){
    hour10.addClass('present');}
else {hour10.addClass('future')};

if (timeCurrent > time11){
    hour11.addClass('past');}
else if (timeCurrent === time11){
    hour11.addClass('present');}
else {hour11.addClass('future')};

if (timeCurrent > time12){
    hour12.addClass('past');}
else if (timeCurrent === time12){
    hour12.addClass('present');}
else {hour12.addClass('future')};

if (timeCurrent > time13){
    hour13.addClass('past');}
else if (timeCurrent === time13){
    hour13.addClass('present');}
else {hour13.addClass('future')};

if (timeCurrent > time14){
    hour14.addClass('past');}
else if (timeCurrent === time14){
    hour14.addClass('present');}
else {hour14.addClass('future')};

if (timeCurrent > time15){
    hour15.addClass('past');}
else if (timeCurrent === time15){
    hour15.addClass('present');}
else {hour15.addClass('future')};

if (timeCurrent > time16){
    hour16.addClass('past');}
else if (timeCurrent === time16){
    hour16.addClass('present');}
else {hour16.addClass('future')};

if (timeCurrent > time17){
    hour17.addClass('past');}
else if (timeCurrent === time17){
    hour17.addClass('present');}
else {hour17.addClass('future')};

textArea09 = $('<textarea>').addClass('textarea').appendTo(hour09);

var storeText09 = localStorage.setItem('textArea09', textArea09.val());
var readText09 = localStorage.getItem('textArea09');
hour09.text(readText09);
console.log(textArea09.val());


