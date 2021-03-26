
let todaysDate = moment().format("dddd, MMMM Do YYYY");
let currentHour = moment().hours();
console.log(currentHour, " currentHour variable");

let saveBtnEl = document.querySelector(".saveBtn")

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

function jumboTime(){
    $('#currentDay').text(todaysDate);
}

function blockBuilder() {
        
    for (let i = 0; i < timeInputs.length; i++) {
            
        let timeInp = timeInputs[i].time;

        if (timeInp > 12) {convTime = (timeInp - 12); 
            antePostTime = convTime.toString() + ":00pm";}

        else if (timeInp === 12) { antePostTime = timeInp.toString() + ":00pm";}
        else if (timeInp === 0) { convTime =(time + 12);
            antePostTime = convTime.toString() + ":00am";}

        else {antePostTime = timeInp.toString() + ":00am";}

        let textDisp = "";
        storedInput = localStorage.getItem([timeInputs[i].time]);
        
        if (storedInput !== null) {

           textDisp = timeInputs[i].input.concat(storedInput)

        }; 

        let timeBlockEl = $(`<div class="row time-block " id="${timeInp}">
            <div class="hour col-md-1">${antePostTime}</div>
            <textarea class="col-md-10 description">${textDisp}</textarea>
            <button class="col-md-1 btn saveBtn"><i class="far fa-save"></i></button>
            </div>`);
            
        $(".container").append(timeBlockEl);
   
        console.log(timeInp);
        console.log(antePostTime);
    };

    timeUpdate();
}

function timeUpdate(){
    
    $('.description').each(function (){
                
        let blockH = parseInt($(this).parent().attr('id'));
        
        if (blockH < currentHour) {
            $(this).addClass('past'); 
        } else if (blockH > currentHour) {    
            $(this).addClass('future'); 
        } else {
            $(this).addClass('present');                     
        }      
    })        
}

jumboTime();
blockBuilder();

$('.saveBtn').on('click', function() {

    let inputText = $(this).siblings('.description').val();
    let cTime = $(this).parent().attr('id');
        
    localStorage.setItem(cTime, inputText);
    console.log(cTime);
    console.log(inputText);    
    console.log($(this));

    let successEl = $(`<div class="container"><div class="alert alert-success col-4 align-self-center role="alert">
        Event saved! <i class="fas fa-check"></i>
        </div></div>`)

    $(".tb").prepend(successEl);
    setTimeout(function(){
        $(`.alert`).remove();
    }, 2000); 
            
});

 