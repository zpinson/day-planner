$(document).ready(function(){

    // check for btn clicks insid an on click
    $('.saveBtn').on('click', function(){
        //grab my value for time and text
        var value = $(this).siblings('.task').val();
        var time = $(this).parent().attr('id')

        //save them to local storage
        localStorage.setItem()
    })

    //write a function to update the hour in the time blocks
    //get current time with moment

    //loop over out time block hint: (look up each)

    //check if current time has passed - add class
    // addClass('past)
    //check if it is the current time - remove class add class
    // future time - remove class remove class add class


    //load any saved data from local storage
    $('#hour-9 .task').val(localStorage.getItem('hour-9'));
})