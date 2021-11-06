
$(document).ready(function () {
    var time = moment().format("MMMM Do DD YYYY, h:mm:ss");
    $("#currentDay").text(time)

    //console.log(time)

    console.log(button1)
    //9am
    $("#input1").val(localStorage.getItem("9hour"))
    $("#button1").click(function () {
        localStorage.setItem("9hour", $("#input1").val())
    });

    //10am
    $("#input2").val(localStorage.getItem("10hour"))
    $("#button2").click(function () {
        localStorage.setItem("10hour", $("#input2").val())

    });
    //11am   
    $("#input3").val(localStorage.getItem("11hour"))
    $("#button3").click(function () {
        localStorage.setItem("11hour", $("#input3").val())

    });
    //12pm    
    $("#input4").val(localStorage.getItem("12hour"))
    $("#button4").click(function () {
        localStorage.setItem("12hour", $("#input4").val())

    });
    //1pm
    $("#input5").val(localStorage.getItem("13hour"))
    $("#button5").click(function () {
        localStorage.setItem("13hour", $("#input5").val())

    });
    //2pm
    $("#input6").val(localStorage.getItem("14hour"))
    $("#button6").click(function () {
        localStorage.setItem("14hour", $("#input6").val())

    });
    //3pm
    $("#input7").val(localStorage.getItem("15hour"))
    $("#button7").click(function () {
        localStorage.setItem("15hour", $("#input7").val())
    });

    //4pm
    $("#input8").val(localStorage.getItem("16hour"))
    $("#button8").click(function () {
        localStorage.setItem("16hour", $("#input8").val())

    });
    //5pm
    $("#input9").val(localStorage.getItem("17hour"))
    $("#button9").click(function () {
        localStorage.setItem("17hour", $("#input9").val())

    });

    //repeat til 5pm





    // .past

    // .present

    // .future



    //console.log(moment().format("HH"))

    if (moment().format("H") > 9) {
        $("#input1").addClass("past")

    }
    if (moment().format("H") == 9) {
        $("#input1").addClass("present")
    }

    if (moment().format("H") < 9) {
        $("#input1").addClass("future")
    }


    if (moment().format("H") > 10) {
        $("#input2").addClass("past")

    }
    if (moment().format("H") == 10) {
        $("#input2").addClass("present")
    }

    if (moment().format("H") < 10) {
        $("#input2").addClass("future")
    }


    if (moment().format("H") > 11) {
        $("#input3").addClass("past")

    }
    if (moment().format("H") == 11) {
        $("#input3").addClass("present")
    }

    if (moment().format("H") < 11) {
        $("#input3").addClass("future")
    }

    if (moment().format("H") > 12) {
        $("#input4").addClass("past")

    }
    if (moment().format("H") == 12) {
        $("#input4").addClass("present")
    }

    if (moment().format("H") < 12) {
        $("#input4").addClass("future")
    }


    if (moment().format("H") > 13) {
        $("#input5").addClass("past")

    }
    if (moment().format("H") == 13) {
        $("#input5").addClass("present")
    }

    if (moment().format("H") < 13) {
        $("#input5").addClass("future")
    }


    if (moment().format("H") > 14) {
        $("#input6").addClass("past")

    }
    if (moment().format("H") == 14) {
        $("#input6").addClass("present")
    }

    if (moment().format("H") < 14) {
        $("#input6").addClass("future")
    }


    if (moment().format("H") > 15) {
        $("#input7").addClass("past")

    }
    if (moment().format("H") == 15) {
        $("#input7").addClass("present")
    }

    if (moment().format("H") < 15) {
        $("#input7").addClass("future")
    }


    if (moment().format("H") > 16) {
        $("#input8").addClass("past")

    }
    if (moment().format("H") == 16) {
        $("#input8").addClass("present")
    }

    if (moment().format("H") < 16) {
        $("#input8").addClass("future")
    }

    if (moment().format("H") > 17) {
        $("#input9").addClass("past")

    }
    if (moment().format("H") == 17) {
        $("#input9").addClass("present")
    }

    if (moment().format("H") < 17) {
        $("#input9").addClass("future")
    }

});

