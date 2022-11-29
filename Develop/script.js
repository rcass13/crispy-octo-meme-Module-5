// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {

  // Display today's day and date
  var todayDate = dayjs().format('dddd, MMM D YYYY');
  $("#currentDay").html(todayDate);

  var saveBtnArray = $(".saveBtn");


  for (let timeSlot = 0; timeSlot < saveBtnArray.length; timeSlot++) {
    const saveBtn = $(saveBtnArray[timeSlot]);
    // console.log(saveBtn);

    saveBtn.click(function () {

      console.log('clicked a button!', saveBtn);

      var timeSlot = saveBtn.parent().attr("id").replace("hour-", "");
      console.log(timeSlot);
      var textInput =saveBtn.siblings(".description").val();
      console.log(textInput);

      localStorage.setItem(timeSlot,textInput);
    })
  }






  function timeTracker() {
    //get current number of hours.
    var hourNow = dayjs().hour();
    console.log(hourNow)

    // loop over time blocks
    $(".time-block").each(function () {
      var blockTime = parseInt($(this).attr("id").replace("hour-", ""));
      console.log(blockTime, ($(this).attr("id").split("hour-")))

      // To check the time and add the classes for background indicators
      if (blockTime < hourNow) {
        $(this).removeClass("future");
        $(this).removeClass("present");
        $(this).addClass("past");
      }
      else if (blockTime === hourNow) {
        $(this).removeClass("past");
        $(this).removeClass("future");
        $(this).addClass("present");
      }
      else {
        $(this).removeClass("present");
        $(this).removeClass("past");
        $(this).addClass("future");

      }
    })

    // $("#hour-8")(".description").val(localStorage.getItem);
    $("#hour-8 > .description").val(localStorage.getItem("8"));
    $("#hour-9 > .description").val(localStorage.getItem("9"));
    $("#hour-10 > .description").val(localStorage.getItem("10"));
    $("#hour-11 > .description").val(localStorage.getItem("11"));
    $("#hour-12 > .description").val(localStorage.getItem("12"));
    $("#hour-13 > .description").val(localStorage.getItem("13"));
    $("#hour-14 > .description").val(localStorage.getItem("14"));
    $("#hour-15 > .description").val(localStorage.getItem("15"));
    $("#hour-16 > .description").val(localStorage.getItem("16"));
    $("#hour-17 > .description").val(localStorage.getItem("17"));
  }

  timeTracker();
});
