/*Search Buttons*/
$(function () {

    $("#showAll").on("click", function () {
        $("#Images_card, #Icons_card, #Audio_card, #Video_card").show();
    });

    $("#Images").on("click", function () {
        $("#Images_card, #Icons_card, #Audio_card, #Video_card").show();
        $("#Images_card").show();
        $("#Icons_card, #Audio_card, #Video_card").hide();
    });

    $("#Icons").on("click", function () {
        $( "#Images_card, #Icons_card, #Audio_card, #Video_card" ).show();
        $("#Images_card, #Audio_card, #Video_card").hide();
        $("#Icons_card").show();
    });

    $("#Audio").on("click", function () {
        $( "#Images_card, #Icons_card, #Audio_card, #Video_card" ).show();
        $("#Images_card, #Video_card, #Icons_card").hide();
        $("#Audio_card").show();
    });

    $("#Video").on("click", function () {
        $( "#Images_card, #Icons_card, #Audio_card, #Video_card" ).show();
        $("#Images_card, #Audio_card, #Icons_card").hide();
        $("#Video_card").show();
    });
})

/*Search Bar*/

$(document).ready(function () {
    $("#searchinput").on("keyup", function () {
        var value = $(this).val().toLowerCase();
        $(".grid article").filter(function () {
            $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
            console.log($(this).toggle($(this).text().toLowerCase().indexOf(value) > -1))
        });
    });
});