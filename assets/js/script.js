$('#currentDay').text("Today's date is:");

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



var containerList = $(".container");
var timeCurrent = moment().format('hh a')
var timeSlot = moment().format('hh a');
listEntry09 = $("<li>").addClass('row time-block hour').text(timeSlot).appendTo(containerList);
listEntry10 = $("<li>").addClass('row time-block hour').text(timeSlot).appendTo(containerList);
listEntry11 = $("<li>").addClass('row time-block hour').text(timeSlot).appendTo(containerList);
listEntry12 = $("<li>").addClass('row time-block hour').text(timeSlot).appendTo(containerList);
listEntry01 = $("<li>").addClass('row time-block hour').text(timeSlot).appendTo(containerList);
listEntry02 = $("<li>").addClass('row time-block hour').text(timeSlot).appendTo(containerList);
listEntry03 = $("<li>").addClass('row time-block hour').text(timeSlot).appendTo(containerList);
listEntry04 = $("<li>").addClass('row time-block hour').text(timeSlot).appendTo(containerList);
listEntry05 = $("<li>").addClass('row time-block hour').text(timeSlot).appendTo(containerList);





listEntry1.addClass('row time-block hour');
listEntry2.addClass('row time-block hour');
$(listEntry1).text('testing');
$(listEntry2).text('testing2');
listEntry1.appendTo(containerList);
listEntry2.appendTo(containerList);


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


