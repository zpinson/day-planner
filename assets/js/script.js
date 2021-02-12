$(document).ready(function(){
// $('.saveBtn').on('click', 
    // check for btn clicks insid an on click
    document.querySelectorAll('.saveBtn').onclick = function(){
        //grab my value for time and text
        var value = $(this).siblings('.task').val();
        var time = $(this).parent().attr('#hour-9')

        //save them to local storage
        localStorage.setItem('task', value)
        localStorage.setItem('time', time)
    }

    var update = function () {
        date = moment(new Date())
        datetime.html(date.format('dddd, MMMM Do YYYY'));
    };
    
    $(document).ready(function(){
        datetime = $('#currentDay')
        update();
        setInterval(update, 1000);
    });
    

    //write a function to update the hour in the time blocks
    //get current time with moment

    //loop over out time block hint: (look up each)

    //check if current time has passed - add class
    // addClass('past)
    //check if it is the current time - remove class add class
    // future time - remove class remove class add class


    //load any saved data from local storage
    // $('#hour-9 .task').val(localStorage.getItem('hour-9'));
})
