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

listEntry09 = $("<li>").addClass('row time-block hour').text(timeSlot09).appendTo(containerList);
listEntry10 = $("<li>").addClass('row time-block hour').text(timeSlot10).appendTo(containerList);
listEntry11 = $("<li>").addClass('row time-block hour').text(timeSlot11).appendTo(containerList);
listEntry12 = $("<li>").addClass('row time-block hour').text(timeSlot12).appendTo(containerList);
listEntry01 = $("<li>").addClass('row time-block hour').text(timeSlot01).appendTo(containerList);
listEntry02 = $("<li>").addClass('row time-block hour').text(timeSlot02).appendTo(containerList);
listEntry03 = $("<li>").addClass('row time-block hour').text(timeSlot03).appendTo(containerList);
listEntry04 = $("<li>").addClass('row time-block hour').text(timeSlot04).appendTo(containerList);
listEntry05 = $("<li>").addClass('row time-block hour').text(timeSlot05).appendTo(containerList);

if (timeCurrent > timeSlot09){
    listEntry09.addClass('.past');
    console.log('white');}
else if (timeCurrent === timeSlot09){
    listEntry09.addClass('.future');
    console.log('green');}
 else {listEntry09.addClass('.present');
    console.log('red');}
;
var textArea = $('<textarea>');
textArea.addClass('textarea').appendTo(listEntry09);

var saveTask = $('<button>');
saveTask.addClass('saveBtn').appendTo(listEntry09);

 
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


