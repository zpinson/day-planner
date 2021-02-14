//current time in a 24 hour format 
var currentHour = moment().format("k");
// current time stored as a number
var currentHourVl = parseInt(currentHour);

// pulling from the local storage and putting in the coresponding slot
document.getElementById("hour-9").innerHTML = localStorage.getItem("9AM");
document.getElementById("hour-10").innerHTML = localStorage.getItem("10AM");
document.getElementById("hour-11").innerHTML = localStorage.getItem("11AM");
document.getElementById("hour-12").innerHTML = localStorage.getItem("12PM");
document.getElementById("hour-13").innerHTML = localStorage.getItem("1PM");
document.getElementById("hour-14").innerHTML = localStorage.getItem("2PM");
document.getElementById("hour-15").innerHTML = localStorage.getItem("3PM");
document.getElementById("hour-16").innerHTML = localStorage.getItem("4PM");
document.getElementById("hour-17").innerHTML = localStorage.getItem("5PM");
document.getElementById("hour-18").innerHTML = localStorage.getItem("6PM");

$(document).ready(function () {
  //saving to the local storage the data as value and corresponding hour as the key with the saving button
  $(".saveBtn").on("click", function () {
    //grab my value for time and text
    var value = $(this).siblings(".task").val();
    var time = $(this).siblings(".hour").text();
    // console.log(time);

    //save them to local storage
    localStorage.setItem(time, value);
  });
  //grabs today date from moment.js
  var update = function () {
    date = moment(new Date());
    datetime.html(date.format("dddd, MMMM Do YYYY"));

    // console.log(currentHourVl);
  };
  // insert the curebt date to the html
  $(document).ready(function () {
    datetime = $("#currentDay");
    update();
    setInterval(update, 1000);
  });

  //com
  $(".time").each(function () {
    // console.log($(this).text());
    var hourVl = parseInt($(this).text());

    if (hourVl === currentHourVl) {
      $(this).siblings(".task").addClass("present");
      $(this).siblings(".task").removeClass("past");
      $(this).siblings(".task").removeClass("future");
    } else if (hourVl > currentHourVl) {
      $(this).siblings(".task").addClass("future");
      $(this).siblings(".task").removeClass("past");
      $(this).siblings(".task").removeClass("present");
    } else {
      $(this).siblings(".task").addClass("past");
      $(this).siblings(".task").removeClass("present");
      $(this).siblings(".task").removeClass("future");
    }
    // console.log(hourVl);
  });

 

  //write a function to update the hour in the time blocks
  //get current time with moment

  //loop over out time block hint: (look up each)

  //check if current time has passed - add class
  
  // addClass('past)
  //check if it is the current time - remove class add class
  // future time - remove class remove class add class

  //load any saved data from local storage
//   document.getElementById("123").innerHTML = localStorage.getItem("9AM");
  //   $('#hour-9 .task').val(localStorage.getItem('9AM'));
});
