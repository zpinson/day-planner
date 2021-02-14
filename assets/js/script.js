// hourEl = document.querySelectorAll(".hour");
// console.log(hourEl);
// console.log("hour: hourEl", hourEl[0].textContent);

$(document).ready(function () {
  //
  // check for btn clicks insid an on click
  // document.querySelector('.saveBtn').onclick =
  $(".saveBtn").on("click", function () {
    //grab my value for time and text
    var value = $(this).siblings(".task").val();
    var time = $(this).siblings(".hour").text();
    // var time = $(this).parent().attr('id').text();
    console.log(time);

    //save them to local storage
    localStorage.setItem(time, value);
    // localStorage.setItem('time', time)
  });

  var update = function () {
    date = moment(new Date());
    datetime.html(date.format("dddd, MMMM Do YYYY"));
    var currentHour = moment().format("hA"); 
    var currentHourVl = parseInt(currentHour.slice(0, -2))
    console.log(currentHourVl)
  };

  $(document).ready(function () {
    datetime = $("#currentDay");
    update();
    setInterval(update, 1000);
  });

  $(".hour").each(function () {
    console.log($(this).text());
    var hourVl = parseInt($(this).text().slice(0, -2))
    
    // if ($(this).text() === currentHour)
    console.log(hourVl)
  });

  //write a function to update the hour in the time blocks
  //get current time with moment

  //loop over out time block hint: (look up each)

  //check if current time has passed - add class
  for (var i = 0; i < hourEl.length; i++) {
    const element = array[index];
  }
  // addClass('past)
  //check if it is the current time - remove class add class
  // future time - remove class remove class add class

  //load any saved data from local storage
  // $('#hour-9 .task').val(localStorage.getItem('hour-9'));
});
