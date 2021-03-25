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
    console.log(currentHour, " currentHour variable");

    let timeInputs = [
        
        { time: 09, input: "" },
        { time: 10, input: "" },
        { time: 11, input: "" },
        { time: 12, input: "" },
        { time: 13, input: "" },
        { time: 14, input: "" },
        { time: 15, input: "" },
        { time: 16, input: "" },
        { time: 17, input: "" },
        
    ]

    function printInputBlocks() {
        for (let i = 0; i < timeInputs.length; i++) {
            
            let timeInp = timeInputs[i].time
            console.log(timeInp + "time blocks")
            let timeBlockEl = $(`<div class="row time-block " id="${timeInp}">
                <div class="hour col-md-1">${timeInp}</div>
                <textarea class="col-md-9 description"></textarea>
                <button class="col-md-1 btn saveBtn" type="button">Save</button>
                </div>`)
            
            $(".container").append(timeBlockEl);
   
   
        }
        
        timeUpdate();

    }

    function timeUpdate(){
        console.log("Hello!")
        $('.description').each(function (){
                
            let blockH = parseInt($(this).parent().attr('id'));
            console.log($(this))
            console.log(blockH)
            console.log(currentHour)
            if (blockH < currentHour) {
                $(this).addClass('past'); 
            } else if (blockH > currentHour) {    
                $(this).addClass('future'); 
            } else {
                $(this).addClass('present');                     
            }      
        })
        
    }

    function jumboTime(){
        $('#currentDay').text(todaysDate);
    }


    jumboTime();
    printInputBlocks();
