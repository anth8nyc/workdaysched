    $('.saveBtn').on('click', function() {
        let inputText = $(this).siblings('.decription').val() ;
        let time = $(this).parent().attr('id');

        localStorage.setItem(time, inputText);
        
        console.log(inputText);
        console.log($(this));
        // $('notify').addClass('show');
        // setTimeout(function(){
        //     $('notify').removeClass('show');
        // }, 5000); 
    });

    let todaysDate = moment().format("dddd, MMMM Do YYYY")
    let currentHour = moment().hours();
    console.log(currentHour);

    let timeInputs = [
        
        { time: 09, input: "" },
        { time: 10, input: "" },
        { time: 11, input: "" },
        { time: 12, input: "" },
        { time: 01, input: "" },
        { time: 02, input: "" },
        { time: 03, input: "" },
        { time: 04, input: "" },
        { time: 05, input: "" },
        
    ]

    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            
            let timeInp = timeInputs[i].time
            let timeBlockEl = $(`<div class="row time-block " id="${timeInp}">
                <div class="hour col-md-1">${timeInp}</div>
                <textarea class="col-md-9 decription past"></textarea>
                <button class="col-md-1 btn saveBtn" type="button">Save</button>
                </div>`)
            
            $(".container").append(timeBlockEl);
        }
    }

    function jumboTime(){
        $('#currentDay').text(todaysDate);
    }

    function timeUpdate(){

        $('.time-block').each(function (){

            let blockH = parseInt($(this).attr('id'));
            console.log(blockH)
            if (blockH < currentHour) {
                $(this).textarea.addClass('past'); 
            } else if (blockH === currentH) {
    
                $(this).textarea.removeClass('past'); 
                $(this).textarea.addClass('present'); 
            } else {
                $(this).textarea.removeClass('past'); 
                $(this).textarea.removeClass('present'); 
                $(this).textarea.addClass('future'); 
                
            }      
        })
    }

    jumboTime();
    printInputBlocks();
    // timeUpdate();
