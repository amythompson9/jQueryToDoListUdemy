//Check off specific todo by clicking
//$("li").click(function () {
//    $(this).toggleClass("completed");
//});

//above is old code that wouldn't work when a new item is
//added to the list
//below uses on() so that a new item can still be deleted
$("ul").on("click", "li", function () {
    $(this).toggleClass("completed");
});

//the below is a lot of code and logic
//so we just added a completed class to css
//and made the code above


//$("li").click(function () {
//    //if li is gray
//    if ($(this).css("color") === "rgb(128, 128, 128)") {
//        //turn it black
//        $(this).css({
//            color: "black",
//            textDecoration: "none",
//        });
//    }
//    else {
//        $(this).css({
//            color: "gray",
//            textDecoration: "line-through",
//        });
//    }
//});

//Click on X to delete To-Do

$("ul").on("click", "span", function (event) {
    $(this).parent().fadeOut(500, function () {
        $(this).remove();
    });
    event.stopPropagation();
});

$("input[type='text']").keypress(function (event) {
    if (event.which === 13) {
        //grabbing new todo text from input
        var todoText = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        $("ul").append("<li><span>X</span> " + todoText + "</li>");
    }
});