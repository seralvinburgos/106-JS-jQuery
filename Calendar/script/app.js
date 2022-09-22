var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = false;
var isVisible = false;

function saveTask() {
    console.log("Button clicked");
}
function changeIcon() {
    if (!isImportant) {
        // change to important
    $("#iImportant").removeClass(nonImportantIcon).addClass(importantIcon); isImportant = true;
    }
    else {
        // change to no nimportant
        $("#iImportant").removeClass(importantIcon).addClass(nonImportantIcon); isImportant = false;
    }
}
function toggleSection() {
    if(!isVisible) {
        // show it
        $(".info").show();
        isVisible = false;
    }
    else {
        // hide it
        $(".info").hide();
        isVisible == true;
    }
}

function init() {
    console.log("Task Manager");

    // on init, we load previous data

    $(".info").hide();
    // catch events
    $("#btnSave").click(saveTask);
    $("#iImportant").click(changeIcon);
    $("#btnToggle").click(toggleSection);

}






window.onload = init;