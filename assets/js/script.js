//top header date and time

$('#currentDay').text("Today's date is:");

//display the actual running time on top
var datetime = null,
        date = null;

var update = function () {
    date = moment(new Date())
    datetime.html(date.format('dddd, Do MMMM YYYY'));
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

var hour09 = $("#09");
var hour10 = $("#10");
var hour11 = $("#11");
var hour12 = $("#12");
var hour13 = $("#13");
var hour14 = $("#14");
var hour15 = $("#15");
var hour16 = $("#16");
var hour17 = $("#17");

if (time09.isBefore(moment(), 'hour')){
    hour09.addClass('past');}
else if (time09.isSame(moment(), 'hour')){
    hour09.addClass('present');}
else {hour09.addClass('future')};

if (time10.isBefore(moment(), 'hour')){
    hour10.addClass('past');}
else if (time10.isSame(moment(), 'hour')){
    hour10.addClass('present');}
else {hour10.addClass('future')};

if (time11.isBefore(moment(), 'hour')){
    hour11.addClass('past');}
else if (time11.isSame(moment(), 'hour')){
    hour11.addClass('present');}
else {hour11.addClass('future')};

if (time12.isBefore(moment(), 'hour')){
    hour12.addClass('past');}
else if (time12.isSame(moment(), 'hour')){
    hour12.addClass('present');}
else {hour12.addClass('future')};

if (time13.isBefore(moment(), 'hour')){
    hour13.addClass('past');}
else if (time13.isSame(moment(), 'hour')){
    hour13.addClass('present');}
else {hour13.addClass('future')};

if (time14.isBefore(moment(), 'hour')){
    hour14.addClass('past');}
else if (time14.isSame(moment(), 'hour')){
    hour14.addClass('present');}
else {hour14.addClass('future')};

if (time15.isBefore(moment(), 'hour')){
    hour15.addClass('past');}
else if (time15.isSame(moment(), 'hour')){
    hour15.addClass('present');}
else {hour15.addClass('future')};

if (time16.isBefore(moment(), 'hour')){
    hour16.addClass('past');}
else if (time16.isSame(moment(), 'hour')){
    hour16.addClass('present');}
else {hour16.addClass('future')};

if (time17.isBefore(moment(), 'hour')){
    hour17.addClass('past');}
else if (time17.isSame(moment(), 'hour')){
    hour17.addClass('present');}
else {hour17.addClass('future')};


//save text entry in local storage and print on page schedule   

$("#09").val(' ');
$("#10").val(' ');
$("#11").val(' ');
$("#12").val(' ');
$("#13").val(' ');
$("#14").val(' ');
$("#15").val(' ');
$("#16").val(' ');
$("#17").val(' ');
$("#18").val(' ');
$("#19").val(' ');


function getTextValue09(){
    textArea09 = $('#09').val();
    localStorage.setItem('textArea09', textArea09);}
readTextArea09 = localStorage.getItem('textArea09');
console.log(readTextArea09);
$("#09").val(readTextArea09);


function getTextValue10(){
    textArea10 = $('#10').val();
    localStorage.setItem('textArea10', textArea10);}
readTextArea10 = localStorage.getItem('textArea10');
console.log(readTextArea10);
$("#10").val(readTextArea10);

function getTextValue11(){
    textArea11 = $('#11').val();
    localStorage.setItem('textArea11', textArea11);}
readTextArea11 = localStorage.getItem('textArea11');
console.log(readTextArea11);
$("#11").val(readTextArea11);

function getTextValue12(){
    textArea12 = $('#12').val();
    localStorage.setItem('textArea12', textArea12);}
readTextArea12 = localStorage.getItem('textArea12');
console.log(readTextArea12);
$("#12").val(readTextArea12);

function getTextValue13(){
    textArea13 = $('#13').val();
    localStorage.setItem('textArea13', textArea13);};
readTextArea13 = localStorage.getItem('textArea13');
console.log(readTextArea13);
$("#13").val(readTextArea13);

function getTextValue14(){
    textArea14 = $('#14').val();
    localStorage.setItem('textArea14', textArea14);};
readTextArea14 = localStorage.getItem('textArea14');
console.log(readTextArea14);
$("#14").val(readTextArea14);

function getTextValue15(){
    textArea15 = $('#15').val();
    localStorage.setItem('textArea15', textArea15);};
readTextArea15 = localStorage.getItem('textArea15');
console.log(readTextArea15);
$("#15").val(readTextArea15);


function getTextValue16(){
    textArea16 = $('#16').val();
    localStorage.setItem('textArea16', textArea16);};
readTextArea16 = localStorage.getItem('textArea16');
console.log(readTextArea16);
$("#16").val(readTextArea16);


function getTextValue17(){
    textArea17 = $('#17').val();
    localStorage.setItem('textArea17', textArea17);};
readTextArea17 = localStorage.getItem('textArea17');
console.log(readTextArea17);
$("#17").val(readTextArea17);

