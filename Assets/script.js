

$(".textarea").on("click", function() {
    var text= $(this)
    .text()
    .trim();
    console.log(text);

    var newDueItem = $("<textarea>")
       .addClass("textarea")
       .val(text);
       $(this).replaceWith(newDueItem);
       newDueItem.trigger("focus");
})



// $(document).ready(function () {
//     $("p").click(function(event) {
//         var text= $(this)
//         .text()
//         .trim();
//         console.log(text);
        

    //    var newTask = $("<textarea>")
    //    .addClass("textarea")
    //    .val(text);
    //    $(this).replaceWith(newTask);
    //    newTask.trigger("focus");

//     })
// })

