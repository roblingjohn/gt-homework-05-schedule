$("#currentDay").text(moment().format('dddd[,] MMMM Do YYYY'));

var schedMemory = ""

for (i = 9; i < 18; i++) {
    schedMemory = JSON.parse(localStorage.getItem(i));
    console.log(schedMemory)
    function setMemory() {
        if (localStorage.getItem(i)===null) {
            localStorage.setItem(i, JSON.stringify(""))
        }
    }
    setMemory();
    console.log
    var dataBlock = $("#dataBlock" + i);
    // console.log(schedMemory.currentKey)
    $(dataBlock).text(schedMemory)
    if (dataBlock.attr("data-hour") === (moment().format('H'))) {
        console.log(i)
        dataBlock.attr("class", "col-md-10 present")
    }
    else if (parseInt(dataBlock.attr("data-hour")) < parseInt((moment().format('H')))){
        dataBlock.attr("class", "col-md-10 past")
    }
    else if (parseInt(dataBlock.attr("data-hour")) > parseInt((moment().format('H')))){
        dataBlock.attr("class", "col-md-10 future")
    }
}


$("i").on("click", function(){
    var currentRow = $(this).attr("data-hour");
    var currentText = $("#dataBlock" + currentRow).val();
    console.log(currentRow)
    console.log(currentText)
    localStorage.setItem([currentRow], JSON.stringify(currentText))
}
)

