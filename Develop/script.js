
// Save functionality
$(document).ready(function(){
    
    let todaysDate = moment().format("dddd, MMMM Do YYYY")

    let currentHour = moment().hours();
    
    console.log(currentHour);

    let timeInputs = [
        { time: 7, input: "" },
        { time: 8, input: "" },
        { time: 9, input: "Wake up" },
        { time: 10, input: "" },
        { time: 11, input: "Go to work" },
        { time: 12, input: "" },
        { time: 13, input: "" },
        { time: 14, input: "" },
        { time: 15, input: "" },
        { time: 16, input: "" },
        { time: 17, input: "" },
        { time: 13, input: "" },
        { time: 18, input: "" },
        { time: 19, input: "" },
        { time: 20, input: "" },
        { time: 21, input: "" },
        { time: 22, input: "" },
        { time: 23, input: "" },
    ]



    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            console.log(timeInputs[i].time, timeInputs[i].input);
            var inputGroup = $('<div class="input-group row time-block">');
            
            var inputGroupPrepend = $('<div class="hour input-group-prepend"><span class="input-group-text">' + timeInputs[i].time + ':00' + '</span>');
            var inputEl = $('<input type="text" class="form-control" value="' + timeInputs[i].input + '">');
            var butBuild = $('<button class="btn saveBtn">Save</button>');

            inputGroup.append(inputGroupPrepend).append(inputEl).append(butBuild);
            $(".container").append(inputGroup);
        }
    }







    $('.saveBtn').on('click', function() {
        let value = $(this).siblings('.description').val();
        let time = $(this).parent().attr('id');
        localStorage.setItem(time, value);
        console.log(time, value)
        $('notification').addClass('show');
        setTimeout(function(){
            $('notification').removeClass('show');
        }, 5000); 
    });

    function jumboTime(){
        $('#currentDay').text(todaysDate);
    }

    function timeUpdate() {

        currentH = moment().hours();

        $('.time-block').each(function (){

            let blockH = parseInt($(this).attr('id').split('-')[1]);


            if (blockH < currentH) {
                $(this).addClass('past'); 
            } else if (blockH === currentH) {
    
                $(this).removeClass('past'); 
                $(this).addClass('present'); 
            } else {
                $(this).removeClass('past'); 
                $(this).removeClass('present'); 
                $(this).addClass('future'); 
                
            }
                
        })

    }

    jumboTime();
    printInputBlocks();
    // timeUpdate();

});
