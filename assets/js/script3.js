//top header date and time

$('#currentDay').text("Today's date and current time is:");

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
var taskList = $('<ol>').appendTo(containerList);

var timeCurrent = moment().format('hh a')
var timeSlot = moment().format('hh a');

var timeSlot09 = moment().hour('09').format('hh a');
var timeSlot10 = moment().hour('10').format('hh a');
var timeSlot11 = moment().hour('11').format('hh a');
var timeSlot12 = moment().hour('12').format('hh a');
var timeSlot01 = moment().hour('13').format('hh a');
var timeSlot02 = moment().hour('14').format('hh a');
var timeSlot03 = moment().hour('15').format('hh a');
var timeSlot04 = moment().hour('16').format('hh a');
var timeSlot05 = moment().hour('17').format('hh a');

listEntry = $("<li>");
listEntry.text(timeSlot09);

//.addClass('hour').text(timeSlot09).appendTo(containerList);
// textArea09 = $('<textarea>').addClass('textarea').appendTo(listEntry09);
saveTask09 = $('<button>');
saveTask09.addClasss('.saveBtn').appendTo(listEntry09);



// listEntry11 = $("<li>").addClass('row time-block hour').text(timeSlot11).appendTo(containerList);
// listEntry12 = $("<li>").addClass('row time-block hour').text(timeSlot12).appendTo(containerList);
// listEntry01 = $("<li>").addClass('row time-block hour').text(timeSlot01).appendTo(containerList);
// listEntry02 = $("<li>").addClass('row time-block hour').text(timeSlot02).appendTo(containerList);
// listEntry03 = $("<li>").addClass('row time-block hour').text(timeSlot03).appendTo(containerList);
// listEntry04 = $("<li>").addClass('row time-block hour').text(timeSlot04).appendTo(containerList);
// listEntry05 = $("<li>").addClass('row time-block hour').text(timeSlot05).appendTo(containerList);


// if (timeCurrent > timeSlot09){
//     textArea09.addClass('past');}
// else if (timeCurrent === timeSlot09){
//     textArea09.addClass('present');}
//  else {textArea09.addClass('future')};
// ;


// var textArea10 = $('<textarea>');
// textArea10.addClass('textarea').appendTo(listEntry10);
// if (timeCurrent > timeSlot10){
//     textArea10.addClass('past');}
// else if (timeCurrent === timeSlot10){
//     textArea10.addClass('future');}
//  else {textArea10.addClass('present')};
// ;
// var saveTask10 = $('<button>');
// saveTask10.addClass('saveBtn').appendTo(listEntry10);

// var textArea11 = $('<textarea>');
// textArea11.addClass('textarea').appendTo(listEntry11);
// if (timeCurrent > timeSlot11){
//     textArea11.addClass('past');}
// else if (timeCurrent === timeSlot11){
//     textArea11.addClass('future');}
//  else {textArea11.addClass('present')};
// ;
// var saveTask11 = $('<button>');
// saveTask11.addClass('saveBtn').appendTo(listEntry11);

// var textArea12 = $('<textarea>');
// textArea12.addClass('textarea').appendTo(listEntry12);
// if (timeCurrent > timeSlot12){
//     textArea12.addClass('past');}
// else if (timeCurrent === timeSlot12){
//     textArea12.addClass('future');}
//  else {textArea12.addClass('present')};
// ;
// var saveTask12 = $('<button>');
// saveTask12.addClass('saveBtn').appendTo(listEntry12);

// var textArea01 = $('<textarea>');
// textArea01.addClass('textarea').appendTo(listEntry01);
// if (timeCurrent > timeSlot01){
//     textArea01.addClass('past');}
// else if (timeCurrent === timeSlot01){
//     textArea11.addClass('future');}
//  else {textArea01.addClass('present')};
// ;
// var saveTask01 = $('<button>');
// saveTask01.addClass('saveBtn').appendTo(listEntry01);

// var textArea02 = $('<textarea>');
// textArea02.addClass('textarea').appendTo(listEntry02);
// if (timeCurrent > timeSlot02){
//     textArea02.addClass('past');}
// else if (timeCurrent === timeSlot02){
//     textArea02.addClass('future');}
//  else {textArea02.addClass('present')};
// ;
// var saveTask02 = $('<button>');
// saveTask02.addClass('saveBtn').appendTo(listEntry02);

// var textArea03 = $('<textarea>');
// textArea03.addClass('textarea').appendTo(listEntry03);
// if (timeCurrent > timeSlot03){
//     textArea03.addClass('past');}
// else if (timeCurrent === timeSlot03){
//     textArea03.addClass('future');}
//  else {textArea03.addClass('present')};
// ;
// var saveTask03 = $('<button>');
// saveTask03.addClass('saveBtn').appendTo(listEntry03);

// var textArea04 = $('<textarea>');
// textArea04.addClass('textarea').appendTo(listEntry04);
// if (timeCurrent > timeSlot04){
//     textArea04.addClass('past');}
// else if (timeCurrent === timeSlot04){
//     textArea04.addClass('future');}
//  else {textArea04.addClass('present')};
// ;
// var saveTask04 = $('<button>');
// saveTask04.addClass('saveBtn').appendTo(listEntry04);

// var textArea05 = $('<textarea>');
// textArea05.addClass('textarea').appendTo(listEntry05);
// if (timeCurrent > timeSlot05){
//     textArea05.addClass('past');}
// else if (timeCurrent === timeSlot05){
//     textArea05.addClass('future');}
//  else {textArea05.addClass('present')};
// ;
// var saveTask05 = $('<button>');
// saveTask05.addClass('saveBtn').appendTo(listEntry05);

 
// textArea.text(enterTask)


// <script>
//     var allInputs = $( ":input" );
//     var formChildren = $( "form > *" );
//     $( "#messages" ).text( "Found " + allInputs.length + " inputs and the form has " +
//       formChildren.length + " children." );
     
//     $( "form" ).submit(function( event ) {
//       event.preventDefault();
//     });
//     </script>
    

    
// var formEl = $('#skills-form');
// var nameInputEl = $('#skill-name');
// var dateInputEl = $('#datepicker');
// var skillsListEl = $('#skills-list');

// var printSkills = function (name, date) {
//   var listEl = $('<li>');
//   var listDetail = name.concat(' on ', date);
//   listEl.addClass('list-group-item').text(listDetail);
//   listEl.appendTo(skillsListEl);
// };

// var handleFormSubmit = function (event) {
//   event.preventDefault();

//   var nameInput = nameInputEl.val();
//   var dateInput = dateInputEl.val();

//   if (!nameInput || !dateInput) {
//     console.log('You need to fill out the form!');
//     return;
//   }

//   printSkills(nameInput, dateInput);

//   // resets form
//   nameInputEl.val('');
//   dateInputEl.val('');
// };

// formEl.on('submit', handleFormSubmit);

// // Autocomplete widget
// $(function () {
//   var skillNames = [
//     'Bootstrap',
//     'C',
//     'C++',
//     'CSS',
//     'Express.js',
//     'Git',
//     'HTML',
//     'Java',
//     'JavaScript',
//     'jQuery',
//     'JSON',
//     'MySQL',
//     'Node.js',
//     'NoSQL',
//     'PHP',
//     'Python',
//     'React',
//     'Ruby',
//   ];
//   $('#skill-name').autocomplete({
//     source: skillNames,
//   });
// });

// // Datepicker widget
// $(function () {
//   $('#datepicker').datepicker({
//     changeMonth: true,
//     changeYear: true,
//   });
// });

// // Sortable interaction
// $(function () {
//   $('#skills-list').sortable({
//     placeholder: 'ui-state-highlight',
//   });
//   $('#skills-list').disableSelection();
// });


