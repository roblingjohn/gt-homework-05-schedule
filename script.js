// displays current time in jumbotron 
$("#currentDay").text(moment().format('dddd[,] MMMM Do YYYY'));

var schedMemory = ""

// loop for all time blocks 
for (i = 9; i < 18; i++) {
    // gets information from local storage for current block
    schedMemory = JSON.parse(localStorage.getItem(i));
    // sets variable for current block 
    var dataBlock = $("#dataBlock" + i);
    // writes data from local storage into current block 
    $(dataBlock).text(schedMemory)
    // checks whether block is past, present, or future and sets style accordingly 
    if (dataBlock.attr("data-hour") === (moment().format('H'))) {
        dataBlock.attr("class", "col-md-10 present")
    }
    else if (parseInt(dataBlock.attr("data-hour")) < parseInt((moment().format('H')))){
        dataBlock.attr("class", "col-md-10 past")
    }
    else if (parseInt(dataBlock.attr("data-hour")) > parseInt((moment().format('H')))){
        dataBlock.attr("class", "col-md-10 future")
    }
}

// sets data in textarea to local memory 
$("i").on("click", function(){
    var currentRow = $(this).attr("data-hour");
    var currentText = $("#dataBlock" + currentRow).val();
    localStorage.setItem([currentRow], JSON.stringify(currentText))
}
)

