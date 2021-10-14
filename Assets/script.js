var timeBlockNine = document.getElementById("hour9am");
var timeBlockTen = document.getElementById("hour10am");
var timeBlockEleven = document.getElementById("hour11am");
var timeBlockTwelve = document.getElementById("hour12pm");
var timeBlockOne = document.getElementById("hour1pm");
var timeBlockTwo = document.getElementById("hour2pm");
var timeBlockThree = document.getElementById("hour3pm");
var timeBlockFour = document.getElementById("hour4pm");
var timeBlockFive = document.getElementById("hour5pm");
var textAreaEl = document.getElementsByClassName("time-block");

// change background text color based on time of day
var currentTime = moment().format("H");
    console.log(currentTime);

// get all elements with class textarea
var timeBlockElements = $(".textarea");



    // loop through  bg-secondary classes
    for (var i = 0; i < timeBlockElements.length; i++) {

        // get element i's ID 
        var elementID = timeBlockElements[i].id;
        
        // use the id to find each element 
        var backgroundEl = document.getElementById(timeBlockElements[i].id);

        // remove any old classes from element
        $(timeBlockElements[i].id).removeClass(".past .present .future");

        // apply new class if task is present/past/future
        if (elementID < currentTime) {
            $(backgroundEl).addClass("past");
        }
        else if (elementID > currentTime) {
            $(backgroundEl).addClass("future");
        }
        else {
            $(backgroundEl).addClass("present");
        }
    }
    

    



// When 9 am save button is clicked save text in the 9am hour block 
document.getElementById("9am").addEventListener("click", function(event) {
    event.preventDefault();
    var hourNineText = timeBlockNine.innerHTML;
    if (timeBlockNine.innerHTML === "") {
        alert("Please add something to save");

    }
    else {
        var blockNineTask = {
            hour: "9 am",
            text: hourNineText,

        }
        localStorage.setItem("blockNineTask", JSON.stringify(blockNineTask))

    }
})

var blockNineTask = localStorage.getItem("blockNineTask");

if (blockNineTask) {
    
    var savedTask = JSON.parse(localStorage.getItem("blockNineTask"));
    timeBlockNine.innerText = savedTask.text;
    
}
else {
    // nothing to display 
}

// function repeats for each subsequent hour block 
document.getElementById("10am").addEventListener("click", function(event) {
    event.preventDefault();
    var hourTenText = timeBlockTen.innerHTML;
    if (timeBlockTen.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockTenTask = {
            hour: "10 am",
            text: hourTenText,
        }
        localStorage.setItem("blockTenTask", JSON.stringify(blockTenTask));
    }
})

var blockTenTask = localStorage.getItem("blockTenTask");

if (blockTenTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockTenTask"));
    timeBlockTen.innerText = savedTask.text;
}
else {
    
}

document.getElementById("11am").addEventListener("click", function(event) {
    event.preventDefault();
    var hourElevenText = timeBlockEleven.innerHTML;
    if (timeBlockEleven.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockElevenTask = {
            hour: "11 am",
            text: hourElevenText,
        }
        localStorage.setItem("blockElevenTask", JSON.stringify(blockElevenTask));
    }
})

var blockElevenTask = localStorage.getItem("blockElevenTask");

if (blockElevenTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockElevenTask"));
    timeBlockEleven.innerText = savedTask.text;
}
else {
    
}

document.getElementById("12pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourTwelveText = timeBlockTwelve.innerHTML;
    if (timeBlockTwelve.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockTwelveTask = {
            hour: "12 pm",
            text: hourTwelveText,
        }
        localStorage.setItem("blockTwelveTask", JSON.stringify(blockTwelveTask));
    }
})

var blockTwelveTask = localStorage.getItem("blockTwelveTask");

if (blockTwelveTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockTwelveTask"));
    timeBlockTwelve.innerText = savedTask.text;
}
else {
    
}

document.getElementById("1pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourOneText = timeBlockOne.innerHTML;
    if (timeBlockOne.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockOneTask = {
            hour: "1 pm",
            text: hourOneText,
        }
        localStorage.setItem("blockOneTask", JSON.stringify(blockOneTask));
    }
})

var blockOneTask = localStorage.getItem("blockOneTask");

if (blockOneTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockOneTask"));
    timeBlockOne.innerText = savedTask.text;
}
else {
    
}

document.getElementById("2pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourTwoText = timeBlockTwo.innerHTML;
    if (timeBlockTwo.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockTwoTask = {
            hour: "2 pm",
            text: hourTwoText,
        }
        localStorage.setItem("blockTwoTask", JSON.stringify(blockTwoTask));
    }
})

var blockTwoTask = localStorage.getItem("blockTwoTask");

if (blockTwoTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockTwoTask"));
    timeBlockTwo.innerText = savedTask.text;
}
else {
    
}

document.getElementById("3pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourThreeText = timeBlockThree.innerHTML;
    if (timeBlockThree.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockThreeTask = {
            hour: "3 pm",
            text: hourThreeText,
        }
        localStorage.setItem("blockThreeTask", JSON.stringify(blockThreeTask));
    }
})

var blockThreeTask = localStorage.getItem("blockThreeTask");

if (blockThreeTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockThreeTask"));
    timeBlockThree.innerText = savedTask.text;
}
else {
    
}

document.getElementById("4pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourFourText = timeBlockFour.innerHTML;
    if (timeBlockFour.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockFourTask = {
            hour: "4 pm",
            text: hourFourText,
        }
        localStorage.setItem("blockFourTask", JSON.stringify(blockFourTask));
    }
})

var blockFourTask = localStorage.getItem("blockFourTask");

if (blockFourTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockFourTask"));
    timeBlockFour.innerText = savedTask.text;
}
else {
    
}

document.getElementById("5pm").addEventListener("click", function(event) {
    event.preventDefault();
    var hourFiveText = timeBlockFive.innerHTML;
    if (timeBlockFive.innerHTML === "") {
        alert("Please add something to save");
    }
    else {
        var blockFiveTask = {
            hour: "5 pm",
            text: hourFiveText,
        }
        localStorage.setItem("blockFiveTask", JSON.stringify(blockFiveTask));
    }
})

var blockFiveTask = localStorage.getItem("blockFiveTask");

if (blockFiveTask) {
    var savedTask = JSON.parse(localStorage.getItem("blockFiveTask"));
    timeBlockFive.innerText = savedTask.text;
}
else {
    
}




// set colors to change depending on if item is current past due or coming up



// // event target for all the buttons 
// btns = document.getElementsByClassName("saveBtn");
// for (var i =0; i < btns.length; i++) {
//     btns[i].addEventListener("click", function() {
//         // this tells me which button is clicked - could use it to get the id
//         textArea = document.getElementById("hour" + this.id);
        
        
//             if (textArea.innerText === "") {
//                 alert("please add something to save")
//             }
//             else {

//                 console.log("There is something to save");
//             }
        
//     })
// }