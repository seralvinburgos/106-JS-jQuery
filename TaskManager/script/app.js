var importantIcon = "fas fa-star";
var nonImportantIcon = "far fa-star";
var isImportant = false;
var notVisible = true;

function saveTask() {
    let title = $("#txtTitle").val();
    let dueDate = $("#txtDueDate").val();
    let category = $("#txtCategory").val();
    let tag = $("#txtTag").val();
    let color = $("#txtColor").val();
    let description = $("#txtDescription").val();

    let task = new Task(title, dueDate, category, tag, color, description);
    displayTask(task);
    clearForm();
}

function clearForm() {
    $("#txtTitle").val("");
    $("#txtDueDate").val("");
    $("#txtCategory").val("selected");
    $("#txtTag").val("");
    $("#txtColor").val("");
    $("#txtDescription").val("");
}

// create a displayTask function
// the fn should receive a task parameter
// and console log the parameter

function displayTask(task) {
    console.log(task);

    let syntax = `
    <div class="container d-flex flex-row justify-content-between align-items-stretch align-items-center rounded-3 shadow">
        <div class="task-1 col-6 d-flex flex-column flex-fill rounded-3">
            <div class="text-start mt-3 ms-2"><h3>${task.title}</h3> </div>
            <br>
            <div class="text-wrap text-start ms-2"><label>${task.description}</label></div>
        </div>
        <div class="task-2 col-2 d-flex flex-column flex-fill my-auto">
            <div class="fst-italic"><h6>Due Date</h6></div>
            <div class=""><label>${task.dueDate}</label></div>
            <br>
            <div class="fst-italic"><h6>Color</h6></div>
            <div class=""><label>${task.color}</label></div>
        </div>
        <div class="task-3 col-2 d-flex flex-column flex-fill my-auto">
            <div class="fst-italic"><h6>Category:</h6></div>
            <div class=""><label>${task.category}</label></div>
            <br>
            <div class="fst-italic"><h6>Tag:</h6></div>
            <div class=""><label>${task.tag}</label></div>
        </div>
    </div>
    `;

    $("#taskList").append(syntax);
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
    if (notVisible) {
        $(".info").slideDown(500);
        notVisible = false;
    }else {
        $(".info").slideUp(500);
        notVisible = true;
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