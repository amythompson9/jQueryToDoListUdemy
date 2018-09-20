//Check off specific todo by clicking

$("li").click(function () {
    $(this).toggleClass("completed");
});

//the below iis a lot of code and logic
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