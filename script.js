$("#currentDay").text(moment().format('dddd[,] MMMM Do YYYY'));

for (i = 9; i < 18; i++) {
    var dataBlock = $("#dataBlock" + i);
    if (dataBlock.attr("data-hour") === (moment().format('H'))) {
        console.log(i)
        dataBlock.attr("class", "col-md-10 present")
    }
    else if (parseInt(dataBlock.attr("data-hour")) < parseInt((moment().format('H')))){
        console.log("before")
        dataBlock.attr("class", "col-md-10 past")
    }
    else if (parseInt(dataBlock.attr("data-hour")) > parseInt((moment().format('H')))){
        console.log("future")
        dataBlock.attr("class", "col-md-10 future")
    }
}

